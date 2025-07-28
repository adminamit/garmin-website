import React from "react";
import Image from "next/image";
import Link from "next/link";
import HtmlParser from "react-html-parser";
const TwoColumnBlockWrapper = ({ items }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-[1140px] mt-16 mb-8 md:my-16 px-8 lg:px-0">
            {items?.map((item, index) => (
                <div key={index} className="flex flex-col card">
                    <div className="flex-1">
                        {item.image ? (
                            <Image
                                alt="default alt"
                                src={item.image.url}
                                width="160"
                                height="160"
                                className="w-full object-center object-cover"
                                unoptimized
                            />
                        ) : (
                            <Image
                                alt="default alt"
                                src={`/assets/images/225x250px.webp`}
                                width="160"
                                height="160"
                                className="w-full object-center object-cover"
                                quality={100}
                                unoptimized
                            />
                        )}
                    </div>
                    <div className="px-4 py-8">
                        <h2 className="home-product-cat-tile-heading">
                            {item.title ? HtmlParser(item.title) : ""}
                        </h2>
                        <p className="mt-5 text-right">
                            {item.links?.[0]?.link?.type == "custom" ? (
                                <Link
                                    href={item.links[0].link.url}
                                    className="dark-cta mt-5 text-right md:absolute bottom-6 right-4"
                                >
                                    {item.links[0].link.label}
                                </Link>
                            ) : (
                                item.links?.[0]?.link?.reference && <Link
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
