"use client";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { getCookie, setCookie } from "cookies-next";
const Context = createContext({});
import { useAuth } from "../Auth";
export const OrderProvider = ({ children }) => {
    const [orderId, setOrderId] = useState();
    // const [status, setStatus] = useState();
    // const [isUpdating, setIsUpdating] = useState(false);
    const { user } = useAuth();
    useEffect(() => {
        const existingOrderId = getCookie("orderId");
        if (existingOrderId) {
            setOrderId(existingOrderId);
        }
    }, []);

    const createOrder = useCallback(async (orderData) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders/createOrder`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(orderData),
                }
            );
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                if (data.id) {
                    setCookie("orderId", data.id);
                    return data;
                } else {
                    throw new Error(errors[0].message);
                }
            } else {
                throw new Error("Error updating! Please try again later.");
            }
        } catch (e) {
            console.log(e);
            throw new Error("An error occurred while attempting to create .");
        }
    }, []);

    const updateOrder = useCallback(async (orderId, data) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders/${orderId}`,
                {
                    method: "PATCH",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            if (res.ok) {
                const { doc, errors } = await res.json();
                if (errors) throw new Error(errors[0].message);
                setUser(doc);
                localStorage.setItem("user", JSON.stringify(doc));
                return res;
            } else {
                throw new Error(
                    "Error fetching orders! Please try again later."
                );
            }
        } catch (e) {
            throw new Error("An error occurred while attempting to update.");
        }
    }, []);

    const getAllOrders = useCallback(
        async (orderId, data) => {
            const localUser = localStorage.getItem("user");
            const parsedUser = JSON.parse(localUser);
            try {
                const res = await fetch(
                    `/api/graphQl/orders/?user=${parsedUser.id}`,
                    {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (res.ok) {
                    const data = await res.json();
                    return data;
                } else {
                    throw new Error(
                        "Error fetching orders! Please try again later."
                    );
                }
            } catch (e) {
                console.log(e);
                console.log(e);
                throw new Error(
                    "An error occurred while attempting to fetch orders."
                );
            }
        },
        [user]
    );

    return (
        <Context.Provider
            value={{
                createOrder,
                updateOrder,
                getAllOrders,
                orderId,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useOrder = () => useContext(Context);
