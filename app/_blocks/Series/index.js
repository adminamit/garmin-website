import React from "react";
import HtmlParser from "react-html-parser";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
async function getSeriesData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LIVE_URL}/api/series/`);
    return res.json();
}

export const Series = async ({ title, image }) => {
    const currentPath = usePathname();
    let series = [];
    series = await getSeriesData();
    // series = fetchSeries;

    return (
        <>
            <div
                className="w-full bg-center bg-cover block bg-[#f2f2f2]"
                style={{
                    backgroundImage: `url(${image.url})`,
                }}
            >
                <div className="w-full mx-auto ">
                    <h1 className="py-[1.5em] px-[1em] text-[2.5rem] oswald text-center tracking-wider">
                        <p>{HtmlParser(title)}</p>
                    </h1>
                    <div className="flex series-banner-content">
                        {series.map((el) => (
                            <Link
                                href={`${currentPath}?series=${el.id}`}
                                key={el.id}
                                className="text-center max-w-[240px] px-4"
                            >
                                <div className="series-image w-full">
                                    <Image
                                        alt="default alt"
                                        src={el.image.url}
                                        width="160"
                                        height="160"
                                        className=" h-full object-center object-cover w-[240px]"
                                    />
                                </div>

                                <h3 className="font-normal oswald my-4 leading-[1.25] tracking-wider text-2xl">
                                    {HtmlParser(el.title)}
                                </h3>
                                <p className="my-4">{HtmlParser(el.excerpt)}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
