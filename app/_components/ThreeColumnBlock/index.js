import React from "react";
import Image from "next/image";
import Link from "next/link";
import HtmlParser from "react-html-parser";
const ThreeColumnBlockWrapper = ({ items, title, align, columns }) => {
    return (
        <div className="bg-white py-5 w-full">
            <div className="mx-auto px-4 sm:px-4 lg:px-4">
                {title ? (
                    <h2 className="text-4xl font-normal text-black mb-10 text-center oswald uppercase">
                        {HtmlParser(title)}
                    </h2>
                ) : (
                    ""
                )}
                <div
                    className={`grid grid-cols-1 sm:grid-cols-${columns} md:grid-cols-${columns} gap-4`}
                >
                    {items.map((item) => {
                        let urlData = " ";
                        if (item.link.type == "custom") {
                            urlData = {
                                url: item.link.url,
                                label: item.link.label,
                            };
                        } else {
                            const urlActive =
                                item.link.reference.relationTo == "products"
                                    ? `/p/${item.link.reference.value.slug}`
                                    : `/c/${item.link.reference.value.slug}`;
                            urlData = {
                                url: urlActive,
                                label: item.link.label,
                            };
                        }
                        return (
                            <div
                                key={item.id}
                                className={`group home-product-cat-tile flex items-end relative ${
                                    align == "align-center"
                                        ? "justify-center text-center"
                                        : align == "align-right"
                                        ? "justify-end text-right"
                                        : "justify-start text-left"
                                }`}
                            >
                                <Link href={urlData.url} className="">
                                    <div className="w-full absolute h-full top-0 left-0">
                                        <Image
                                            alt="default alt"
                                            src={item.image.url}
                                            width="400"
                                            height="400"
                                            className="w-full h-full object-center object-cover"
                                            quality={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="absolute w-full h-full top-0 left-0 gradient-border-dark"></div>
                                    <div className="text-white relative  pb-5">
                                        <h2 className="home-product-cat-tile-heading uppercase">
                                            {HtmlParser(item.title)}
                                        </h2>
                                        <p className="font-light text-base">
                                            {HtmlParser(item.description)}
                                        </p>
                                        {urlData.label ? (
                                            <p className="mt-5">
                                                <Link
                                                    href={urlData.url}
                                                    className="home-product-cat-tile-cta"
                                                >
                                                    {urlData.label}
                                                </Link>
                                            </p>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ThreeColumnBlockWrapper;
