"use client";
import { useState, useEffect, useMemo } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/_providers/Cart";
import { Loader } from "@/app/_components/Loader";
import ShippingAddress from "./ShippingAddress";
import ShppingMethod from "./ShippingMethod";
import BillingAddress from "./BillingAddress";
import GuestUserEmail from "./GuestUserEmail";

const checkForExistingOrderID = () => getCookie("orderId");
const clearOrderCookie = () => deleteCookie("orderId");

// ensure the Razorpay script exists before constructing the widget
async function loadRazorpay() {
  if (typeof window !== "undefined" && window.Razorpay) return true;
  return await new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function CheckoutForm({ user, status }) {
  const router = useRouter();
  const { cart, cartIsEmpty, cartReady, clearCart } = useCart();

  const [isBillingSame, setIsBillingSame] = useState(true);
  const [checkingOut, setCheckingOut] = useState(false);

  const phoneRegExp =
    /^((\+[1-9]{1,4}[\s-]*)|(\([0-9]{2,3}\)[\s-]*)|([0-9]{2,4})[\s-]*)*?[0-9]{3,4}?[\s-]*[0-9]{3,4}?$/;

  // ---------- API helpers ----------

  const createGarminOrder = async (orderData) => {
    try {
      const res = await fetch("/api/order/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(orderData),
      });
      if (!res.ok) throw new Error();
      const order = await res.json();
      if (order?.id) {
        setCookie("orderId", order.id, {
          path: "/",
          secure: true,
          sameSite: "lax",
          maxAge: 60 * 60 * 2,
        });
      }
      return order;
    } catch (e) {
      toast.error("Could not create order. Please try again.");
      return null;
    }
  };

  const updateGarminOrder = async (payload) => {
    try {
      const res = await fetch("/api/order/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      return await res.json();
    } catch (e) {
      toast.error("Could not update order.");
      return null;
    }
  };

  const createDelhiveryManifestation = async (orderId) => {
    try {
      const res = await fetch("/api/order/manifestation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id: orderId }), // send only id
      });
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  };

  const updateGarminOrderStatus = async (orderData) => {
    try {
      const res = await fetch("/api/order/updateOrderStatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(orderData),
      });
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  };

  // server computes the amount; we send only orderId
  const createRazorpayOrder = async (orderId) => {
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ orderId }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("createRazorpayOrder failed:", res.status, text);
        throw new Error();
      }
      const data = await res.json();
      return data?.orderId || null;
    } catch (e) {
      toast.error("Payment initialization failed.");
      return null;
    }
  };

  // ---------- Payment flow ----------

  const processPayment = async (order) => {
    setCheckingOut(true);
    try {
      // 1) ensure SDK is loaded
      const sdkOk = await loadRazorpay();
      if (!sdkOk || !window.Razorpay) {
        toast.error(
          "Could not load Razorpay. Check your network and try again."
        );
        setCheckingOut(false);
        return;
      }

      // 2) request a Razorpay order id from your server
      const rpOrderId = await createRazorpayOrder(order.id);
      if (!rpOrderId) {
        setCheckingOut(false);
        return;
      }

      // 3) open the widget
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // publishable key
        currency: "INR",
        name: "Garmin India",
        description: "Checkout",
        order_id: rpOrderId,
        handler: async function (response) {
          try {
            const verifyRes = await fetch("/api/order/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({
                internalOrderId: order.id, // your own order id
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              }),
            });
            const verify = await verifyRes.json();

            if (verify?.isOk) {
              const manifestation = await createDelhiveryManifestation(
                order.id
              );
              const waybill = manifestation?.success
                ? manifestation?.packages?.[0]?.waybill || ""
                : "";

              const paymentUpdate = await updateGarminOrderStatus({
                id: order.id,
                razorpayPaymentId: response.razorpay_payment_id,
                orderStatus: "processing",
                trackingId: waybill || undefined,
              });

              toast.success(
                paymentUpdate
                  ? "Payment successful!"
                  : "Payment received. Processing shortly."
              );
              clearOrderCookie();
              clearCart();
              router.push(`/account/orders/${order.id}`);
            } else {
              toast.error("Payment could not be verified.");
            }
          } catch (e) {
            toast.error("Verification failed.");
          } finally {
            setCheckingOut(false);
          }
        },
        modal: {
          ondismiss: function () {
            toast("Payment cancelled");
            setCheckingOut(false);
          },
        },
        prefill: {
          name: order?.orderedBy?.full_name,
          email: order?.orderedBy?.email,
          phone: order?.shippingAddress?.phone,
        },
        notes: { order_ref: order?.id },
        theme: { color: "#6dcff6" },
      };

      const rz = new window.Razorpay(options);
      rz.on("payment.failed", (resp) => {
        toast.error(resp?.error?.description || "Payment failed");
        setCheckingOut(false);
      });
      rz.open();
    } catch (e) {
      console.error(e);
      toast.error("Unexpected error during payment.");
      setCheckingOut(false);
    }
  };

  // ---------- Formik ----------

  const formik = useFormik({
    initialValues: {
      email: user ? user.email : "",
      shipping_name: user ? user.shippingAddress.name : "",
      shipping_phone: user ? user.shippingAddress.phone : "",
      shipping_flat_home: user ? user.shippingAddress.flat_home : "",
      shipping_locality: user ? user.shippingAddress.localty : "",
      shipping_landmark: user ? user.shippingAddress.landmark : "",
      shipping_city: user ? user.shippingAddress.city : "",
      shipping_pincode: user ? user.shippingAddress.pincode : "",
      shipping_state: user ? user.shippingAddress.state : "",
      country: "IN",
      isBillingSame: true,
      promotion: user ? user.promotion : "",
      billing_name: user ? user.billingAddress.name : "",
      billing_phone: user ? user.billingAddress.phone : "",
      billing_flat_home: user ? user.billingAddress.flat_home : "",
      billing_locality: user ? user.billingAddress.localty : "",
      billing_landmark: user ? user.billingAddress.landmark : "",
      billing_city: user ? user.billingAddress.city : "",
      billing_pincode: user ? user.billingAddress.pincode : "",
      billing_state: user ? user.billingAddress.state : "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Must be a valid email")
        .required("This field is required"),
      shipping_name: yup.string().trim().required("This field is required"),
      shipping_phone: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("This field is required"),
      shipping_flat_home: yup
        .string()
        .trim()
        .required("This field is required"),
      shipping_locality: yup.string().trim().required("This field is required"),
      shipping_landmark: yup.string().trim(),
      shipping_city: yup.string().trim().required("This field is required"),
      shipping_pincode: yup.string().trim().required("This field is required"),
      shipping_state: yup.string().trim().required("This field is required"),
      isBillingSame: yup.boolean(),
      promotion: yup.boolean(),
      billing_name: yup
        .string()
        .trim()
        .when("isBillingSame", {
          is: false,
          then: (s) => s.required("This field is required"),
        }),
    }),
    onSubmit: async (values) => {
      if (!cartReady) return;
      if (cartIsEmpty) {
        toast.error("Your cart is empty.");
        return;
      }
      setCheckingOut(true);

      const existingOrderId = checkForExistingOrderID();

      // prepare payload from provider cart
      const itemsSrc = Array.isArray(cart?.items) ? cart.items : [];
      const orderProducts = itemsSrc
        .filter((item) => item && item.product)
        .map((item) => ({
          product: item.product.id,
          sku: item.product.sku,
          quantity: item.quantity,
          categories: item?.product?.categories?.map((c) => c.id) || [],
        }));

      const billingAddress = {
        name: values.billing_name,
        home: values.billing_flat_home,
        localty: values.billing_locality,
        city: values.billing_city,
        landmark: values.billing_landmark,
        pincode: values.billing_pincode,
        state: values.billing_state,
        phone: values.billing_phone,
      };

      const shippingAddress = {
        name: values.shipping_name,
        home: values.shipping_flat_home,
        localty: values.shipping_locality,
        city: values.shipping_city,
        landmark: values.shipping_landmark,
        pincode: values.shipping_pincode,
        state: values.shipping_state,
        phone: values.shipping_phone,
      };

      const orderData = {
        orderedBy: user?.id,
        orderId: existingOrderId || null,
        coupon: cart?.coupon,
        items: orderProducts,
        billingAddress,
        shippingAddress,
      };

      try {
        const order = existingOrderId
          ? await updateGarminOrder({ orderData, orderId: existingOrderId })
          : await createGarminOrder(orderData);

        if (order?.id) {
          await processPayment(order);
        } else {
          toast.error("Order could not be initialized.");
          setCheckingOut(false);
        }
      } catch {
        toast.error("Something went wrong.");
        setCheckingOut(false);
      }
    },
  });

  // ---------- UI ----------

  // block until cart has hydrated so form has actual values
  if (!cartReady) {
    return (
      <div className="py-10 flex justify-center">
        <Loader />
      </div>
    );
  }

  const handleIsBillingSameChange = (e) => {
    const checked = e.target.checked;
    setIsBillingSame(checked);
    formik.setFieldValue("isBillingSame", checked);
  };

  return (
    <div className="relative">
      <div className="checkout__prompt">
        <div>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <GuestUserEmail formik={formik} status={status} />

              <div className="shipping__address mt-4">
                <ShippingAddress formik={formik} />
              </div>

              <ShppingMethod />

              <div className="flex relative">
                <input
                  id="isBillingSame"
                  name="isBillingSame"
                  type="checkbox"
                  className="hidden"
                  onChange={handleIsBillingSameChange}
                  checked={isBillingSame}
                />
                <label
                  htmlFor="isBillingSame"
                  className="ml-2 block text-black px-6 py-2 form_checkbox_label cursor-pointer"
                >
                  <span>Billing Address Is the Same as Shipping Address</span>
                </label>
              </div>

              {!isBillingSame && (
                <div className="billing__address mt-2">
                  <BillingAddress formik={formik} />
                </div>
              )}

              <div className="mt-4">
                <button
                  type="submit"
                  className={`submit ${
                    formik.isValid && !checkingOut ? "" : "submit--disabled"
                  }`}
                  disabled={!formik.isValid || checkingOut}
                >
                  {!checkingOut ? (
                    <span>place order</span>
                  ) : (
                    <Loader size="small" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {checkingOut ? (
        <div className="h-full w-full flex justify-center items-center absolute top-0 left-0 bg-white/80">
          <Loader />
        </div>
      ) : null}
    </div>
  );
}
