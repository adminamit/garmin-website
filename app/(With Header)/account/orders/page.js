"use client";
import React, { useState, useEffect } from "react";
import { AccountMenu } from "@/app/_components/Account/Menu";
import { useOrder } from "@/app/_providers/Order";
import { Loader } from "@/app/_components/Loader";
import Link from "next/link";
import dayjs from "dayjs";

const formatPrice = (price) => {
    return price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
    });
};

const Orders = () => {
    const { getAllOrders } = useOrder();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getAllOrders();
            setOrders(data.docs);
            setIsLoading(false);
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
                    <div className="details-wrapper grid xl:grid-cols-1 gap-6">
                        {orders.map((order) => {
                            return (
                                <Link
                                    href={`/account/orders/${order.id}`}
                                    key={order.id}
                                    target="_blank"
                                >
                                    <div className="border shadow-sm border-gray rounded-md p-6 cursor-pointer flex gap-12 justify-between">
                                        <div>
                                            <h2 className="card__name oswald mb-4 font-medium">
                                                <p>Order ID: #{order.id}</p>
                                            </h2>
                                            <div>
                                                <h4 className="text-base oswald mb-2 underline font-bold">
                                                    Products in order:
                                                </h4>
                                                <div className="flex flex-col gap-2">
                                                    {order.items &&
                                                        order.items.map(
                                                            (item, index) => {
                                                                return (
                                                                    <span
                                                                        className="text-sm oswald"
                                                                        key={
                                                                            item
                                                                                .product
                                                                                .id
                                                                        }
                                                                    >
                                                                        {
                                                                            item
                                                                                .product
                                                                                .title
                                                                        }
                                                                    </span>
                                                                );
                                                            }
                                                        )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col border-l border-gray pl-12 w-[40%]">
                                            <div className="text-base flex flex-col gap-1 font-light">
                                                <p>
                                                    <strong>Order Date</strong>:
                                                    {dayjs(
                                                        order.createdAt
                                                    ).format("DD MMM YYYY")}
                                                </p>
                                                <p>
                                                    <strong>Discount:</strong>{" "}
                                                    {formatPrice(
                                                        order.discount
                                                    )}
                                                </p>
                                                <p>
                                                    <strong>Total:</strong>{" "}
                                                    {formatPrice(order.total)}
                                                </p>
                                                <p className="mt-4 flex gap-2">
                                                    <span className="uppercase text-xs text-white bg-primary px-4 py-2 rounded-md oswald">
                                                        {order.orderStatus}
                                                    </span>
                                                    {order.trackingId && (
                                                        <Link
                                                            href={`https://www.delhivery.com/tracking?awb=${order.trackingId}`}
                                                            target="_blank"
                                                            className="uppercase text-xs text-white bg-black px-4 py-2 rounded-md oswald"
                                                        >
                                                            Track
                                                        </Link>
                                                    )}
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

export default Orders;
