"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Loader } from "@/app/_components/Loader";

const Verify = () => {
    const [error, setError] = useState(false);
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const router = useRouter();
    // if (!token) {
    //     router.push("/");
    // }

    useEffect(() => {
        const verifyAccount = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_LIVE_URL}/api/auth/verify`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token,
                    }),
                }
            );

            const status = await res.json();
            if (res.status === 200) {
                if (status.errors) {
                    // alert(status.errors[0].message);
                    setError(true);
                } else {
                    alert(
                        "Acccount verified succefully. Please login to your account."
                    );
                    router.push("/login");
                    setSubmitting(true);
                    resetForm();
                }
            } else {
                alert("Something went wrong. Please try again");
                setError(true);
            }
        };
        !token ? router.push("/") : verifyAccount();
    }, []);
    return (
        <div className="h-[60vh] flex flex-col align-middle justify-center text-center">
            {!error ? (
                <>
                    <h2 className="font-semibold oswald text-3xl mb-4">
                        We are verifying your account!
                    </h2>
                    <Loader />
                </>
            ) : (
                <>
                    <h2 className="font-semibold oswald text-3xl mb-4">
                        Something went wrong. Please try again or contact our
                        customer support!
                    </h2>
                    <div className="w-48 mx-auto mt-8">
                        <Link href="/" className="button">
                            Go to home
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Verify;
