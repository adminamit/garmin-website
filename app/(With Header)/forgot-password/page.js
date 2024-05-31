"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/app/_components/Loader";
const ForgotPassword = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_LIVE_URL}/api/auth/forgotPassword`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            const status = await res.json();
            if (res.status === 200) {
                if (status.errors) {
                    alert(status.errors[0].message);
                } else {
                    alert("Mail sent");
                    setSubmitting(true);
                    resetForm();
                }
            } else {
                alert("Something went wrong. Please try again");
            }
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email("Must be a valid email")
                .required("This field is required"),
        }),
    });

    return (
        <div>
            <div
                className="flex flex-col items-center justify-center py-24 bg-cover"
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
                            <h1 className="portal-heading">FORGOT PASSWORD</h1>
                            <p className="mt-4">
                                Enter the email address associated with your
                                account.
                            </p>
                            <form
                                onSubmit={formik.handleSubmit}
                                className="pt-10 pb-9"
                            >
                                <div className="input-wrapper">
                                    <label htmlFor="name" className="label">
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
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.email && (
                                        <div className="error-text">
                                            {formik.errors.email}
                                        </div>
                                    )}
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
                                            <span>reset password</span>
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
                                <div className="flex justify-center uppercase mt-7">
                                    <Link
                                        href="/login"
                                        className=" font-medium hover:underline"
                                    >
                                        Go Back
                                    </Link>
                                </div>
                            </form>

                            <p className="mt-4 text-center">
                                Don{"'"}t have an account?{" "}
                                <Link href="/register" className="link">
                                    Create One
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
