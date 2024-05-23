import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProductCategoryGrid = () => {
    const categories = [
        {
            name: "WEARABLES",
            image: "/46074-wearables.webp",
            link: "/wearables",
        },
        {
            name: "AUTOMOTIVE",
            image: "/46074-automotive.webp",
            link: "/automotive",
        },
        {
            name: "SPORTS & FITNESS",
            image: "/46074-sports_and_fitness.webp",
            link: "/sports-fitness",
        },
        {
            name: "OUTDOOR RECREATION",
            image: "/46074-outdoor_recreation.jpg",
            link: "/outdoor-recreation",
        },
        { name: "MARINE", image: "/46074-marine.webp", link: "/marine" },
        { name: "AVIATION", image: "/46074-aviation.webp", link: "/aviation" },
    ];

    return (
        <div className="bg-white py-8 w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-normal text-black mb-10 text-center oswald">
                    ALL PRODUCTS
                </h2>
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
                                        quality={100}
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
                                            SHOP
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

export default ProductCategoryGrid;
