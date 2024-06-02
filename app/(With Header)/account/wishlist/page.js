"use client";
import React from "react";
import { Wishlist } from "@/app/_components/Account/Wishlist/List";
import "@/app/_css/wishlist.css";
import { useAuth } from "@/app/_providers/Auth";
import { Loader } from "@/app/_components/Loader";
const wishlist = () => {
    const { user, removeItemFromWishlist, isUpdating } = useAuth();
    return (
        <div className="relative wishlist">
            <div className="heading mb-6 ">
                <h2 className="">Wishlist</h2>
            </div>
            {/* {user ? <div>{JSON.stringify(user.wishlist)}</div> : ""} */}
            {user ? (
                user.wishlist.length == 0 ? (
                    <div className="heading light mb-6">
                        <h2 className="lowercase">
                            We did not find any wishlist products for your
                            account.
                        </h2>
                    </div>
                ) : (
                    <Wishlist
                        items={user.wishlist.items}
                        removeItemFromWishlist={removeItemFromWishlist}
                    />
                )
            ) : (
                <Loader />
            )}
            {isUpdating ? (
                <div className="absolute w-full h-full top-0 left-0 flex justify-center align-middle items-center bg-white bg-opacity-80">
                    <Loader />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default wishlist;
