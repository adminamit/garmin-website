"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/app/_components/Loader";
import toast from "react-hot-toast";
const UpdatePasswordForm = ({ isVisible, updateUser }) => {
    const formik = useFormik({
        initialValues: {
            password: "",
            passwordConfirm: "",
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            // alert("dsfdf");
            const res = await updateUser({ password: values.password });
            if (res.status === 200) {
                toast.success("Updated successfully!");
                setSubmitting(true);
                resetForm();
            } else {
                toast.error("Update operation failed!");
            }
        },
        validationSchema: yup.object({
            password: yup.string().required("This field is required"),
            passwordConfirm: yup
                .string()
                .oneOf([yup.ref("password"), null], "Passwords must match")
                .required("This field is required"),
        }),
    });

    return (
        <div>
            {/* <Header /> */}

            <form onSubmit={formik.handleSubmit} className="">
                <div className="input-wrapper">
                    <label htmlFor="name" className="label">
                        New Password <span className="required">*</span>
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className={`input ${
                            formik.touched.password &&
                            formik.errors.password &&
                            "error-input"
                        }`}
                        {...formik.getFieldProps("password")}
                    />
                    <label className="help-text">
                        Minimum password length is 8 characters. Please use at
                        least 1 uppercase letter, 1 lowercase letter and 1
                        number.
                    </label>
                    {formik.touched.password && formik.errors.password ? (
                        <div className="error-text">
                            {formik.errors.password}
                        </div>
                    ) : null}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="passwordConfirm" className="label">
                        Confirm New Password <span className="required">*</span>
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        className={`input ${
                            formik.touched.passwordConfirm &&
                            formik.errors.passwordConfirm &&
                            "error-input"
                        }`}
                        {...formik.getFieldProps("passwordConfirm")}
                    />
                    {formik.touched.passwordConfirm &&
                    formik.errors.passwordConfirm ? (
                        <div className="error-text">
                            {formik.errors.passwordConfirm}
                        </div>
                    ) : null}
                </div>

                <div className="g-recaptcha mb-6" data-sitekey="your-site-key">
                    {/* <ReCaptchaProvider reCaptchaKey="[GTM-XXXXXXX]"></ReCaptchaProvider> */}
                </div>
                <div className="flex gap-4 items-center mt-4">
                    <button
                        type="submit"
                        className={` submit  ${
                            formik.isValid && formik.dirty
                                ? ""
                                : "submit--disabled"
                        }`}
                        disabled={!formik.isValid && formik.dirty}
                    >
                        {!formik.isSubmitting ? <span>SAVE</span> : ""}
                        {formik.isSubmitting ? (
                            <span>
                                <Loader size="small" />
                            </span>
                        ) : (
                            ""
                        )}
                    </button>
                    <button
                        className="font-medium cursor-pointer hover:underline px-4"
                        onClick={() => isVisible(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePasswordForm;
