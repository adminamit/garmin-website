import React from "react";
import HtmlParser from "react-html-parser";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./index.css";
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
        <section
            className="series-banner light"
            style={{
                backgroundImage: `url(${image.url})`,
            }}
        >
            <h1 className="series-banner__title">
                <p>MOST POPULAR SMARTWATCHES</p>
            </h1>
            <div className="series-banner__content">
                <div className="series-banner__products" role="presentation">
                    {series.map((el) => {
                        return (
                            <Link
                                className="series-banner__item"
                                href={`${currentPath}?series=${el.id}`}
                            >
                                <Image
                                    alt="default alt"
                                    src={el.image.url}
                                    width="160"
                                    height="160"
                                    className=""
                                />
                                <div
                                    className="item-heading g__heading g__heading--center g__heading--light"
                                    heading-size={3}
                                    text-align="center"
                                    data-testid="g__heading"
                                    theme="light"
                                >
                                    <h3>
                                        <p>{HtmlParser(el.title)}</p>
                                    </h3>
                                </div>
                                <div className="item-description">
                                    <p>{HtmlParser(el.excerpt)}</p>
                                </div>
                                {/**/}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
