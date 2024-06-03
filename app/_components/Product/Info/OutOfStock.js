import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaChevronRight } from "react-icons/fa6";
import { Loader } from "@/app/_components/Loader";
import toast from "react-hot-toast";
export const OutOfStock = ({ productId }) => {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_LIVE_URL}/api/stock-notification`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: values.email,
                        product: productId,
                    }),
                }
            );
            if (res.status === 201) {
                setSubmitting(true);
                toast.success(
                    "Great! You will be notified when this product is back in stock."
                );
                resetForm();
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
        <div className="stock__reminder mt-4">
            <div className="uppercase text-base font-semibold border-primary border-2 inline-flex px-5 py-3 text-primary">
                out of stock
            </div>
            <div className="mt-3">
                <p className="text-sm font-semibold oswald">
                    Want to be notified when the product is back in stock?
                </p>
                <form
                    onSubmit={formik.handleSubmit}
                    className="mt-3 flex w-full"
                >
                    <div className="input-wrapper sm:w-[50%]">
                        <input
                            id="email"
                            type="email"
                            className={`input text-base h-[55px] ${
                                formik.touched.email &&
                                formik.errors.email &&
                                "error-input"
                            }`}
                            {...formik.getFieldProps("email")}
                            placeholder="Enter your email id"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error-text">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="">
                        <button
                            type="submit"
                            className={` uppercase py-2 px-10 text-base font-medium submit submit--full bg-primary h-[55px]  ${
                                formik.isValid &&
                                formik.dirty &&
                                !formik.isSubmitting
                                    ? ""
                                    : "submit--disabled"
                            }`}
                            disabled={!(formik.isValid && formik.dirty)}
                        >
                            {!formik.isSubmitting ? (
                                <span>
                                    <FaChevronRight />
                                </span>
                            ) : (
                                <Loader />
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
