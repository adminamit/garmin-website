"use client";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { useAuth } from "@/app/_providers/Auth";
import { Loader } from "@/app/_components/Loader";

const Address = () => {
    const { user } = useAuth();
    // const localUser = localStorage.getItem("user");
    // const parsedLocalUser = JSON.parse(localUser);

    // const getUserData = async () => {
    //     const res = await fetch(
    //         `${process.env.NEXT_PUBLIC_LIVE_URL}/api/auth/user?id=${parsedLocalUser.id}`,
    //         {
    //             method: "GET",
    //             credentials: "include",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }
    //     );

    //     const user = await res.json();
    // };

    return (
        <>
            <div className="heading mb-6 flex items-center">
                <h2 className="">saved addresses </h2>
            </div>
            {user != null ? (
                <>
                    <div className="addresses-wrapper grid grid-cols-3 gap-4">
                        <div className="address-info mb-4 col-span-1 bg-lightGrey p-5 relative">
                            <Link
                                href={`/account/address/edit/billing`}
                                className="flex items-center justify-between mb-2"
                            >
                                <h3 className="oswald text-xl underline">
                                    Billing Address
                                </h3>
                                <FaRegEdit className=" cursor-pointer"></FaRegEdit>
                            </Link>
                            {user.billingAddress ? (
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <p className="font-medium text-lg oswald mb-1">
                                            {user.billingAddress.name}
                                        </p>
                                        <p>{user.billingAddress.flat_home}</p>
                                        <p>{user.billingAddress.localty}</p>
                                        <p>
                                            {user.billingAddress.city},{" "}
                                            {user.billingAddress.pincode}
                                        </p>
                                        <p>{user.billingAddress.state}, IN</p>
                                    </div>

                                    <p className="font-medium text-lg oswald mb-4">
                                        Phone: {user.billingAddress.phone}
                                    </p>
                                </div>
                            ) : (
                                <p className="font-medium text-lg oswald mb-1">
                                    Not updated
                                </p>
                            )}
                        </div>

                        <div className="address-info mb-4 col-span-1 bg-lightGrey p-5 relative">
                            <Link
                                href={`/account/address/edit/shipping`}
                                className="flex items-center justify-between mb-2"
                            >
                                <h3 className="oswald text-xl underline">
                                    Shipping Address
                                </h3>
                                <FaRegEdit className=" cursor-pointer"></FaRegEdit>
                            </Link>
                            {user.billingAddress ? (
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <p className="font-medium text-lg oswald mb-1">
                                            {user.shippingAddress.name}
                                        </p>
                                        <p>{user.shippingAddress.flat_home}</p>
                                        <p>{user.shippingAddress.localty}</p>
                                        <p>
                                            {user.shippingAddress.city},{" "}
                                            {user.shippingAddress.pincode}
                                        </p>
                                        <p>{user.shippingAddress.state}, IN</p>
                                    </div>
                                    <p className="font-medium text-lg oswald mb-4">
                                        Phone: {user.shippingAddress.phone}
                                    </p>
                                </div>
                            ) : (
                                <p className="font-medium text-lg oswald mb-1">
                                    Not updated
                                </p>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Address;
