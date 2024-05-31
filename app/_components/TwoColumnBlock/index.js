import React from "react";
import Image from "next/image";
import Link from "next/link";
import HtmlParser from "react-html-parser";
const TwoColumnBlockWrapper = ({ items }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-[1140px] my-16">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col card">
                    <div className="flex-1">
                        <Image
                            alt="default alt"
                            src={item.image.url}
                            width="160"
                            height="160"
                            className="w-full object-center object-cover"
                        />
                    </div>
                    <div className="px-4 py-8">
                        <h2 className="home-product-cat-tile-heading">
                            {HtmlParser(item.title)}
                        </h2>
                        <p className="mt-5 lg:text-right">
                            {item.links[0].link.type == "custom" ? (
                                <Link
                                    href={item.links[0].link.url}
                                    className="dark-cta mt-5 text-right md:absolute bottom-6 right-4"
                                >
                                    {item.links[0].link.label}
                                </Link>
                            ) : (
                                <Link
                                    href={
                                        item.links[0].link.reference
                                            .relationTo == "products"
                                            ? `/p/${item.links[0].link.reference.value.slug}`
                                            : `/c/${item.links[0].link.reference.value.slug}`
                                    }
                                    className="dark-cta mt-5 text-right md:absolute bottom-6 right-4"
                                >
                                    {item.links[0].link.label}
                                </Link>
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TwoColumnBlockWrapper;
