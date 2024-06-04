import React from "react";
import Link from "next/link";
const GuestUserEmail = ({ formik, handleInputChange }) => {
    return (
        <>
            <div className="input-wrapper">
                <label htmlFor="name" className="label">
                    Email <span className="required">*</span>
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    readOnly
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
            {/* <div className="flex relative">
                <input
                    id="promotions"
                    name="promotion"
                    type="checkbox"
                    className="hidden"
                    {...formik.getFieldProps("promotion")}
                    defaultChecked={formik.values.promotion}
                />

                <label
                    htmlFor="promotions"
                    className="ml-2 block text-black px-6 py-2 form_checkbox_label"
                >
                    <span className="text-sm">
                        <p className="">
                            Get product news and promotions based on your
                            preferences and registered devices.{" "}
                            <Link href="/terms" className="link">
                                Learn about email privacy.
                            </Link>
                        </p>
                    </span>
                </label>
            </div> */}
        </>
    );
};

export default GuestUserEmail;
