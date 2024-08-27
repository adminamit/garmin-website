"use client";
import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import * as yup from "yup";
import { Loader } from "@/app/_components/Loader";
import toast from "react-hot-toast";
const ResetPassword = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const router = useRouter();
    const reCaptchaRef = useRef(null);
    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            emailConfirm: "",
            password: "",
            passwordConfirm: "",
            promotion: false,
            termsCondition: false,
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_LIVE_URL}/api/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        full_name: values.full_name,
                        email: values.email,
                        password: values.password,
                        promotion: values.promotion,
                        termsCondition: values.termsCondition,
                    }),
                }
            );

            const status = await res.json();
            if (res.status === 200) {
                if (status.errors) {
                    if (status.errors[0].data[0]) {
                        toast.error(status.errors[0].data[0].message);
                    } else {
                        toast.error(status.errors[0].message);
                    }
                } else {
                    // alert(
                    //     "Acccount created succefully. Please verify your email id before login."
                    // );
                    toast.success(
                        "Acccount created succefully. Please verify your email id before login."
                    );
                    router.push("/login");
                    setSubmitting(true);
                    resetForm();
                }
            } else {
                alert("Something went wrong. Please try again");
            }
        },
        validationSchema: yup.object({
            full_name: yup.string().trim().required("This field is required"),
            email: yup
                .string()
                .email("Must be a valid email")
                .required("This field is required"),
            emailConfirm: yup
                .string()
                .oneOf([yup.ref("email"), null], "Email must match")
                .required("This field is required"),
            password: yup.string().required("This field is required"),
            passwordConfirm: yup
                .string()
                .oneOf([yup.ref("password"), null], "Passwords must match")
                .required("This field is required"),
            promotion: yup.boolean(),
            termsCondition: yup
                .boolean()
                .oneOf([true], "Please accept.")
                .required("Please accept."),
            recaptcha: yup
                .string()
                .min(1, "Prove You Are Not A Robot")
                .required("Prove You Are Not A Robot"),
        }),
    });

    return (
        <div>
            <div
                className="flex flex-col items-center justify-center md:py-24 bg-cover"
                style={{
                    backgroundImage:
                        "url('https://source.unsplash.com/featured/?beach,dark')",
                }}
            >
                <div className="bg-white pt-8 pb-12 px-6 lg:px-12 shadow-md w-full max-w-[27em] relative">
                    <div className="flex mt-5 mb-12 justify-center w-full">
                        <Image
                            alt="default alt"
                            src={`/assets/images/logo.svg`}
                            width="160"
                            height="160"
                        />
                    </div>
                    <div>
                        <div>
                            <h1 className="portal-heading">
                                CREATE AN ACCOUNT
                            </h1>
                            {/* <p className="mt-4">
                                Enter the email address associated with your
                                account.
                            </p> */}
                            <form
                                onSubmit={formik.handleSubmit}
                                className="pt-10 pb-9"
                            >
                                <div className="input-wrapper">
                                    <label htmlFor="name" className="label">
                                        Full Name{" "}
                                        <span className="required">*</span>
                                    </label>
                                    <input
                                        id="full_name"
                                        name="full_name"
                                        type="text"
                                        className={`input ${
                                            formik.errors.full_name &&
                                            "error-input"
                                        }`}
                                        {...formik.getFieldProps("full_name")}
                                    />

                                    {formik.errors.full_name && (
                                        <div className="error-text">
                                            {formik.errors.full_name}
                                        </div>
                                    )}
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor="email" className="label">
                                        Email{" "}
                                        <span className="required">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className={`input ${
                                            formik.errors.email && "error-input"
                                        }`}
                                        {...formik.getFieldProps("email")}
                                    />

                                    {formik.errors.email && (
                                        <div className="error-text">
                                            {formik.errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="input-wrapper">
                                    <label
                                        htmlFor="emailConfirm"
                                        className="label"
                                    >
                                        Confirm Email
                                        <span className="required">*</span>
                                    </label>
                                    <input
                                        id="emailConfirm"
                                        name="emailConfirm"
                                        type="email"
                                        className={`input ${
                                            formik.errors.emailConfirm &&
                                            "error-input"
                                        }`}
                                        {...formik.getFieldProps(
                                            "emailConfirm"
                                        )}
                                    />

                                    {formik.errors.emailConfirm && (
                                        <div className="error-text">
                                            {formik.errors.emailConfirm}
                                        </div>
                                    )}
                                </div>

                                <div className="input-wrapper">
                                    <label htmlFor="password" className="label">
                                        Password{" "}
                                        <span className="required">*</span>
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className={`input ${
                                            formik.errors.password &&
                                            "error-input"
                                        }`}
                                        {...formik.getFieldProps("password")}
                                    />
                                    {formik.errors.password && (
                                        <div className="error-text">
                                            {formik.errors.password}
                                        </div>
                                    )}
                                </div>

                                <div className="input-wrapper">
                                    <label
                                        htmlFor="passwordConfirm"
                                        className="label"
                                    >
                                        Retype Password{" "}
                                        <span className="required">*</span>
                                    </label>
                                    <input
                                        id="passwordConfirm"
                                        name="passwordConfirm"
                                        type="password"
                                        className={`input ${
                                            formik.errors.passwordConfirm &&
                                            "error-input"
                                        }`}
                                        {...formik.getFieldProps(
                                            "passwordConfirm"
                                        )}
                                    />
                                    {formik.errors.passwordConfirm && (
                                        <div className="error-text">
                                            {formik.errors.passwordConfirm}
                                        </div>
                                    )}
                                </div>

                                <div className=" flex relative">
                                    <input
                                        id="promotion"
                                        name="promotion"
                                        type="checkbox"
                                        className="hidden"
                                        {...formik.getFieldProps("promotion")}
                                    />

                                    <label
                                        htmlFor="promotion"
                                        className="ml-2 block text-black px-6 py-2 form_checkbox_label"
                                    >
                                        <span className="">
                                            Send me email about promotion and
                                            new products.
                                        </span>
                                    </label>

                                    {formik.errors.promotion && (
                                        <div className="error-text">
                                            {formik.errors.promotion}
                                        </div>
                                    )}
                                </div>

                                <div className="input-wrapper relative">
                                    <input
                                        id="termsCondition"
                                        name="termsCondition"
                                        type="checkbox"
                                        className="hidden"
                                        {...formik.getFieldProps(
                                            "termsCondition"
                                        )}
                                    />

                                    <label
                                        htmlFor="termsCondition"
                                        className="ml-2 block text-black px-6 py-2 form_checkbox_label"
                                    >
                                        <span className="">
                                            I have read and agree to the Terms
                                            of Use.
                                        </span>
                                    </label>
                                    <p className="link pl-6">
                                        <Link href="/terms">Terms of Use</Link>
                                    </p>
                                    {formik.errors.termsCondition && (
                                        <div className="error-text">
                                            {formik.errors.termsCondition}
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="g-recaptcha mb-6"
                                    data-sitekey="your-site-key"
                                >
                                    <ReCAPTCHA
                                        style={{ display: "inline-block" }}
                                        size="tiny"
                                        theme="light"
                                        ref={reCaptchaRef}
                                        sitekey={
                                            process.env
                                                .NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                                        }
                                        name="recaptcha"
                                        id="recaptcha"
                                        value={formik.values.recaptcha}
                                        onBlur={formik.handleBlur}
                                        onChange={async () => {
                                            const token =
                                                await reCaptchaRef.current.getValue();
                                            formik.setFieldValue(
                                                "recaptcha",
                                                token
                                            );
                                        }}
                                    />
                                </div>

                                <div className="">
                                    <button
                                        type="submit"
                                        className={` uppercase py-2 px-10 text-base font-medium submit submit--full  ${
                                            formik.isValid && formik.dirty
                                                ? ""
                                                : "submit--disabled"
                                        }`}
                                        disabled={
                                            !(formik.isValid && formik.dirty)
                                        }
                                    >
                                        {!formik.isSubmitting ? (
                                            <span>CREATE ACCOUNT</span>
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

                            <p className="mt-4 text-center">
                                Already have an account?{" "}
                                <Link href="/login" className="link">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
