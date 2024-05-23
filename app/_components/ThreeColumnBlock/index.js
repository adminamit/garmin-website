import React from "react";
import Image from "next/image";
import Link from "next/link";
const ThreeColumnBlockWrapper = ({ items, title }) => {
    return (
        <div className="bg-white py-8 w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                {title ? (
                    <h2 className="text-4xl font-normal text-black mb-10 text-center oswald uppercase">
                        {title}
                    </h2>
                ) : (
                    ""
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group home-product-cat-tile"
                        >
                            <Link href="/">
                                <div className="w-full absolute h-full top-0 left-0">
                                    <Image
                                        alt="default alt"
                                        src={item.image.url}
                                        width="160"
                                        height="160"
                                        className="w-full h-full object-center object-cover"
                                        quality={100}
                                    />
                                </div>
                                <div className="absolute w-full h-full top-0 left-0 gradient-border-dark"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h2 className="home-product-cat-tile-heading">
                                        {item.title}
                                    </h2>
                                    <p className="mt-5">
                                        {item.links[0].link.type == "custom" ? (
                                            <Link
                                                href={item.links[0].link.url}
                                                className="home-product-cat-tile-cta"
                                            >
                                                {item.links[0].link.label}
                                            </Link>
                                        ) : (
                                            <Link
                                                href={
                                                    item.links[0].link.reference
                                                        .relationTo ==
                                                    "products"
                                                        ? `/p/${item.links[0].link.reference.value.slug}`
                                                        : `/c/${item.links[0].link.reference.value.slug}`
                                                }
                                                className="home-product-cat-tile-cta"
                                            >
                                                {item.links[0].link.label}
                                            </Link>
                                        )}
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

export default ThreeColumnBlockWrapper;
