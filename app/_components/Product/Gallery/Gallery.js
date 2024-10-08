"use client";
import React, { useRef, useState, useCallback } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Loading } from "./Loading";
import "@/app/_css/product/gallery.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Gallery({ gallery }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const sliderRef = useRef(null);
    const sliderRefThumbnail = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const handleThumbnailPrev = useCallback(() => {
        if (!sliderRefThumbnail.current) return;
        sliderRefThumbnail.current.swiper.slidePrev();
    }, []);

    const handleThumbnailNext = useCallback(() => {
        if (!sliderRefThumbnail.current) return;
        sliderRefThumbnail.current.swiper.slideNext();
    }, []);

    return (
        <div className="app__product__images">
            <div id="gallery-widget">
                <div className="gallery-viewer-wrap">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="product__gallery__thumbnails"
                        loop={true}
                        ref={sliderRef}
                    >
                        {gallery.map((item) => {
                            return (
                                <SwiperSlide key={item.featuredImage.id}>
                                    <img src={item.featuredImage.url} />
                                </SwiperSlide>
                            );
                        })}
                        <button
                            className="arrow-left swiper-arrow !w-[30px] !h-[30px]"
                            onClick={handlePrev}
                        >
                            <svg
                                width="29"
                                height="50"
                                viewBox="0 0 29 50"
                                fill="#000"
                                xmlns="http://www.w3.org/2000/svg"
                                className="!opacity-100"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M28.7036 44.1667L23.2732 50L-8.74598e-05 25L23.2732 -4.74743e-07L28.7036 5.83334L10.8608 25L28.7036 44.1667Z"
                                    fill="white"
                                    className="!fill-black !text-black"
                                ></path>
                            </svg>
                        </button>
                        <button
                            className="arrow-right swiper-arrow !w-[30px] !h-[30px]"
                            onClick={handleNext}
                        >
                            <svg
                                width="29"
                                height="50"
                                viewBox="0 0 29 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="!opacity-100"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 5.83333L5.43043 0L28.7037 25L5.43043 50L0 44.1667L17.8428 25L0 5.83333Z"
                                    fill="white"
                                    className="!fill-black !text-black"
                                ></path>
                            </svg>
                        </button>
                    </Swiper>
                </div>
                <div className="gallery-thumbnail-wrap relative">
                    <button
                        className="absolute bg-[#CACACA] -top-[22px] left-0 z-50 h-[20px] w-full flex justify-center items-center"
                        onClick={handleThumbnailPrev}
                    >
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
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="gallery-thumbnails"
                        direction={"vertical"}
                        // sliderRefThumbnail
                        ref={sliderRefThumbnail}
                        // width={80}
                        // height={80}
                    >
                        {gallery.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.featuredImage.id}
                                    className="gallery-thumbnail"
                                >
                                    <img src={item.featuredImage.url} />
                                </SwiperSlide>
                            );
                        })}
                        <button
                            className="absolute bg-[#CACACA] bottom-0 left-0 z-50 h-[20px] w-full flex justify-center items-center"
                            onClick={handleThumbnailNext}
                        >
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
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
