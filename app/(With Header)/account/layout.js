import React from "react";
import { AccountMenu } from "@/app/_components/Account/Menu";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

const Address = ({ children }) => {
    // Dummy data for demonstration
    const addresses = [
        {
            id: "addkold",
            recipientName: "Bhuvan Singh",
            flatNumber: "D-4, B8-12",
            street_locality: "Sector 8, Dwarka",
            landmark: "Hanuman Mandir",
            city: "New Delhi",
            pinCode: "110075",
            state: "Delhi",
            country: "IN",
        },
        {
            id: "addolee",
            recipientName: "Chandan Singh",
            flatNumber: "108, B-3/87",
            street_locality: "Mansa Ram park, Uttam Nagar",
            landmark: "Durga Mandir",
            city: "New Delhi",
            pinCode: "110075",
            state: "Delhi",
            country: "IN",
        },
    ];

    return (
        <div className="profile-wrapper pb-16">
            <div className="page-section-wrapper mx-auto">
                <AccountMenu activeMenu="address" />
                {children}
            </div>
        </div>
    );
};

export default Address;
