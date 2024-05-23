import React from "react";
import { AccountMenu } from "@/app/_components/Account/Menu";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import AddAddressForm from "@/app/_components/Account/Address/Add";

const AddAddress = () => {
    // Dummy data for demonstration
    const addresses = [];

    return (
        <>
            <div className="flex items-center justify-between mb-6 ">
                <div className="heading">
                    <h2 className="">add new address</h2>
                </div>
                <Link href="/account/address/" className="text-lg mt-2">
                    <RiArrowGoBackFill />
                </Link>
            </div>

            <AddAddressForm />
        </>
    );
};

export default AddAddress;
