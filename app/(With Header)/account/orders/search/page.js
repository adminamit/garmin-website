import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "@/app/_components/Loader";
import { RenderParams } from "@/app/_components/RenderParams";
import { getMeUser } from "@/app/_utilities/getMeUser";
import { OrderSearchForm } from "./OrderSearchForm";

const OrderSearch = async () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-cover">
                <div className="bg-white pt-8 pb-12 px-12 shadow-md w-full max-w-[22em] relative border border-borderColor">
                    <div>
                        {/* <Loader /> */}
                        <div>
                            <h1 className="portal-heading oswald !text-[2rem]">
                                CHECK ORDER STATUS
                            </h1>
                            <OrderSearchForm />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default OrderSearch;
