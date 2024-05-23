import React from "react";
import { Featured } from "@/app/_components/Featured";
export const FeaturedSlider = ({ featured_slider }) => {
    return (
        <>
            <Featured slides={featured_slider.items} />
        </>
    );
};
