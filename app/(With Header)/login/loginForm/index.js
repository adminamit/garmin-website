"use client";
import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter, useSearchParams } from "next/navigation";
import { Message } from "@/app/_components/Message";
import { Loader } from "@/app/_components/Loader";
import { useAuth } from "@/app/_providers/Auth";
import toast from "react-hot-toast";
export const setTokenCookie = (expiresIn, accessToken) => {
    return fetch("/api/auth/setHttpCookie", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ expiresIn, accessToken }),
    });
};

export const LoginForm = () => {
    //Get Rdirect Param

    const { login } = useAuth();
    const [error, setError] = useState(null);
    const reCaptchaRef = useRef(null);
    const searchParams = useSearchParams();
    const allParams = searchParams.toString()
        ? `?${searchParams.toString()}`
        : "";
    // const redirect = useRef(searchParams.get("redirect"));
    const redirect = searchParams.get("redirect");
    console.log("redirect");
    console.log(redirect);
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_LIVE_URL}/api/auth/login`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            const authStatus = await res.json();
            if (res.status === 200) {
                if (authStatus.errors) {
                    toast.error(authStatus.errors[0].message);
                } else {
                    toast.success("Logged in! Redirecting..");
                    const { token, exp, user } = authStatus;
                    // setCookie("payload-token", authStatus.token, {
                    //     maxAge: authStatus.exp,
                    //     httpOnly: true,
                    //     sameSite: "none",
                    //     secure: true,
                    // });
                    await setTokenCookie(exp, token);
                    login(user);
                    setSubmitting(true);
                    resetForm();
                    redirect ? router.push(redirect) : router.push("/account");
                }
            } else {
                toast.error("Something went wrong. Please try again");
            }
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email("Must be a valid email")
                .required("This field is required"),

            password: yup.string().required("This field is required"),
            rememberMe: yup.boolean(),
            recaptcha: yup.string().min(1, "Prove You Are Not A Robot"),
            // .required("Prove You Are Not A Robot"),
        }),
    });

    return (
        <>
            <Message error={error} />
            <form onSubmit={formik.handleSubmit} className="pt-10 pb-9">
                <div className="input-wrapper">
                    <label htmlFor="name" className="label">
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
                    <label htmlFor="name" className="label">
                        Password <span className="required">*</span>
                    </label>
                    <input
                        id="password"
                        type="password"
                        className={`input ${
                            formik.touched.password &&
                            formik.errors.password &&
                            "error-input"
                        }`}
                        {...formik.getFieldProps("password")}
                    />

                    {formik.touched.password && formik.errors.password ? (
                        <div className="error-text">
                            {formik.errors.password}
                        </div>
                    ) : null}
                </div>
                <div className="flex justify-between align-middle">
                    <div className="input-wrapper flex relative align-middle">
                        <input
                            id="rememberMe"
                            type="checkbox"
                            className="hidden"
                            {...formik.getFieldProps("rememberMe")}
                        />
                        <label
                            htmlFor="rememberMe"
                            className="ml-2 block text-black px-6 form_checkbox_label"
                        >
                            <span className="">Remember Me</span>
                        </label>
                    </div>

                    <Link href="/forgot-password" className="link">
                        Forgot Password?
                    </Link>
                </div>

                <div className="g-recaptcha mb-6" data-sitekey="your-site-key">
                    <ReCAPTCHA
                        style={{ display: "inline-block" }}
                        size="tiny"
                        theme="light"
                        ref={reCaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        name="recaptcha"
                        id="recaptcha"
                        value={formik.values.recaptcha}
                        onBlur={formik.handleBlur}
                        onChange={async () => {
                            const token = await reCaptchaRef.current.getValue();
                            formik.setFieldValue("recaptcha", token);
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
                        disabled={!(formik.isValid && formik.dirty)}
                    >
                        {!formik.isSubmitting ? <span>Sign in</span> : ""}
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
        </>
    );
};
