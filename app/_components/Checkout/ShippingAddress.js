import React from "react";

const ShippingAddress = ({ formik }) => {
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
                <label htmlFor="shipping_name" className="label">
                    Name <span className="required">*</span>
                </label>
                <input
                    id="shipping_name"
                    name="shipping_name"
                    type="text"
                    className={`input ${
                        formik.touched.shipping_name &&
                        formik.errors.shipping_name &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("shipping_name")}
                />
                {formik.touched.shipping_name && formik.errors.shipping_name ? (
                    <div className="error-text">
                        {formik.errors.shipping_name}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="shipping_phone" className="label">
                    Phone <span className="required">*</span>
                </label>
                <input
                    id="shipping_phone"
                    name="shipping_phone"
                    type="text"
                    className={`input ${
                        formik.touched.shipping_phone &&
                        formik.errors.shipping_phone &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("shipping_phone")}
                />
                {formik.touched.shipping_phone &&
                formik.errors.shipping_phone ? (
                    <div className="error-text">
                        {formik.errors.shipping_phone}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="shipping_flat_home" className="label">
                    Flat/Home <span className="required">*</span>
                </label>
                <input
                    id="shipping_flat_home"
                    name="shipping_flat_home"
                    type="text"
                    className={`input ${
                        formik.touched.shipping_flat_home &&
                        formik.errors.shipping_flat_home &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("shipping_flat_home")}
                />
                {formik.touched.shipping_flat_home &&
                formik.errors.shipping_flat_home ? (
                    <div className="error-text">
                        {formik.errors.shipping_flat_home}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="shipping_locality" className="label">
                    Street & Locality <span className="required">*</span>
                </label>
                <input
                    id="shipping_locality"
                    name="shipping_locality"
                    type="text"
                    className={`input ${
                        formik.touched.shipping_locality &&
                        formik.errors.shipping_locality &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("shipping_locality")}
                />
                {formik.touched.shipping_locality &&
                formik.errors.shipping_locality ? (
                    <div className="error-text">
                        {formik.errors.shipping_locality}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="shipping_landmark" className="label">
                    Landmark
                </label>
                <input
                    id="shipping_landmark"
                    name="shipping_landmark"
                    type="text"
                    className={`input ${
                        formik.touched.shipping_landmark &&
                        formik.errors.shipping_landmark &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("shipping_landmark")}
                />
                {formik.touched.shipping_landmark &&
                formik.errors.shipping_landmark ? (
                    <div className="error-text">
                        {formik.errors.shipping_landmark}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="shipping_city" className="label">
                    City <span className="required">*</span>
                </label>
                <input
                    id="shipping_city"
                    name="shipping_city"
                    type="text"
                    className={`input ${
                        formik.touched.shipping_city &&
                        formik.errors.shipping_city &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("shipping_city")}
                />
                {formik.touched.shipping_city && formik.errors.shipping_city ? (
                    <div className="error-text">
                        {formik.errors.shipping_city}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="shipping_pincode" className="label">
                    Pincode <span className="required">*</span>
                </label>
                <input
                    id="shipping_pincode"
                    name="shipping_pincode"
                    type="text"
                    className={`input ${
                        formik.touched.shipping_pincode &&
                        formik.errors.shipping_pincode &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("shipping_pincode")}
                />
                {formik.touched.shipping_pincode &&
                formik.errors.shipping_pincode ? (
                    <div className="error-text">
                        {formik.errors.shipping_pincode}
                    </div>
                ) : null}
            </div>
            <div className="input-wrapper">
                <label htmlFor="shipping_state" className="label">
                    State <span className="required">*</span>
                </label>
                <select
                    id="shipping_state"
                    name="shipping_state"
                    type="text"
                    className={`input ${
                        formik.touched.shipping_state &&
                        formik.errors.shipping_state &&
                        "error-input"
                    }`}
                    {...formik.getFieldProps("shipping_state")}
                >
                    {states.map((state) => {
                        return (
                            <option key={state.value} value={state.value}>
                                {state.label}
                            </option>
                        );
                    })}
                </select>
                {formik.touched.shipping_state &&
                formik.errors.shipping_state ? (
                    <div className="error-text">
                        {formik.errors.shipping_state}
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default ShippingAddress;
