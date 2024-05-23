"use client";
import React from "react";
import { AccountMenu } from "@/app/_components/Account/Menu";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import EditAddressForm from "@/app/_components/Account/Address/Edit";
import { Loader } from "@/app/_components/Loader";
import { useAuth } from "@/app/_providers/Auth";

const EditAddress = ({ params }) => {
    const { user, updateUser } = useAuth();
    return (
        <>
            <div className="flex items-center justify-between mb-6 ">
                <div className="heading ">
                    <h2 className="">edit address - {params.type}</h2>
                </div>
                <Link href="/account/address/" className="text-lg">
                    <RiArrowGoBackFill />
                </Link>
            </div>
            {user ? (
                <EditAddressForm
                    type={params.type}
                    user={user}
                    updateUser={updateUser}
                />
            ) : (
                <Loader></Loader>
            )}
        </>
    );
};

export default EditAddress;
