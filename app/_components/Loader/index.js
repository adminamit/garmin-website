"use client";
import { ThreeDots } from "react-loader-spinner";
import "@/app/_css/components/loader/loader.css";
export const Loader = ({ size }) => {
    return (
        <div className="w-full flex justify-center">
            {/* <ThreeDots
                visible={true}
                height={size == "small" ? 60 : 150}
                width={size == "small" ? 60 : 150}
                color="#6dcff6"
                radius="14"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /> */}
            <span className="portal-loader g__loader g__loader--dark">
                <i className="g__loader__dot"></i>
                <i className="g__loader__dot"></i>
                <i className="g__loader__dot"></i>
            </span>
        </div>
    );
};
