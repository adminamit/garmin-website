import React from "react";
import { AccountMenu } from "@/app/_components/Account/Menu";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import EditAddressForm from "@/app/_components/Account/Address/Edit";
const EditProfile = ({ params }) => {
    // Dummy data for demonstration
    const addresses = [];

    return (
        <div className="profile-wrapper pb-16">
            <div className="page-section-wrapper mx-auto">
                <AccountMenu activeMenu="address" />
                <div className="flex items-center justify-between mb-6 ">
                    <div className="heading ">
                        <h2 className="">edit address - {params.id}</h2>
                    </div>
                    <Link href="/account/address/" className="text-lg">
                        <RiArrowGoBackFill />
                    </Link>
                </div>

                {/* <EditAddressForm /> */}
            </div>
        </div>
    );
};

export default EditProfile;
