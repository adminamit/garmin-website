"use client";

import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/app/_components/Loader";
import Tooltip from "@/app/_components/Helpers/Tooltip";
import { AiFillQuestionCircle } from "react-icons/ai";
import toast from "react-hot-toast";
export const EditProfileForm = ({
    setIsProfileFormVisible,
    user,
    updateUser,
}) => {
    const formik = useFormik({
        initialValues: {
            full_name: user.full_name,
            email: user.email,
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            // alert("dsfdf");
            const res = await updateUser(values);
            if (res.status === 200) {
                toast.success("Updated successfully!");
                setSubmitting(true);
            } else {
                toast.error("Update operation failed!");
            }
        },
        validationSchema: yup.object({
            full_name: yup.string().trim().required("This field is required"),
            email: yup
                .string()
                .email("Must be a valid email")
                .required("This field is required"),
        }),
    });

    return (
        <form onSubmit={formik.handleSubmit} className="">
            <div className="input-wrapper">
                <label htmlFor="full_name" className="label">
                    Name <span className="required">*</span>
                </label>
                <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    className={`input ${
                        formik.touched.full_name &&
                        formik.errors.full_name &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("full_name")}
                />
                <Tooltip
                    title="How will this be used?"
                    icon={<AiFillQuestionCircle />}
                >
                    We use your name to help verify your account when you call
                    customer support, or to communicate with you about your
                    transactions or products. You do not need to provide your
                    full name, but you may if you wish.
                </Tooltip>
                {formik.touched.full_name && formik.errors.full_name ? (
                    <div className="error-text">{formik.errors.full_name}</div>
                ) : null}
            </div>

            <div className="input-wrapper">
                <label htmlFor="email" className="label">
                    Email <span className="required">*</span>
                </label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    className={`input opacity-30 ${
                        formik.touched.email &&
                        formik.errors.email &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("email")}
                    readOnly
                />
                <Tooltip
                    title="How will this be used?"
                    icon={<AiFillQuestionCircle />}
                >
                    We require an email address to create and sign in to your
                    account. We use it to help verify your account when you
                    contact customer support, or to communicate with you about
                    your transactions or products. With your consent, we may use
                    it to send you news and special offers. We will not share it
                    with anyone without your consent.
                </Tooltip>
                {formik.touched.email && formik.errors.email ? (
                    <div className="error-text">{formik.errors.email}</div>
                ) : null}
            </div>

            <div className="g-recaptcha mb-6" data-sitekey="your-site-key">
                {/* <ReCaptchaProvider reCaptchaKey="[GTM-XXXXXXX]"></ReCaptchaProvider> */}
            </div>
            <div className="flex gap-4 items-center mt-4">
                {/* <button type="submit" className="submit">
                    SAVE
                </button> */}

                <button
                    type="submit"
                    className={` submit  ${
                        formik.isValid ? "" : "submit--disabled"
                    }`}
                    disabled={!formik.isValid}
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
                    onClick={() => setIsProfileFormVisible(false)}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};
