import React from "react";
import Image from "next/image";
import Link from "next/link";
const TwoBlockShopOne = () => {
    const products = [
        {
            title: "TRAIN BRILLIANTLY WITH OUR BRIGHTEST RUNNING SMARTWATCHES EVER — FORERUNNER<sup>®</sup> 965 AND FORERUNNER 265 SERIES",
            image: "/Forerunner-265-965-Card.webp",
            link: "/forerunner-series",
        },
        {
            title: "STAND OUT WITH A RUGGED DESIGN, PLUS OPTIONAL SOLAR CHARGING AND BUILT-IN FLASHLIGHT ON THE INSTINCT® 2 SERIES",
            image: "/55972-Instinct-2X-Solar.webp",
            link: "/instinct-series",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-[1140px] my-24">
            {products.map((product, index) => (
                <div key={index} className="flex flex-col card">
                    <div className="flex-1">
                        <Image
                            alt="default alt"
                            src={`/assets/images${product.image}`}
                            width="160"
                            height="160"
                            className="w-full object-center object-cover"
                        />
                    </div>
                    <div className="px-4 py-8">
                        <h2 className="home-product-cat-tile-heading">
                            {product.title}
                        </h2>
                        <p className="mt-5 text-right">
                            <Link href={product.link} className="dark-cta">
                                SHOP Now
                            </Link>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TwoBlockShopOne;
