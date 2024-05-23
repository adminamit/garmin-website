"use client";
import React, { useState, useEffect } from "react";
import { AccountMenu } from "@/app/_components/Account/Menu";
import { useOrder } from "@/app/_providers/Order";
import { Loader } from "@/app/_components/Loader";
import Link from "next/link";
const Profile = () => {
    // Dummy data for demonstration
    const { getAllOrders } = useOrder();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getAllOrders();
            setOrders(data.docs);
            setIsLoading(false);
            console.log("datadatadata");
            console.log(data);
        };
        fetchOrders();
    }, []);

    return (
        <>
            <div className="heading mb-6">
                <h2 className="">Orders</h2>
            </div>
            {!isLoading ? (
                orders && orders.length == 0 ? (
                    <div className="heading light mb-6">
                        <h2 className="lowercase">
                            We did not find any orders for your account.
                        </h2>
                    </div>
                ) : (
                    <div className="details-wrapper grid grid-cols-2 gap-5">
                        {orders.map((order) => {
                            return (
                                <Link href={`/account/orders/${order.id}`}>
                                    <div className="card p-5 cursor-pointer">
                                        <div>
                                            <h2 className="card__name oswald mb-4">
                                                <p>{order.orderTitle}</p>
                                            </h2>
                                            <div className="text-base flex flex-col gap-1">
                                                <p>
                                                    <strong>Order Date:</strong>{" "}
                                                    {order.createdAt}
                                                </p>
                                                <p>
                                                    <strong>Discount:</strong>{" "}
                                                    {order.discount}
                                                </p>
                                                <p>
                                                    <strong>Total:</strong>{" "}
                                                    {order.total}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Profile;
