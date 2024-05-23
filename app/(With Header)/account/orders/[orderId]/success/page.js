import React from "react";
import Image from "next/image";
import "./index.css";
const OrderSuccess = ({ id }) => {
    return (
        <section className="py-16 relative">
            <div className="w-full max-w-[1060px] px-4 md:px-5 lg-6 mx-auto">
                <h2 className="oswald font-semibold text-[2.5rem] tracking-wider leading-10 text-secondary text-center text-primary">
                    Payment Successful
                </h2>
                <p className="mt-4 font-normal text-lg leading-8  mb-11 text-center">
                    Thank you for your purchase. You can view your order summary
                    below.
                </p>
                <div className="main-box border border-borderColor pt-6 max-lg:mx-auto lg:max-w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-borderColor">
                        <div className="data">
                            <p className="font-semibold oswald text-base leading-7 text-secondary">
                                Order Id:{" "}
                                <span className="text-secondary font-medium oswald">
                                    #10234987
                                </span>
                            </p>
                            <p className="font-semibold oswald text-base leading-7 text-secondary mt-4">
                                Order Payment :{" "}
                                <span className="text-gray-400 font-medium oswald">
                                    {" "}
                                    18th march 2021
                                </span>
                            </p>
                        </div>
                        <button className="rounded-full py-3 px-7 font-semibold oswald text-sm leading-7 text-white bg-primary max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 ">
                            Track Your Order
                        </button>
                    </div>
                    <div className="w-full px-3 min-[400px]:px-6">
                        <div className="flex flex-col lg:flex-row items-center py-12 border-b border-borderColor gap-6 w-full">
                            <div className="img-box max-lg:w-full">
                                <Image
                                    src="https://res.garmin.com/en/products/T2875.62/v/cf-md.jpg"
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
                                            <h2 className="font-semibold oswald text-xl leading-8 text-secondary mb-3">
                                                Tacx® NEO 2T Smart Trainer
                                            </h2>

                                            <div className="flex items-center ">
                                                <p className="font-medium oswald text-base leading-7 text-secondary pr-4 mr-4 border-r border-borderColor">
                                                    Size:{" "}
                                                    <span className="text-gray-500">
                                                        100 ml
                                                    </span>
                                                </p>
                                                <p className="font-medium oswald text-base leading-7 text-secondary ">
                                                    Qty:{" "}
                                                    <span className="text-gray-500">
                                                        2
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5 mt-4">
                                        <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium oswald text-sm leading-7 text-secondary">
                                                    Price
                                                </p>
                                                <p className="lg:mt-4 font-medium oswald text-lg leading-7 text-secondary">
                                                    $100
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium oswald text-sm leading-7 text-secondary">
                                                    Status
                                                </p>
                                                <p className="font-medium oswald text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                    Processing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium oswald text-sm whitespace-nowrap leading-6 text-secondary">
                                                    Expected Delivery Time
                                                </p>
                                                <p className="font-medium oswald text-base whitespace-nowrap leading-7 lg:mt-3 text-primary">
                                                    In 4-6 weeks
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center py-12 gap-6 w-full">
                            <div className="img-box max-lg:w-full">
                                <Image
                                    src="https://res.garmin.com/en_GB/products/010-02839-01/v/cf-md.jpg"
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
                                            <h2 className="font-semibold oswald text-xl leading-8 text-secondary mb-3">
                                                Lily® 2, Metallic Lilac with
                                                Lilac Silicone Band
                                            </h2>

                                            <div className="flex items-center ">
                                                <p className="font-medium oswald text-base leading-7 text-secondary pr-4 mr-4 border-r border-borderColor">
                                                    Size:{" "}
                                                    <span className="text-gray-500">
                                                        100 ml
                                                    </span>
                                                </p>
                                                <p className="font-medium oswald text-base leading-7 text-secondary ">
                                                    Qty:{" "}
                                                    <span className="text-gray-500">
                                                        2
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-5 mt-4">
                                        <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium oswald text-sm leading-7 text-secondary">
                                                    Price
                                                </p>
                                                <p className="lg:mt-4 font-medium oswald text-sm leading-7 text-secondary">
                                                    $100
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium oswald text-sm leading-7 text-secondary">
                                                    Status
                                                </p>
                                                <p className="font-medium oswald text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                    Processing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium oswald text-sm whitespace-nowrap leading-6 text-secondary">
                                                    Expected Delivery Time
                                                </p>
                                                <p className="font-medium oswald text-base whitespace-nowrap leading-7 lg:mt-3 text-primary">
                                                    In 4-6 weeks
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-borderColor px-6 flex flex-col lg:flex-row items-center justify-between ">
                        <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-borderColor">
                            <button className="flex outline-0 py-6 sm:pr-6  sm:border-r border-borderColor whitespace-nowrap gap-2 items-center justify-center font-semibold oswald group text-base text-secondary bg-white transition-all duration-500 text-secondary">
                                <svg
                                    className="stroke-secondary transition-all duration-500 stroke-black text-secondary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                >
                                    <path
                                        d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5"
                                        stroke=""
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                Cancel Order
                            </button>
                            <p className="oswald font-medium oswald text-base text-secondary pl-6 py-3 max-lg:text-center">
                                Paid using Credit Card{" "}
                                <span className="text-primary">
                                    ending with 8822
                                </span>
                            </p>
                        </div>
                        <p className="font-semibold oswald text-lg text-secondary py-6">
                            Total Price:{" "}
                            <span className="text-primary"> $200.00</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderSuccess;
