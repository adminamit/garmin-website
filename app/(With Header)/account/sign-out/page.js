"use client";
import React, { useEffect } from "react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const SignOut = async () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/login");

        // const logoutUser = async () => {
        //     const res = await fetch(
        //         `${process.env.NEXT_PUBLIC_LIVE_URL}/api/auth/logout`,
        //         {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         }
        //     );
        //     const logoutStatus = await res.json();
        //     if (logoutStatus.status === 200) {
        //         deleteCookie("user-token");
        //         useDispatch(logout);
        //     } else {
        //         alert("Something went wrong. Please try again");
        //     }
        // };
        // logoutUser();
    }, []);

    return <div></div>;
};

export default SignOut;
