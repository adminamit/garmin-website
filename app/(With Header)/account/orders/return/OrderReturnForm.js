"use client";
import { useCallback, useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/app/_providers/Auth";
import { Message } from "@/app/_components/Message";
import { Loader } from "@/app/_components/Loader";
export const OrderReturnForm = () => {
    const [error, setError] = useState(null);
    const reCaptchaRef = useRef(null);
    const searchParams = useSearchParams();
    const allParams = searchParams.toString()
        ? `?${searchParams.toString()}`
        : "";
    const redirect = useRef(searchParams.get("redirect"));
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: "",
            orderNumber: "",
            reason: "",
        },
        onSubmit: async (values) => {
            try {
                await login(values);
                if (redirect?.current) router.push(redirect.current);
                else router.push("/account/profile");
            } catch (_) {
                setError(
                    "There was an error with the credentials provided. Please try again."
                );
            }
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email("Must be a valid email")
                .required("This field is required"),

            orderNumber: yup.string().required("This field is required"),
            rememberMe: yup.boolean(),
            reason: yup.string().required("This field is required"),
            recaptcha: yup.string().min(1, "Prove You Are Not A Robot"),
            // .required("Prove You Are Not A Robot"),
        }),
    });

    const { login } = useAuth();
    return (
        <>
            <Message error={error} />
            <form onSubmit={formik.handleSubmit} className="pt-10 pb-9">
                <div className="input-wrapper">
                    <label htmlFor="name" className="label !text-[0.8rem]">
                        Email Address <span className="required">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={`input ${
                            formik.touched.email &&
                            formik.errors.email &&
                            "error-input"
                        }`}
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error-text">{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className="input-wrapper">
                    <label htmlFor="name" className="label !text-[0.8rem]">
                        Order Number/Service Request Number{" "}
                        <span className="required">*</span>
                    </label>
                    <input
                        id="orderNumber"
                        type="text"
                        className={`input ${
                            formik.touched.orderNumber &&
                            formik.errors.orderNumber &&
                            "error-input"
                        }`}
                        {...formik.getFieldProps("orderNumber")}
                    />

                    {formik.touched.orderNumber && formik.errors.orderNumber ? (
                        <div className="error-text">
                            {formik.errors.orderNumber}
                        </div>
                    ) : null}
                </div>

                <div className="input-wrapper">
                    <label htmlFor="name" className="label !text-[0.8rem]">
                        Reason for return
                        <span className="required">*</span>
                    </label>
                    <input
                        id="reason"
                        type="text"
                        className={`input ${
                            formik.touched.reason &&
                            formik.errors.reason &&
                            "error-input"
                        }`}
                        {...formik.getFieldProps("reason")}
                    />

                    {formik.touched.reason && formik.errors.reason ? (
                        <div className="error-text">{formik.errors.reason}</div>
                    ) : null}
                </div>

                <div className="">
                    <button
                        type="submit"
                        className={` uppercase py-2 px-10 text-base font-medium submit submit--full  ${
                            formik.isValid && formik.dirty
                                ? ""
                                : "submit--disabled"
                        }`}
                        disabled={!(formik.isValid && formik.dirty)}
                    >
                        {!formik.isSubmitting ? (
                            <span>request Order return</span>
                        ) : (
                            ""
                        )}
                        {formik.isSubmitting ? (
                            <span>request Order return</span>
                        ) : (
                            ""
                        )}
                    </button>
                </div>
            </form>
        </>
    );
};
