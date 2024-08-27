import React from "react";
import { AccountMenu } from "@/app/_components/Account/Menu";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

const Address = ({ children }) => {
    // Dummy data for demonstration

    return (
        <div className="profile-wrapper pb-16">
            <div className="page-section-wrapper mx-auto">
                <AccountMenu />
                {children}
            </div>
        </div>
    );
};

export default Address;
