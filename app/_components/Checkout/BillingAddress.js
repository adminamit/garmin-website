import React from "react";

const BillingAddress = ({ formik }) => {
    const states = [
        {
            value: "AN",
            label: "Andaman and Nicobar Islands",
        },
        {
            value: "AP",
            label: "Andhra Pradesh",
        },
        {
            value: "AR",
            label: "Arunachal Pradesh",
        },
        {
            value: "AS",
            label: "Assam",
        },
        {
            value: "BR",
            label: "Bihar",
        },
        {
            value: "CG",
            label: "Chandigarh",
        },
        {
            value: "CH",
            label: "Chhattisgarh",
        },
        {
            value: "DH",
            label: "Dadra and Nagar Haveli",
        },
        {
            value: "DD",
            label: "Daman and Diu",
        },
        {
            value: "DL",
            label: "Delhi",
        },
        {
            value: "GA",
            label: "Goa",
        },
        {
            value: "GJ",
            label: "Gujarat",
        },
        {
            value: "HR",
            label: "Haryana",
        },
        {
            value: "HP",
            label: "Himachal Pradesh",
        },
        {
            value: "JK",
            label: "Jammu and Kashmir",
        },
        {
            value: "JH",
            label: "Jharkhand",
        },
        {
            value: "KA",
            label: "Karnataka",
        },
        {
            value: "KL",
            label: "Kerala",
        },
        {
            value: "LD",
            label: "Lakshadweep",
        },
        {
            value: "MP",
            label: "Madhya Pradesh",
        },
        {
            value: "MH",
            label: "Maharashtra",
        },
        {
            value: "MN",
            label: "Manipur",
        },
        {
            value: "ML",
            label: "Meghalaya",
        },
        {
            value: "MZ",
            label: "Mizoram",
        },
        {
            value: "NL",
            label: "Nagaland",
        },
        {
            value: "OR",
            label: "Odisha",
        },
        {
            value: "PY",
            label: "Puducherry",
        },
        {
            value: "PB",
            label: "Punjab",
        },
        {
            value: "RJ",
            label: "Rajasthan",
        },
        {
            value: "SK",
            label: "Sikkim",
        },
        {
            value: "TN",
            label: "Tamil Nadu",
        },
        {
            value: "TS",
            label: "Telangana",
        },
        {
            value: "TR",
            label: "Tripura",
        },
        {
            value: "UK",
            label: "Uttarakhand",
        },
        {
            value: "UP",
            label: "Uttar Pradesh",
        },
        {
            value: "WB",
            label: "West Bengal",
        },
    ];
    return (
        <>
            <div className="checkout__prompt__info mb-8">
                <label className="font-normal text-xl oswald tracking-wider">
                    <span>Shipping Address</span>
                </label>
            </div>
            <div className="input-wrapper">
                <label htmlFor="billing_name" className="label">
                    Name <span className="required">*</span>
                </label>
                <input
                    id="billing_name"
                    name="billing_name"
                    type="text"
                    className={`input ${
                        formik.touched.billing_name &&
                        formik.errors.billing_name &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("billing_name")}
                />
                {formik.touched.billing_name && formik.errors.billing_name ? (
                    <div className="error-text">
                        {formik.errors.billing_name}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="billing_phone" className="label">
                    Phone <span className="required">*</span>
                </label>
                <input
                    id="billing_phone"
                    name="billing_phone"
                    type="text"
                    className={`input ${
                        formik.touched.billing_phone &&
                        formik.errors.billing_phone &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("billing_phone")}
                />
                {formik.touched.billing_phone && formik.errors.billing_phone ? (
                    <div className="error-text">
                        {formik.errors.billing_phone}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="billing_flat_home" className="label">
                    Flat/Home <span className="required">*</span>
                </label>
                <input
                    id="billing_flat_home"
                    name="billing_flat_home"
                    type="text"
                    className={`input ${
                        formik.touched.billing_flat_home &&
                        formik.errors.billing_flat_home &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("billing_flat_home")}
                />
                {formik.touched.billing_flat_home &&
                formik.errors.billing_flat_home ? (
                    <div className="error-text">
                        {formik.errors.billing_flat_home}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="billing_locality" className="label">
                    Street & Locality <span className="required">*</span>
                </label>
                <input
                    id="billing_locality"
                    name="billing_locality"
                    type="text"
                    className={`input ${
                        formik.touched.billing_locality &&
                        formik.errors.billing_locality &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("billing_locality")}
                />
                {formik.touched.billing_locality &&
                formik.errors.billing_locality ? (
                    <div className="error-text">
                        {formik.errors.billing_locality}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="billing_landmark" className="label">
                    Landmark
                </label>
                <input
                    id="billing_landmark"
                    name="billing_landmark"
                    type="text"
                    className={`input ${
                        formik.touched.billing_landmark &&
                        formik.errors.billing_landmark &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("billing_landmark")}
                />
                {formik.touched.billing_landmark &&
                formik.errors.billing_landmark ? (
                    <div className="error-text">
                        {formik.errors.billing_landmark}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="billing_city" className="label">
                    City <span className="required">*</span>
                </label>
                <input
                    id="billing_city"
                    name="billing_city"
                    type="text"
                    className={`input ${
                        formik.touched.billing_city &&
                        formik.errors.billing_city &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("billing_city")}
                />
                {formik.touched.billing_city && formik.errors.billing_city ? (
                    <div className="error-text">
                        {formik.errors.billing_city}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="billing_pincode" className="label">
                    Pincode <span className="required">*</span>
                </label>
                <input
                    id="billing_pincode"
                    name="billing_pincode"
                    type="text"
                    className={`input ${
                        formik.touched.billing_pincode &&
                        formik.errors.billing_pincode &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("billing_pincode")}
                />
                {formik.touched.billing_pincode &&
                formik.errors.billing_pincode ? (
                    <div className="error-text">
                        {formik.errors.billing_pincode}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="billing_state" className="label">
                    State <span className="required">*</span>
                </label>
                <select
                    id="billing_state"
                    name="billing_state"
                    type="text"
                    className={`input ${
                        formik.touched.billing_state &&
                        formik.errors.billing_state &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("billing_state")}
                >
                    {states.map((state) => {
                        return (
                            <option key={state.value} value={state.value}>
                                {state.label}
                            </option>
                        );
                    })}
                </select>
                {formik.touched.billing_state && formik.errors.billing_state ? (
                    <div className="error-text">
                        {formik.errors.billing_state}
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default BillingAddress;
