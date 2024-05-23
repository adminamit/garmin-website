import React from "react";
import Image from "next/image";
import Link from "next/link";
const TwoBlockShopTwo = () => {
    const products = [
        {
            title: "INREACH<sup>®</sup> SATELLITE COMMUNICATORS — TWO-WAY MESSAGING FROM THE WILDERNESS",
            image: "/59459-INREACH.jpg",
            link: "/forerunner-series",
            buttonText: "Shop Now",
        },
        {
            title: "SO YOU WANT A SMARTWATCH? FIND YOUR MATCH.",
            image: "/46074-which_watch.webp",
            link: "/instinct-series",
            buttonText: "Shop",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-[1140px] my-16">
            {products.map((product, index) => (
                <div key={index} className="flex flex-col card relative pb-12">
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
                        <p className="mt-5 text-right absolute bottom-6 right-4">
                            <Link href={product.link} className="dark-cta ">
                                {product.buttonText}
                            </Link>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TwoBlockShopTwo;
