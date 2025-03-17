"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/app/_components/Loader";
import toast from "react-hot-toast";
const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_URL}/api/auth/resetPassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: values.password,
            token: token,
          }),
        }
      );

      const status = await res.json();
      if (res.status === 200) {
        if (status.errors) {
          toast.error(status.errors[0].message);
        } else {
          toast.success("Password reset successfully");
          router.push("/login");
          setSubmitting(true);
          resetForm();
        }
      } else {
        toast.error("Something went wrong. Please try again");
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
      <div
        className="flex flex-col items-center justify-center md:py-24 bg-cover"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/featured/?beach,dark')",
        }}
      >
        <div className="bg-white pt-8 pb-12 px-6 lg:px-12 shadow-md w-full max-w-[27em] relative">
          <div className="flex mt-5 mb-12 justify-center w-full">
            <Image
              alt="default alt"
              src={`/assets/images/Garmin_Amit.svg`}
              width="560"
              height="560"
            />
          </div>
          <div>
            <div>
              <h1 className="portal-heading">RESET PASSWORD</h1>
              {/* <p className="mt-4">
                                Enter the email address associated with your
                                account.
                            </p> */}
              <form onSubmit={formik.handleSubmit} className="pt-10 pb-9">
                <div className="input-wrapper">
                  <label htmlFor="name" className="label">
                    Password <span className="required">*</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className={`input ${
                      formik.errors.password && "error-input"
                    }`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="help-text">
                    Minimum password length is 8 characters. Please use at least
                    1 uppercase letter, 1 lowercase letter and 1 number.
                  </label>
                  {formik.errors.password && (
                    <div className="error-text">{formik.errors.password}</div>
                  )}
                </div>

                <div className="input-wrapper">
                  <label htmlFor="passwordConfirm" className="label">
                    Retype Password <span className="required">*</span>
                  </label>
                  <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    className={`input ${
                      formik.errors.passwordConfirm && "error-input"
                    }`}
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.passwordConfirm && (
                    <div className="error-text">
                      {formik.errors.passwordConfirm}
                    </div>
                  )}
                </div>

                <div className="">
                  <button
                    type="submit"
                    className={` uppercase py-2 px-10 text-base font-medium submit submit--full  ${
                      formik.isValid && formik.dirty ? "" : "submit--disabled"
                    }`}
                    disabled={!(formik.isValid && formik.dirty)}
                  >
                    {!formik.isSubmitting ? <span>reset password</span> : ""}
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
                  <Link href="/login" className=" font-medium hover:underline">
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

export default ResetPassword;
