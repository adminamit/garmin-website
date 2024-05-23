import React from "react";
import { SwiperSlider } from "@/app/_components/SwiperSlider";
export const HeroSlider = ({ heroSlider }) => {
    return (
        <>
            <SwiperSlider slides={heroSlider.items} />
        </>
    );
};
