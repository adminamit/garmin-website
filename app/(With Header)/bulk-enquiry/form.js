"use client";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import { Loader } from "@/app/_components/Loader";
export const BulkEnquiryForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      organisationName: "",
      orderQuantity: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_URL}/api/bulk-enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (res.status === 201) {
        setSubmitting(true);
        toast.success("Enquiry sent succesfully!");
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
      phone: yup
        .string()
        .matches(/^\d+$/, "Phone number must contain only numbers")
        .required("This field is required"),
      organisationName: yup.string().required("This field is required"),
      orderQuantity: yup.string().required("This field is required"),
    }),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="pt-10 pb-9">
        <div className="input-wrapper">
          <label htmlFor="name" className="label !text-[0.8rem]">
            Email Address <span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={`input ${
              formik.touched.email && formik.errors.email && "error-input"
            }`}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-text">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="input-wrapper">
          <label htmlFor="phone" className="label !text-[0.8rem]">
            Phone Number <span className="required">*</span>
          </label>
          <input
            id="phone"
            type="text"
            className={`input ${
              formik.touched.phone && formik.errors.phone && "error-input"
            }`}
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error-text">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div className="input-wrapper">
          <label htmlFor="name" className="label !text-[0.8rem]">
            Organisation Name
            <span className="required">*</span>
          </label>
          <input
            id="organisationName"
            type="text"
            className={`input ${
              formik.touched.organisationName &&
              formik.errors.organisationName &&
              "error-input"
            }`}
            {...formik.getFieldProps("organisationName")}
          />

          {formik.touched.organisationName && formik.errors.organisationName ? (
            <div className="error-text">{formik.errors.organisationName}</div>
          ) : null}
        </div>

        <div className="input-wrapper">
          <label htmlFor="name" className="label !text-[0.8rem]">
            Order Quantity
            <span className="required">*</span>
          </label>
          <input
            id="orderQuantity"
            type="text"
            className={`input ${
              formik.touched.orderQuantity &&
              formik.errors.orderQuantity &&
              "error-input"
            }`}
            {...formik.getFieldProps("orderQuantity")}
          />

          {formik.touched.orderQuantity && formik.errors.orderQuantity ? (
            <div className="error-text">{formik.errors.orderQuantity}</div>
          ) : null}
        </div>

        <div className="">
          <button
            type="submit"
            className={` uppercase py-2 px-10 text-base font-medium submit submit--full  ${
              formik.isValid && formik.dirty && !formik.isSubmitting
                ? ""
                : "submit--disabled"
            }`}
            disabled={!(formik.isValid && formik.dirty)}
          >
            {!formik.isSubmitting ? <span>Send Bulk enquiry</span> : <Loader />}
          </button>
        </div>
      </form>
    </>
  );
};
