import React from "react";
import { BulkEnquiryForm } from "./form";
const BulkEnquiry = async () => {
    return (
        <div className="flex flex-col items-center justify-center bg-cover py-24">
            <div className="bg-white pt-8 pb-12 px-12 shadow-md w-full max-w-[22em] relative border border-borderColor">
                <div>
                    {/* <Loader /> */}
                    <div>
                        <h1 className="portal-heading oswald !text-[2rem]">
                            Bulk Enquiry Form
                        </h1>
                        <BulkEnquiryForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BulkEnquiry;
