"use client";
import React, { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export const SwiperSlider = ({ slides }) => {
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className="bg-white w-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect={"fade"}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[EffectFade, Autoplay, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="relative"
                ref={sliderRef}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div key={slide.id} className="group home-slide-item">
                            <Link href="/" className="w-full">
                                <div className="w-full md:absolute h-full top-0 left-0 ">
                                    <Image
                                        alt="default alt"
                                        src={slide.image.url}
                                        width="160"
                                        height="160"
                                        className="w-full h-full object-center object-cover desktopImage"
                                        unoptimized
                                    />
                                    <Image
                                        alt="default alt"
                                        src={slide.mobileImage.url}
                                        width="160"
                                        height="160"
                                        className="w-full h-full object-center object-cover mobileImage"
                                        unoptimized
                                    />
                                </div>
                                <div className="md:absolute w-full h-full top-0 left-0 gradient-border-dark"></div>
                                <div className="slide-content relative text-white flex flex-col gap-8">
                                    <h1 className="home-product-cat-tile-heading">
                                        {parse(slide.title)}
                                    </h1>
                                    <p className="max-w-[350px]">
                                        {parse(slide.description)}
                                    </p>
                                    <p className="mt-2">
                                        {slide.links[0].link.type ==
                                        "custom" ? (
                                            <Link
                                                href={slide.links[0].link.url}
                                                className="home-slide-cta inline-block"
                                            >
                                                {slide.links[0].link.label}
                                            </Link>
                                        ) : (
                                            <Link
                                                href={
                                                    slide.links[0].link
                                                        .reference.relationTo ==
                                                    "products"
                                                        ? `/p/${slide.links[0].link.reference.value.slug}`
                                                        : `/c/${slide.links[0].link.reference.value.slug}`
                                                }
                                                className="home-slide-cta inline-block"
                                            >
                                                {slide.links[0].link.label}
                                            </Link>
                                        )}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="autoplay-progress " slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
                <button
                    className="arrow-left swiper-arrow"
                    onClick={handlePrev}
                >
                    <svg
                        width="29"
                        height="50"
                        viewBox="0 0 29 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.7036 44.1667L23.2732 50L-8.74598e-05 25L23.2732 -4.74743e-07L28.7036 5.83334L10.8608 25L28.7036 44.1667Z"
                            fill="white"
                        ></path>
                    </svg>
                </button>
                <button
                    className="arrow-right swiper-arrow"
                    onClick={handleNext}
                >
                    <svg
                        width="29"
                        height="50"
                        viewBox="0 0 29 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 5.83333L5.43043 0L28.7037 25L5.43043 50L0 44.1667L17.8428 25L0 5.83333Z"
                            fill="white"
                        ></path>
                    </svg>
                </button>
            </Swiper>
        </div>
    );
};
