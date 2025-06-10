"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/app/_components/Loader";
import ShippingAddress from "./ShippingAddress";
import ShppingMethod from "./ShippingMethod";
import BillingAddress from "./BillingAddress";
import GuestUserEmail from "./GuestUserEmail";
import toast from "react-hot-toast";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useOrder } from "@/app/_providers/Order";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/_providers/Cart";

const checkForExisitingOrderID = () => {
  const garminOrderId = getCookie("orderId");
  return garminOrderId;
};
const clearOrder = () => {
  deleteCookie("orderId");
};

const CheckoutForm = ({ user, status, cartTotal, cart }) => {
  const route = useRouter();
  const { clearCart } = useCart();
  const [isBillingSame, setIsBillingSame] = useState(true);
  const [checkingOut, setCheckingOut] = useState(false);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const createGarminOrder = async (orderData) => {
    console.log("createGarminOrder");
    try {
      const response = await fetch("/api/order/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const order = await response.json();
      setCookie("orderId", order.id);
      return order;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const updateGarminOrder = async (orderData) => {
    console.log("updateGarminOrder");
    try {
      const response = await fetch("/api/order/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const order = await response.json();
      return order;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const createDelhiveryManifestation = async (orderData) => {
    try {
      const response = await fetch("/api/order/manifestation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const updateGarminOrderStatus = async (orderData) => {
    try {
      const response = await fetch("/api/order/updateOrderStatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const order = await response.json();
      return order;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const initiatePluralPayment = async (order) => {
    try {
      setCheckingOut(true);

      const tokenResponse = await fetch("/api/plural/generate-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const tokenResult = await tokenResponse.json();
      const token = tokenResult.access_token;
      if (!token) throw new Error("Plural auth token not received.");

      const products = cart.items.map((item) => ({
        product_code: item.product.sku || item.product.id,
        product_amount: {
          currency: "INR",
          value: parseFloat(item.product.price) * 100,
        },
      }));

      const checkoutResponse = await fetch("/api/plural/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          merchant_id: process.env.NEXT_PUBLIC_PLURAL_MERCHANT_ID,
          merchant_order_reference: order.id + `${Date.now()}`,
          amount: parseFloat(order.total) * 100,
          currency: "INR",
          integration_mode: "IFRAME",
          customer: {
            name: order.orderedBy.full_name,
            email: order.orderedBy.email,
            phone: order.shippingAddress.phone,
            customer_id: user?.id || order.orderedBy.id,
            address: {
              street_name: order.shippingAddress.flat_home,
              street_number: order.shippingAddress.flat_home,
              city: order.shippingAddress.city,
              zip_code: order.shippingAddress.pincode,
              state: order.shippingAddress.state,
              country: order.shippingAddress.country || "INDIA",
              address1: order.shippingAddress.flat_home,
              address2: "",
              address3: "",
            },
          },
          products,
          order_id: order.id,
          token: token,
          notes: `Garmin Order ${order.id}`,
        }),
      });

      const checkoutResult = await checkoutResponse.json();
      const { redirect_url, plural_order_id, plural_token } = checkoutResult;

      if (!redirect_url || !plural_order_id || !plural_token) {
        throw new Error("Incomplete checkout data received from Plural.");
      }

      const sdkUrl =
        "https://checkout-staging.pluralonline.com/v3/web-sdk-checkout.js";
      const sdkAlreadyLoaded = !!window.Plural;

      const launchCheckout = () => {
        const plural = new window.Plural({
          redirectUrl: redirect_url,
          successHandler: async (res) => {
            console.log("✅ Initial SDK success response:", res);

            try {
              const verifyRes = await fetch("/api/plural/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ order_id: plural_order_id }),
              });

              const verifyData = await verifyRes.json();
              console.log("🔍 Payment verification result:", verifyData);

              if (verifyData.status === "SUCCESS") {
                await updateGarminOrderStatus({
                  id: order.id,
                  razorpayPaymentId: verifyData.payment_id || "AUTH",
                  orderStatus: "processing",
                  trackingId: null,
                });

                toast.success("Payment successful!");
                clearOrder();
                clearCart();
                route.push(`/account/orders/${order.id}`);
              } else if (verifyData.status === "PENDING") {
                toast("Payment is pending. Please wait.");
                setCheckingOut(false);
              } else {
                toast.error("Payment verification failed.");
                setCheckingOut(false);
                route.push("/checkout");
              }
            } catch (err) {
              console.error("❌ Error during payment verification:", err);
              toast.error("Verification error. Please contact support.");
              setCheckingOut(false);
              route.push("/checkout");
            }
          },
          failedHandler: (res) => {
            console.error("❌ Payment Failed:", res);
            toast.error(
              res.status === "CANCELLED"
                ? "Payment cancelled by user."
                : "Payment failed. Please try again."
            );
            setCheckingOut(false);
            route.push("/checkout");
          },
        });

        plural.open();
      };

      if (sdkAlreadyLoaded) {
        launchCheckout();
      } else {
        const script = document.createElement("script");
        script.src = sdkUrl;
        script.onload = launchCheckout;
        document.body.appendChild(script);
      }
    } catch (error) {
      console.error("Error in initiatePluralPayment:", error);
      toast.error(error.message || "Payment initiation failed.");
      setCheckingOut(false);
    }
  };

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
    onSubmit: async (values, { setSubmitting }) => {
      setCheckingOut(true);
      const garminOrderId = checkForExisitingOrderID();
      console.log("garminOrderId:", garminOrderId);

      const orderProducts = [];
      cart.items.map((item) => {
        orderProducts.push({
          product: item.product.id,
          sku: item.product.sku,
          quantity: item.quantity,
          categories: item?.product?.categories.map((category) => {
            return category.id;
          }),
        });
      });

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
        orderedBy: user.id,
        orderId: garminOrderId ? garminOrderId : null,
        coupon: cart.coupon,
        items: orderProducts,
        billingAddress: billingAddress,
        shippingAddress: shippingAddress,

        total: cartTotal,
      };

      console.log("orderData:", orderData);

      const order = garminOrderId
        ? await updateGarminOrder({
            orderData: orderData,
            orderId: garminOrderId,
          })
        : await createGarminOrder(orderData);

      console.log("order--order:", order);
      if (order.id) {
        await initiatePluralPayment(order);
      } else {
        setCheckingOut(false);
        toast.error("Failed to create/update order. Please try again.");
      }
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
          then: yup.string().required("This field is required"),
        }),
    }),
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  const handleIsBillingSameChange = (e) => {
    e.target.checked ? setIsBillingSame(true) : setIsBillingSame(false);
  };

  return (
    <div className="relative">
      <div className="checkout__prompt">
        <div>
          <div>
            <form onSubmit={formik.handleSubmit} className="">
              <GuestUserEmail formik={formik} status={status} />

              <div className="shipping__address mt-4">
                <ShippingAddress formik={formik} />
              </div>
              <ShppingMethod />
              <div className=" flex relative ">
                <input
                  id="isBillingSame"
                  name="isBillingSame"
                  type="checkbox"
                  className="hidden"
                  onChange={handleIsBillingSameChange}
                  defaultChecked={formik.values.isBillingSame}
                />

                <label
                  htmlFor="isBillingSame"
                  className="ml-2 block text-black px-6 py-2 form_checkbox_label cursor-pointer"
                >
                  <span className="">
                    Billing Address Is the Same as Shipping Address
                  </span>
                </label>
              </div>
              {isBillingSame ? (
                ""
              ) : (
                <div className="billing__address mt-2">
                  <BillingAddress formik={formik} />
                </div>
              )}
              <div className="mt-4">
                <button
                  type="submit"
                  className={` submit  ${
                    formik.isValid ? "" : "submit--disabled"
                  }`}
                  disabled={!formik.isValid}
                >
                  {!formik.isSubmitting ? <span>place order</span> : ""}
                  {formik.isSubmitting ? (
                    <span>
                      <Loader size="small" />
                    </span>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {checkingOut ? (
        <div className="h-full w-full flex justify-center items-center absolute top-0 left-0 bg-white opacity-80">
          <Loader />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CheckoutForm;
