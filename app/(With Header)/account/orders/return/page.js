import React from "react";
import { getMeUser } from "@/app/_utilities/getMeUser";
import { OrderReturnForm } from "./OrderReturnForm";

const OrderReturn = async () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-cover">
                <div className="bg-white pt-8 pb-12 px-12 shadow-md w-full max-w-[22em] relative border border-borderColor">
                    <div>
                        {/* <Loader /> */}
                        <div>
                            <h1 className="portal-heading oswald !text-[2rem]">
                                order Return request
                            </h1>
                            <OrderReturnForm />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default OrderReturn;
