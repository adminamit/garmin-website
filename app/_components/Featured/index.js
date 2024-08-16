"use client";
import React, { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const Featured = ({ slides }) => {
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    let link = "";
    return (
        <div className="w-full ">
            <div className="home-featured-heading relative bg-black text-white w-full py-4 px-16 text-center oswald tracking-wider uppercase text-[.9rem] font-normal">
                FEATURED
            </div>
            <div className="featured-slider px-4 mt-8">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"> */}
                <Swiper
                    slidesPerView={4.5}
                    spaceBetween={25}
                    centeredSlides={false}
                    pagination={false}
                    modules={[]}
                    ref={sliderRef}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },

                        1024: {
                            slidesPerView: 3.5,
                        },
                        1200: {
                            slidesPerView: 4.5,
                        },
                    }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="my-1">
                            <div className="group home-featured-product-card h-full min-h-[540px]">
                                <Link
                                    href={
                                        slide.links[0]
                                            ? slide.links[0].link.type ==
                                              "custom"
                                                ? slide.links[0].link.url
                                                : slide.links[0].link.reference
                                                      .relationTo == "products"
                                                ? `/p/${slide.links[0].link.reference.value.slug}`
                                                : `/c/${slide.links[0].link.reference.value.slug}`
                                            : ""
                                    }
                                    className=""
                                >
                                    {slide.new ? (
                                        <div className="absolute top-2 left-3">
                                            <svg
                                                id="Layer_1"
                                                className="w-24"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 100 100"
                                                xmlXspace="preserve"
                                            >
                                                <polygon
                                                    fill="#000000"
                                                    points="50,0.2 57.3,6.8 66.3,2.9 71,11.5 80.8,10.7 82.5,20.4 92,22.9 90.4,32.6 98.6,38 94,46.7 100,54.5 92.8,61.2
          95.9,70.5 87,74.5 86.9,84.3 77.1,85.2 73.9,94.5 64.3,92.1 58.3,99.8 50,94.5 41.7,99.8 35.7,92.1 26.1,94.5 22.9,85.2 13.1,84.3
          13,74.5 4.1,70.5 7.2,61.2 0,54.5 6,46.7 1.4,38 9.6,32.6 8,22.9 17.5,20.4 19.2,10.7 29,11.5 33.7,2.9 42.7,6.8 "
                                                ></polygon>
                                                <text
                                                    text-anchor="middle"
                                                    fill="#FFFFFF"
                                                    className="text"
                                                    x="50%"
                                                    y="55%"
                                                >
                                                    NEW
                                                </text>
                                            </svg>
                                        </div>
                                    ) : (
                                        ""
                                    )}

                                    <div className="w-full md:h-[16vw] text-center mt-4 mb-8 flex justify-center">
                                        {slide.image ? (
                                            <Image
                                                alt="default alt"
                                                src={slide.image.url}
                                                width="160"
                                                height="160"
                                                className="w-full h-[200px] md:h-full object-center object-contain max-w-[15em] "
                                                quality={100}
                                                unoptimized
                                            />
                                        ) : (
                                            <Image
                                                alt="default alt"
                                                src={`/assets/images/270x270px.webp`}
                                                width="160"
                                                height="160"
                                                className="w-full h-[200px] md:h-full object-center object-contain max-w-[15em] "
                                                quality={100}
                                                unoptimized
                                            />
                                        )}
                                    </div>

                                    <div className=" text-black text-center flex flex-col gap-4">
                                        <h2 className="home-featured-product-heading">
                                            {parse(slide.title)}
                                        </h2>
                                        <p className="home-featured-product-description">
                                            {parse(slide.description)}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                    <button
                        className="arrow-left featured-products-arrow"
                        onClick={handlePrev}
                    >
                        <svg
                            className="featured-products__arrow__icon"
                            width="68"
                            height="68"
                            viewBox="0 0 68 68"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-v-572ffcca=""
                        >
                            <g
                                filter="url(#filter0_d_485_17)"
                                data-v-572ffcca=""
                            >
                                <circle
                                    cx="34"
                                    cy="28"
                                    r="28"
                                    transform="rotate(-180 34 28)"
                                    fill="white"
                                    data-v-572ffcca=""
                                ></circle>
                                <circle
                                    cx="34"
                                    cy="28"
                                    r="27.75"
                                    transform="rotate(-180 34 28)"
                                    stroke="url(#paint0_linear_485_17)"
                                    strokeWidth="0.5"
                                    data-v-572ffcca=""
                                ></circle>
                                <circle
                                    cx="34"
                                    cy="28"
                                    r="27.75"
                                    transform="rotate(-180 34 28)"
                                    stroke="url(#paint1_linear_485_17)"
                                    strokeWidth="0.5"
                                    data-v-572ffcca=""
                                ></circle>
                            </g>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M39 34.9L37.0135 37L28.5 28L37.0135 19L39 21.1L32.473 28L39 34.9Z"
                                fill="black"
                                data-v-572ffcca=""
                            ></path>
                            <defs data-v-572ffcca="">
                                <filter
                                    id="filter0_d_485_17"
                                    x="0"
                                    y="0"
                                    width="68"
                                    height="68"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                    data-v-572ffcca=""
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                        data-v-572ffcca=""
                                    ></feFlood>
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                        data-v-572ffcca=""
                                    ></feColorMatrix>
                                    <feOffset
                                        dy="6"
                                        data-v-572ffcca=""
                                    ></feOffset>
                                    <feGaussianBlur
                                        stdDeviation="3"
                                        data-v-572ffcca=""
                                    ></feGaussianBlur>
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                        data-v-572ffcca=""
                                    ></feColorMatrix>
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_485_17"
                                        data-v-572ffcca=""
                                    ></feBlend>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_485_17"
                                        result="shape"
                                        data-v-572ffcca=""
                                    ></feBlend>
                                </filter>
                                <linearGradient
                                    id="paint0_linear_485_17"
                                    x1="6.274"
                                    y1="-1.90735e-06"
                                    x2="6.274"
                                    y2="55.452"
                                    gradientUnits="userSpaceOnUse"
                                    data-v-572ffcca=""
                                >
                                    <stop
                                        stopOpacity="0.01"
                                        data-v-572ffcca=""
                                    ></stop>
                                    <stop
                                        offset="0.8"
                                        stopOpacity="0.02"
                                        data-v-572ffcca=""
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopOpacity="0.04"
                                        data-v-572ffcca=""
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_485_17"
                                    x1="6"
                                    y1="-1.90735e-06"
                                    x2="6"
                                    y2="56"
                                    gradientUnits="userSpaceOnUse"
                                    data-v-572ffcca=""
                                >
                                    <stop
                                        stopColor="white"
                                        stopOpacity="0.12"
                                        data-v-572ffcca=""
                                    ></stop>
                                    <stop
                                        offset="0.2"
                                        stopColor="white"
                                        stopOpacity="0.06"
                                        data-v-572ffcca=""
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopColor="white"
                                        stopOpacity="0.01"
                                        data-v-572ffcca=""
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                    <button
                        className="arrow-right featured-products-arrow"
                        onClick={handleNext}
                    >
                        <svg
                            className="featured-products__arrow__icon"
                            width="68"
                            height="68"
                            viewBox="0 0 68 68"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-v-572ffcca=""
                        >
                            <g
                                filter="url(#filter0_d_485_13)"
                                data-v-572ffcca=""
                            >
                                <circle
                                    cx="34"
                                    cy="28"
                                    r="28"
                                    fill="white"
                                    data-v-572ffcca=""
                                ></circle>
                                <circle
                                    cx="34"
                                    cy="28"
                                    r="27.75"
                                    stroke="url(#paint0_linear_485_13)"
                                    strokeWidth="0.5"
                                    data-v-572ffcca=""
                                ></circle>
                                <circle
                                    cx="34"
                                    cy="28"
                                    r="27.75"
                                    stroke="url(#paint1_linear_485_13)"
                                    strokeWidth="0.5"
                                    data-v-572ffcca=""
                                ></circle>
                            </g>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M29 21.1L30.9865 19L39.5 28L30.9865 37L29 34.9L35.527 28L29 21.1Z"
                                fill="black"
                                data-v-572ffcca=""
                            ></path>
                            <defs data-v-572ffcca="">
                                <filter
                                    id="filter0_d_485_13"
                                    x="0"
                                    y="0"
                                    width="68"
                                    height="68"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                    data-v-572ffcca=""
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                        data-v-572ffcca=""
                                    ></feFlood>
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                        data-v-572ffcca=""
                                    ></feColorMatrix>
                                    <feOffset
                                        dy="6"
                                        data-v-572ffcca=""
                                    ></feOffset>
                                    <feGaussianBlur
                                        stdDeviation="3"
                                        data-v-572ffcca=""
                                    ></feGaussianBlur>
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                        data-v-572ffcca=""
                                    ></feColorMatrix>
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_485_13"
                                        data-v-572ffcca=""
                                    ></feBlend>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_485_13"
                                        result="shape"
                                        data-v-572ffcca=""
                                    ></feBlend>
                                </filter>
                                <linearGradient
                                    id="paint0_linear_485_13"
                                    x1="6.27399"
                                    y1="0"
                                    x2="6.27399"
                                    y2="55.452"
                                    gradientUnits="userSpaceOnUse"
                                    data-v-572ffcca=""
                                >
                                    <stop
                                        stopOpacity="0.01"
                                        data-v-572ffcca=""
                                    ></stop>
                                    <stop
                                        offset="0.8"
                                        stopOpacity="0.02"
                                        data-v-572ffcca=""
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopOpacity="0.04"
                                        data-v-572ffcca=""
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_485_13"
                                    x1="6"
                                    y1="0"
                                    x2="6"
                                    y2="56"
                                    gradientUnits="userSpaceOnUse"
                                    data-v-572ffcca=""
                                >
                                    <stop
                                        stopColor="white"
                                        stopOpacity="0.12"
                                        data-v-572ffcca=""
                                    ></stop>
                                    <stop
                                        offset="0.2"
                                        stopColor="white"
                                        stopOpacity="0.06"
                                        data-v-572ffcca=""
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stopColor="white"
                                        stopOpacity="0.01"
                                        data-v-572ffcca=""
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </Swiper>
                {/* </div> */}
            </div>
        </div>
    );
};
