import React from "react";
import Image from "next/image";
export const Loading = () => {
    return (
        <div className="app__product__images">
            <div id="gallery-widget">
                <div className="gallery-viewer-wrap w-full flex justify-center align-middle h-full">
                    <svg
                        viewBox="-4 -4 151 100"
                        preserveAspectRatio="xMidYMid"
                        className="loading-cloud"
                        width="122.75"
                    >
                        <path
                            d="M121.663 90.638c-1.796 0-99.33-.498-101.474-1.478C8.685 83.877 1.25 72.196 1.25 59.396c0-16.656 12.797-30.61 29.052-32.323 7.49-15.706 23.186-25.707 40.714-25.707 20.98 0 39.215 14.752 43.945 34.907 15.09.245 27.29 12.63 27.29 27.822 0 11.968-7.738 22.55-19.256 26.33"
                            strokeWidth="9"
                            strokeLinecap="round"
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                        ></path>
                    </svg>
                </div>
                <div className="gallery-thumbnail-wrap relative animate-pulse flex space-y-3 flex-col">
                    <button className="absolute bg-[#CACACA] top-0 left-0 z-50 h-[20px] w-full flex justify-center items-center">
                        <svg
                            width="29"
                            height="50"
                            viewBox="0 0 29 50"
                            fill="#000"
                            xmlns="http://www.w3.org/2000/svg"
                            className="!opacity-100 rotate-90 w-[15px] h-[15px] fill-white"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M28.7036 44.1667L23.2732 50L-8.74598e-05 25L23.2732 -4.74743e-07L28.7036 5.83334L10.8608 25L28.7036 44.1667Z"
                                fill="white"
                                className="fill-white text-white"
                            ></path>
                        </svg>
                    </button>
                    <div className="h-[80px] w-[80px] border-2 border-borderColor"></div>
                    <div className="h-[80px] w-[80px] border-2 border-borderColor"></div>
                    <div className="h-[80px] w-[80px] border-2 border-borderColor"></div>
                    <div className="h-[80px] w-[80px] border-2 border-borderColor"></div>
                    <div className="h-[80px] w-[80px] border-2 border-borderColor"></div>
                    <button className="absolute bg-[#CACACA] -bottom-3 left-0 z-50 h-[20px] w-full flex justify-center items-center">
                        <svg
                            width="29"
                            height="50"
                            viewBox="0 0 29 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="!opacity-100 rotate-90 w-[15px] h-[15px] fill-white"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 5.83333L5.43043 0L28.7037 25L5.43043 50L0 44.1667L17.8428 25L0 5.83333Z"
                                fill="white"
                                className="fill-white text-white"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
