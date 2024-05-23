import React from "react";
import Image from "next/image";
import Link from "next/link";
const Posts = () => {
    const categories = [
        {
            name: "MONITOR PATIENTS WITH GARMIN HEALTH",
            image: "/GarminHealth-Tile.webp",
            link: "/wearables",
        },
        {
            name: "WHICH MARINE PRODUCTS ARE RIGHT FOR YOU?",
            image: "/48987-3rd-width-tile-blue-Marine-System-Builder.webp",
            link: "/automotive",
        },
        {
            name: "BROWSE WEARABLES FOR WOMEN",
            image: "/46074-womens_wearables.webp",
            link: "/sports-fitness",
        },
    ];

    return (
        <div className="bg-white w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                {/* <h2 className="text-4xl font-normal text-black text-center oswald">
                    ALL PRODUCTS
                </h2> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="group home-product-cat-tile"
                        >
                            <Link href="/">
                                <div className="w-full absolute h-full top-0 left-0">
                                    <Image
                                        alt="default alt"
                                        src={`/assets/images${category.image}`}
                                        width="160"
                                        height="160"
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <div className="absolute w-full h-full top-0 left-0 gradient-border-dark"></div>
                                <div className="absolute bottom-8 left-8 text-white pr-8">
                                    <h2 className="home-product-cat-tile-heading">
                                        {category.name}
                                    </h2>
                                    <p className="mt-5">
                                        <Link
                                            href={category.link}
                                            className="home-product-cat-tile-cta"
                                        >
                                            Learn More
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

export default Posts;
