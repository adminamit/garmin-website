import React from "react";
import Image from "next/image";
import Link from "next/link";
const FullGrid1 = () => {
    const categories = [
        {
            name: "RIDE CONNECTED WITH BIKE COMPUTERS, RADAR AND POWER METERS",
            image: "/59880-LONG-POD.jpg",
            link: "/wearables",
        },
        {
            name: "YOUR CUSTOM SMARTWATCH IS WAITING",
            image: "/50725-POD.webp",
            link: "/wearables",
        },
    ];

    return (
        <div className="bg-white my-8 w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4">
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
                                        unoptimized
                                    />
                                </div>
                                <div className="absolute w-full h-full top-0 left-0 gradient-border-dark"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h2 className="home-product-cat-tile-heading">
                                        {category.name}
                                    </h2>
                                    <p className="mt-5">
                                        <Link
                                            href={category.link}
                                            className="home-product-cat-tile-cta "
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

export default FullGrid1;
