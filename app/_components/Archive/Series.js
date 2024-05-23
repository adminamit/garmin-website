import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "react-html-parser";
const Series = () => {
    const watches = [
        {
            name: "Venu<sup>®</sup>",
            description: "Style and design meet health and wellness.",
            image: "/EMEA-64104-Ven3.png",
            url: "#",
        },
        {
            name: "Forerunner<sup>®</sup>",
            description: "For any reason to run.",
            image: "/51901-wearables-banner-FR965.webp",
            url: "#",
        },
        {
            name: "<p>Instinct<sup >®</sup></p>",
            description: "Keep it bold, rugged and ready for adventure.",
            image: "/wearables-banner-INS-update.webp",
            url: "#",
        },
        {
            name: "Venu<sup>®</sup>",
            description: "Style and design meet health and wellness.",
            image: "/EMEA-64104-Ven3.png",
            url: "#",
        },
        {
            name: "Forerunner<sup>®</sup>",
            description: "For any reason to run.",
            image: "/51901-wearables-banner-FR965.webp",
            url: "#",
        },
        {
            name: "<p>Instinct<sup >®</sup></p>",
            description: "Keep it bold, rugged and ready for adventure.",
            image: "/wearables-banner-INS-update.webp",
            url: "#",
        },
        // Add the rest of the watches following the same structure
    ];

    return (
        <div
            className="w-full bg-center bg-cover block bg-[#f2f2f2]"
            style={{
                backgroundImage:
                    "url('https://static.garmincdn.com/en_US/store/wearables/subcategory/2020/36340-wearables-banner-background.jpg')",
            }}
        >
            <div className="w-full mx-auto ">
                <h1 className="py-[1.5em] px-[1em] text-[2.5rem] oswald text-center tracking-wider">
                    <p>MOST POPULAR SMARTWATCHES</p>
                </h1>
                <div className="flex series-banner-content">
                    {watches.map((watch) => (
                        <Link
                            href={watch.url}
                            key={watch.name}
                            className="text-center max-w-[240px] px-4"
                        >
                            <div className="series-image w-full">
                                <Image
                                    alt="default alt"
                                    src={`/assets/images${watch.image}`}
                                    width="160"
                                    height="160"
                                    className=" h-full object-center object-cover w-[240px]"
                                />
                            </div>
                            <h3 className="font-normal oswald my-4 leading-[1.25] tracking-wider text-2xl">
                                {parse(watch.name)}
                            </h3>
                            <p className="my-4">{parse(watch.description)}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Series;
