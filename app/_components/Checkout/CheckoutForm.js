"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/app/_components/Loader";
import ShippingAddress from "./ShippingAddress";
import ShppingMethod from "./ShippingMethod";
import BillingAddress from "./BillingAddress";
import GuestUserEmail from "./GuestUserEmail";
import Script from "next/script";
import toast from "react-hot-toast";
import { getCookie } from "cookies-next";
import { useOrder } from "@/app/_providers/Order";
import { useRouter } from "next/navigation";
const CheckoutForm = ({ user, status, cartTotal, cart }) => {
    const route = useRouter();
    const { createOrder, updateOrder, orderId } = useOrder();
    const [isBillingSame, setIsBillingSame] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const createOrderId = async (order) => {
        try {
            const response = await fetch("/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: parseFloat(order.total) * 100,
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            return data.orderId;
        } catch (error) {
            console.error(
                "There was a problem with your fetch operation:",
                error
            );
        }
    };

    const processPayment = async (order) => {
        // e.preventDefault();
        try {
            const orderId = await createOrderId(order);
            const options = {
                key: process.env.RAZORPAY_KEY_ID,
                amount: parseFloat(order.total) * 100,
                currency: "INR",
                name: "Garmin India",
                description: "description",
                order_id: orderId,
                handler: async function (response) {
                    const data = {
                        orderCreationId: orderId,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };

                    const result = await fetch("/api/order/verify", {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: { "Content-Type": "application/json" },
                    });
                    const res = await result.json();
                    console.log(res);
                    if (res.isOk) {
                        route.push(`/account/orders/${order.id}`);
                        // const paymentUpdate = await updateOrder({
                        //     id: order.id,
                        //     razorpayPaymentId: response.razorpay_payment_id,
                        //     order_status: "processing",
                        // });
                        // if (paymentUpdate) {
                        //     toast.success("payment succeed");
                        //     route.push(`/account/orders/${order.id}`);
                        // } else {
                        //     toast.error(
                        //         "Payment recieved, will reflect in another 20 minutes"
                        //     );
                        //     route.push(`/account/orders/${order.id}`);
                        // }
                    } else {
                        toast.error(res.message);
                    }
                },
                prefill: {
                    name: order.orderedBy.full_name,
                    email: order.orderedBy.email,
                    phone: order.shippingAddress.shipping_phone,
                },
                notes: {
                    // products: orderNote,
                    address: {
                        home: order.shippingAddress.flat_home,
                        localty: order.shippingAddress.locality,
                        city: order.shippingAddress.city,
                    },
                },
                theme: {
                    color: "#6dcff6",
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.on("payment.failed", function (response) {
                toast.error(response.error.description);
            });
            paymentObject.open();
        } catch (error) {
            console.log(error);
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
            //Check for orderId
            const orderId = getCookie("orderId");
            //Prepare Order Details
            const orderProducts = [];
            cart.items.map((item) => {
                orderProducts.push({
                    product: item.product.id,
                    // name: item.product.title,
                    sku: item.product.sku,
                    quantity: item.quantity,
                    categories: item?.product?.categories.map((category) => {
                        return category.id;
                    }),
                });
            });

            //Prepare Billing Address
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

            //Prepare Shipping Address
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
                // ...(orderId && { id: "GIN_2024_05_21" }),
                // id: "GIN_2024_05_22",
                orderedBy: user.id,
                // status: "pending_payment",
                coupon: cart.coupon,
                items: orderProducts,
                billingAddress: billingAddress,
                shippingAddress: shippingAddress,
            };
            // const order = orderId
            //     ? await updateOrder(orderData)
            //     : await createOrder(orderData);
            const order = await createOrder(orderData);
            if (order.id) {
                processPayment(order);
                // createOrderId();
            }

            // processPayment(values);
            // createOrderId();

            setSubmitting(true);
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email("Must be a valid email")
                .required("This field is required"),
            shipping_name: yup
                .string()
                .trim()
                .required("This field is required"),
            shipping_phone: yup
                .string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("This field is required"),
            shipping_flat_home: yup
                .string()
                .trim()
                .required("This field is required"),
            shipping_locality: yup
                .string()
                .trim()
                .required("This field is required"),

            shipping_landmark: yup.string().trim(),
            shipping_city: yup
                .string()
                .trim()
                .required("This field is required"),
            shipping_pincode: yup
                .string()
                .trim()
                .required("This field is required"),
            shipping_state: yup
                .string()
                .trim()
                .required("This field is required"),
            isBillingSame: yup.boolean(),
            promotion: yup.boolean(),
            billing_name: yup
                .string()
                .trim()
                .when("isBillingSame", {
                    is: false,
                    then: yup.string().required("This field is required"),
                }),
            // billing_phone: yup
            //     .string()
            //     .matches(phoneRegExp, "Phone number is not valid")
            //     .when("isBillingSame", {
            //         is: true,
            //         then: yup.required("This field is required"),
            //     }),
            // billing_flat_home: yup
            //     .string()
            //     .trim()
            //     .when("isBillingSame", {
            //         is: true,
            //         then: yup.required("This field is required"),
            //     }),
            // billing_locality: yup
            //     .string()
            //     .trim()
            //     .when("isBillingSame", {
            //         is: true,
            //         then: yup.required("This field is required"),
            //     }),

            // billing_landmark: yup.string().trim(),
            // billing_city: yup
            //     .string()
            //     .trim()
            //     .when("isBillingSame", {
            //         is: true,
            //         then: yup.required("This field is required"),
            //     }),
            // billing_pincode: yup
            //     .string()
            //     .trim()
            //     .when("isBillingSame", {
            //         is: true,
            //         then: yup.required("This field is required"),
            //     }),
            // billing_state: yup
            //     .string()
            //     .trim()
            //     .when("isBillingSame", {
            //         is: true,
            //         then: yup.required("This field is required"),
            //     }),
        }),
    });

    useEffect(() => {
        console.log(formik.vaues);
        //do your stuff
    }, [formik.vaues]);

    // useEffect(() => {
    //     console.log(formik.values.isBillingSame);
    //     formik.values.isBillingSame
    //         ? setIsBillingSame(true)
    //         : setIsBillingSame(false);
    // }, [formik.values.isBillingSame]);

    const handleIsBillingSameChange = (e) => {
        console.log(e.target.checked);
        e.target.checked ? setIsBillingSame(true) : setIsBillingSame(false);
    };

    return (
        <div className="relative">
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />
            <div className="checkout__prompt">
                <div>
                    {/* <Loader /> */}
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
                                        Billing Address Is the Same as Shipping
                                        Address
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
                                {/* <button
                                    type="submit"
                                    className={` uppercase py-2 px-10 text-sm font-medium ${
                                        formik.isValid
                                            ? "bg-primary"
                                            : "bg-borderColor"
                                    }`}
                                    disabled={!formik.isValid}
                                >
                                    place order
                                </button> */}

                                <button
                                    type="submit"
                                    className={` submit  ${
                                        formik.isValid ? "" : "submit--disabled"
                                    }`}
                                    disabled={!formik.isValid}
                                >
                                    {!formik.isSubmitting ? (
                                        <span>place order</span>
                                    ) : (
                                        ""
                                    )}
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
            {formik.isSubmitting ? (
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
