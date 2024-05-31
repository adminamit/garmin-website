import React from "react";
import Image from "next/image";
import Link from "next/link";
import MiniCart from "@/app/_components/Cart/MiniCart";
import { IoLockClosedOutline } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <div className="bg-black ">
                <div className="w-full max-w-[1000px] relative flex items-center justify-center py-7 px-4 lg:px-0 mx-auto">
                    <Image
                        alt="default alt"
                        src={`/assets/images/logo-light.svg`}
                        width="115"
                        height="115"
                    />

                    <div className="absolute right-8 lg:right-0">
                        <MiniCart theme="light" />
                    </div>
                </div>
            </div>
            <div className="w-full py-5 text-center border-b-2 border-[#f2f2f2]">
                <div className="flex items-center gap-1.5 justify-center text-sm">
                    <IoLockClosedOutline className="text-base" />
                    <span className="mt-1">SECURE CHECKOUT</span>
                </div>
            </div>
        </>
    );
};

export default Header;
