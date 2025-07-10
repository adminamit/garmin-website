"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./success/index.css";
import { Loader } from "@/app/_components/Loader";
import dayjs from "dayjs";
import Link from "next/link";
const formatPrice = (price) => {
  return price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
};

const OrderWrapper = ({ orderId }) => {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    async function getOrderData() {
      const res = await fetch(`/api/graphQl/order/?orderID=${orderId}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        setOrder(data);
      } else {
        throw new Error("Error fetching orders! Please try again later.");
      }
    }

    getOrderData();
  }, []);
  return (
    <section className="py-16 relative">
      {order ? (
        <div className="w-full max-w-[1060px] px-4 md:px-5 lg-6 mx-auto">
          <h2 className="oswald font-semibold text-[2.5rem] tracking-wider leading-10 text-secondary text-center text-primary">
            Order Placed
          </h2>
          <p className="mt-4 font-normal text-lg leading-8  mb-11 text-center">
            Your order summary.
          </p>
          <div className="main-box border border-borderColor pt-6 max-lg:mx-auto lg:max-w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-borderColor">
              <div className="data">
                <h2 className="card__name oswald mb-4 font-medium">
                  <p>Order ID: #{order.id}</p>
                </h2>
                <p className="font-semibold oswald text-base leading-7 text-secondary mt-4">
                  Order Date :{" "}
                  <span className=" font-medium oswald">
                    {dayjs(order.createdAt).format("DD MMM YYYY")}
                  </span>
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="uppercase text-xs text-white bg-primary px-4 h-12 flex items-center rounded-md oswald">
                  {order.orderStatus}
                </span>
                {order.trackingId && (
                  <Link
                    href={`https://www.delhivery.com/tracking?awb=${order.trackingId}`}
                    target="_blank"
                    className="uppercase text-xs text-white bg-black px-4 h-12 rounded-md oswald flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                      />
                    </svg>
                    <span>Track</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="w-full px-3 min-[400px]:px-6">
              {order.items.map((item) => {
                return (
                  <div
                    className="flex flex-col lg:flex-row items-center py-12 border-b border-borderColor gap-6 w-full"
                    key={item.product.id}
                  >
                    <div className="img-box max-lg:w-full">
                      <Image
                        src={item.product.featuredImageUrl}
                        alt="Premium Watch image"
                        className="aspect-square lg:max-w-[140px] w-[140px]"
                        width={0}
                        height={0}
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-row items-center w-full ">
                      <div className="grid grid-cols-1 w-full">
                        <div className="flex items-center">
                          <div className="">
                            <h2 className="font-semibold oswald text-xl leading-8 text-secondary">
                              {item.product.title}
                            </h2>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center ">
                            <p className="font-medium oswald text-base leading-7 text-secondary ">
                              Qty :{" "}
                              <span className="text-gray-500">
                                {item.quantity}
                              </span>
                            </p>
                          </div>

                          <div className="flex gap-3">
                            <p className="font-medium oswald text-sm leading-7 text-secondary">
                              Price :{" "}
                            </p>
                            <p className="font-medium oswald text-lg leading-7 text-secondary">
                              {formatPrice(item.price ? item.price : 0)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="py-5 mx-6">
              <div className="flex gap-3 items-center">
                <p className="font-medium oswald text-sm whitespace-nowrap text-secondary">
                  Expected Delivery Time
                </p>
                <p className="font-medium oswald text-base whitespace-nowrap leading-7 text-primary">
                  4-7 Working Days
                </p>
              </div>
            </div>

            <div className="w-full border-t border-borderColor px-6 flex flex-col lg:flex-row items-center justify-between ">
              <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-borderColor">
                <div className="py-6 sm:pr-6 sm:border-r border-borderColor">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold">Note:</span> For any queries regarding your order, please contact customer service at{" "}
                    <a href="mailto:help@garmin-india.com" className="text-primary hover:underline">
                      help@garmin-india.com
                    </a>
                    {" "}or call{" "}
                    <a href="tel:+911148005813" className="text-primary hover:underline">
                      +91 11-48005813/825
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 py-6">
                {order.discount ? (
                  <p className="">
                    <strong className="oswald">Discount : </strong>
                    <span className="text-primary">
                      {formatPrice(order.discount)} - {order.coupon.name}
                    </span>
                  </p>
                ) : (
                  " "
                )}
                <p>
                  <strong className="oswald">Total : </strong>
                  {formatPrice(order.total)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default OrderWrapper;
