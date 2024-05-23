"use client";
import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { useCart } from "@/app/_providers/Cart";

const MiniCart = ({ theme }) => {
    const { cart } = useCart();
    const [length, setLength] = useState(0);

    useEffect(() => {
        setLength(cart?.items?.length || 0);
    }, [cart]);
    return (
        <Link href="/cart">
            <div className="relative">
                <IoCartOutline
                    className={`w-6 h-6 ${
                        theme == "light" ? "text-white" : "text-black "
                    }`}
                />
                <span
                    className={`absolute -top-2 -right-1 rounded-full ${
                        theme == "light"
                            ? "text-black bg-white"
                            : "bg-black text-white"
                    }  w-4 h-4 top right p-0 m-0 font-mono text-xs leading-tight text-center oswald`}
                >
                    {/* {typeof length === "number" && length > 0 && { length }} */}
                    {/* {length} */}
                    {/* {length} */}
                    {cart?.items?.length || 0}
                </span>
            </div>
        </Link>
    );
};

export default MiniCart;
