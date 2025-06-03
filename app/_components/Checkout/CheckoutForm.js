"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/app/_components/Loader";
import ShippingAddress from "./ShippingAddress";
import ShppingMethod from "./ShippingMethod";
import BillingAddress from "./BillingAddress";
import GuestUserEmail from "./GuestUserEmail";
// import Script from "next/script"; // Removed Razorpay script
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

  // Removed createOrderId (Razorpay specific)

  // --- Plural Integration Logic ---
  // --- Plural Integration Logic ---
  const initiatePluralPayment = async (order) => {
    console.log("initiatePluralPayment - order:", order);
    let waybill = ""; // This variable seems unused in the Plural flow

    try {
      setCheckingOut(true);

      // 1. Generate Auth Token (Backend API call)
      const tokenResponse = await fetch("/api/plural/generate-token", {
        method: "POST", // Make sure this is exactly "POST"
        headers: { "Content-Type": "application/json" },
        // Your backend /api/plural/generate-token route uses env vars directly for client_id/secret,
        // so no request body is strictly needed from the frontend for this call.
        // Removed: body: JSON.stringify({ userId: user?.id, orderId: order.id }),
      });

      let tokenResult; // Declare a variable to hold the parsed JSON response
      if (!tokenResponse.ok) {
        // If the response is NOT ok, read the error details first.
        const errorText = await tokenResponse.text(); // Read as text in case it's not JSON
        let errorData;
        try {
          errorData = JSON.parse(errorText); // Try to parse as JSON
        } catch (e) {
          errorData = { message: errorText || "Unknown error format" }; // Fallback if not JSON
        }
        throw new Error(
          `Failed to generate Plural auth token: ${
            errorData.message || tokenResponse.statusText
          }`
        );
      }
      // Only parse JSON if the response is OK
      tokenResult = await tokenResponse.json();
      const token = tokenResult.access_token; // Use access_token as returned by your backend API route

      if (!token) {
        throw new Error("Plural auth token (access_token) not received.");
      }

      // 2. Create Hosted Checkout Link (Backend API call) - UPDATED
      const checkoutResponse = await fetch("/api/plural/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          merchant_id: process.env.NEXT_PUBLIC_PLURAL_MERCHANT_ID, // Ensure this is set in your .env file
          merchant_order_reference: order.id,
          amount: parseFloat(order.total) * 100,
          currency: "INR",
          customer: {
            name: order.orderedBy.full_name,
            email: order.orderedBy.email,
            phone: order.shippingAddress.phone,
            customer_id: user?.id || order.orderedBy.id, // Pass customer_id from your system
            address: {
              // This MUST be fully populated for both shipping/billing in backend
              street_name: order.shippingAddress.flat_home,
              street_number: order.shippingAddress.flat_home, // Or a specific street number field
              city: order.shippingAddress.city,
              zip_code: order.shippingAddress.pincode,
              state: order.shippingAddress.state,
              country: order.shippingAddress.country || "INDIA", // Ensure 'INDIA' or other actual country
              address1: order.shippingAddress.flat_home, // Map to address1
              address2: "", // If you have these, use them
              address3: "", // If you have these, use them
            },
          },
          order_id: order.id,
          token: token,
          notes: `Garmin Order ${order.id}`, // Example note
        }),
      });

      let checkoutResult; // Declare a variable to hold the parsed JSON response
      if (!checkoutResponse.ok) {
        // If the response is NOT ok, read the error details first.
        const errorText = await checkoutResponse.text(); // Read as text in case it's not JSON
        let errorData;
        try {
          errorData = JSON.parse(errorText); // Try to parse as JSON
        } catch (e) {
          errorData = { message: errorText || "Unknown error format" }; // Fallback if not JSON
        }
        throw new Error(
          `Failed to create Plural hosted checkout link: ${
            errorData.message || checkoutResponse.statusText
          }`
        );
      }
      // Only parse JSON if the response is OK
      checkoutResult = await checkoutResponse.json();
      const { redirect_url } = checkoutResult;
      if (redirect_url) {
        window.location.href = redirect_url;
      } else {
        throw new Error("No redirect URL received from Plural.");
      }

      // The rest of your success/failure logic will be handled on the /checkout/plural-callback page
      // and via Plural's webhooks.
    } catch (error) {
      console.error("Error during Plural payment initiation:", error);
      toast.error(error.message || "Failed to initiate payment.");
      setCheckingOut(false);
    }
    clearOrder(); // Clear the order cookie after initiating payment
    clearCart(); // Clear the cart after initiating payment
  };
  // --- End Plural Integration Logic ---

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
        // Add total amount to orderData, required by Plural
        total: cartTotal, // Ensure cartTotal is passed correctly from props
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
        // Call Plural payment initiation instead of Razorpay
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
      // Removed commented out billing address validations for brevity, assuming existing logic is fine
    }),
  });

  useEffect(() => {
    // Corrected typo from formik.vaues to formik.values
    console.log(formik.values);
    //do your stuff
  }, [formik.values]);

  const handleIsBillingSameChange = (e) => {
    e.target.checked ? setIsBillingSame(true) : setIsBillingSame(false);
  };

  return (
    <div className="relative">
      {/* Removed Razorpay Script */}
      {/* You might need a script tag for Plural SDK if it's not imported directly */}
      {/* Example:
            <Script
                id="plural-checkout-js"
                src="URL_TO_PLURAL_SDK_SCRIPT" // Replace with the actual URL
            />
            */}
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
