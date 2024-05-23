"use client";
import React from "react";
import Link from "next/link";
import { Dropdown } from "@/app/_components/Helpers/Dropdown";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useAuth } from "@/app/_providers/Auth";
export const Account = () => {
    const { status } = useAuth();
    return (
        <Dropdown title={<HiOutlineUserCircle className="w-6 h-6" />}>
            <Link href="/account">Account</Link>
            <Link href="/account/orders">Orders</Link>

            {status == "loggedIn" ? (
                <Link href="#">
                    <SignOut />
                </Link>
            ) : (
                <Link href="/login">Sign In</Link>
            )}
        </Dropdown>
    );
};
