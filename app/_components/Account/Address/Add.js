"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/app/_components/Loader";

const AddAddressForm = () => {
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const [formData, setFormData] = useState({
        id: "",
        recipientName: "",
        number: "",
        flatNumber: "",
        street_locality: "",
        landmark: "",
        city: "",
        pinCode: "",
        state: "",
        country: "IN",
        defaultAddress: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log(formData);
    };

    const formik = useFormik({
        initialValues: {
            id: "",
            recipientName: "",
            number: "",
            flatNumber: "",
            street_locality: "",
            landmark: "",
            city: "",
            pinCode: "",
            state: "",
            country: "IN",
            defaultAddress: false,
        },
        onSubmit: () => {
            setMessage("Form submitted");
            setSubmitted(true);
        },
        validationSchema: yup.object({
            recipientName: yup
                .string()
                .trim()
                .required("This field is required"),
            number: yup
                .string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("This field is required"),
            flatNumber: yup.string().trim().required("This field is required"),
            street_locality: yup
                .string()
                .trim()
                .required("This field is required"),

            landmark: yup.string().trim(),
            city: yup.string().trim().required("This field is required"),
            pinCode: yup.string().trim().required("This field is required"),
            state: yup.string().trim().required("This field is required"),
            defaultAddress: yup.boolean(),
        }),
    });

    return (
        <div>
            {/* <Header /> */}

            <form onSubmit={formik.handleSubmit} className="pt-10 pb-9">
                <div className="input-wrapper">
                    <label htmlFor="recipientName" className="label">
                        Recipient Name <span className="required">*</span>
                    </label>
                    <input
                        id="recipientName"
                        name="recipientName"
                        type="text"
                        className={`input ${
                            formik.errors.name && "error-input"
                        }`}
                        value={formik.values.recipientName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.recipientName && (
                        <div className="error-text">
                            {formik.errors.recipientName}
                        </div>
                    )}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="number" className="label">
                        Mobile <span className="required">*</span>
                    </label>
                    <input
                        id="number"
                        name="number"
                        type="text"
                        className={`input ${
                            formik.errors.number && "error-input"
                        }`}
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.number && (
                        <div className="error-text">{formik.errors.number}</div>
                    )}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="flatNumber" className="label">
                        Flat/Home <span className="required">*</span>
                    </label>
                    <input
                        id="flatNumber"
                        name="flatNumber"
                        type="text"
                        className={`input ${
                            formik.errors.flatNumber && "error-input"
                        }`}
                        value={formik.values.flatNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.flatNumber && (
                        <div className="error-text">
                            {formik.errors.flatNumber}
                        </div>
                    )}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="street_locality" className="label">
                        Street & Locality <span className="required">*</span>
                    </label>
                    <input
                        id="street_locality"
                        name="street_locality"
                        type="text"
                        className={`input ${
                            formik.errors.street_locality && "error-input"
                        }`}
                        value={formik.values.street_locality}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.street_locality && (
                        <div className="error-text">
                            {formik.errors.street_locality}
                        </div>
                    )}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="landmark" className="label">
                        Landmark <span className="required">*</span>
                    </label>
                    <input
                        id="landmark"
                        name="landmark"
                        type="text"
                        className={`input ${
                            formik.errors.landmark && "error-input"
                        }`}
                        value={formik.values.landmark}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.landmark && (
                        <div className="error-text">
                            {formik.errors.landmark}
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="input-wrapper">
                        <label htmlFor="city" className="label">
                            City <span className="required">*</span>
                        </label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            className={`input ${
                                formik.errors.city && "error-input"
                            }`}
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.city && (
                            <div className="error-text">
                                {formik.errors.city}
                            </div>
                        )}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="state" className="label">
                            State <span className="required">*</span>
                        </label>
                        <input
                            id="state"
                            name="state"
                            type="text"
                            className={`input ${
                                formik.errors.state && "error-input"
                            }`}
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.state && (
                            <div className="error-text">
                                {formik.errors.state}
                            </div>
                        )}
                    </div>
                </div>

                <div className=" flex relative">
                    <input
                        id="defaultAddress"
                        name="defaultAddress"
                        type="checkbox"
                        className="hidden"
                        onChange={handleInputChange}
                    />

                    <label
                        htmlFor="defaultAddress"
                        className="ml-2 block text-black px-6 py-2 form_checkbox_label"
                    >
                        <span className="">Set this address as default?</span>
                    </label>
                </div>

                <div className="g-recaptcha mb-6" data-sitekey="your-site-key">
                    {/* <ReCaptchaProvider reCaptchaKey="[GTM-XXXXXXX]"></ReCaptchaProvider> */}
                </div>
                <div>
                    <button type="submit" className="submit">
                        Save Address
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAddressForm;
