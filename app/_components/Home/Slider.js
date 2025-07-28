import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import parse from "html-react-parser";

export const Slider = () => {
    const slides = [
        {
            title: "EPIX<sup>™</sup> PRO AND FĒNIX<sup>®</sup> 7 PRO</h1>",
            subtitle: "The quest for excellence has reached its highest form",
            image: "/60445-homeBanner-lg.jpg",
            link: "/forerunner-series",
            buttonText: "Learn More",
        },
        {
            title: "LILY<sup>®</sup> 2 SERIES",
            subtitle: "The small, stylish smartwatch",
            image: "/62873-homebanner-lg.webp",
            link: "/instinct-series",
            buttonText: "Learn More",
        },
    ];
    return (
        <div className="bg-white w-full">
            <div className="slider-wrapper">
                <div className="grid grid-cols-1">
                    {slides.map((slide) => (
                        <div
                            key={slide.title}
                            className="group home-slide-item"
                        >
                            <Link href="/" className="w-full">
                                <div className="w-full absolute h-full top-0 left-0">
                                    <Image
                                        alt="default alt"
                                        src={`/assets/images${slide.image}`}
                                        width="160"
                                        height="160"
                                        className="w-full h-full object-center object-cover"
                                        quality={100}
                                    />
                                </div>
                                <div className="absolute w-full h-full top-0 left-0 gradient-border-dark"></div>
                                <div className="slide-content relative text-white flex flex-col gap-8">
                                    <h1 className="home-product-cat-tile-heading">
                                        {slide.title ? parse(slide.title) : ""}
                                    </h1>
                                    <p className="max-w-[350px]">
                                        {slide.subtitle ? parse(slide.subtitle) : ""}
                                    </p>
                                    <p className="mt-2">
                                        <Link
                                            href={slide.link}
                                            className="home-slide-cta inline-block"
                                        >
                                            {slide.buttonText}
                                        </Link>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
