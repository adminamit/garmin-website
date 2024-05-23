"use client";

import React from "react";

import { AuthProvider } from "../_providers/Auth";
import { CartProvider } from "../_providers/Cart";
import { OrderProvider } from "../_providers/Order";
export const Providers = ({ children }) => {
    return (
        <AuthProvider>
            <CartProvider>
                <OrderProvider>{children}</OrderProvider>
            </CartProvider>
        </AuthProvider>
    );
};
