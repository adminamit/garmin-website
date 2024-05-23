import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/_css/shop/tile-banner.css";
const TileBanner = ({ banner }) => {
    return (
        <div className="sticky-custom-card-container">
            <Link href={banner.url} className="tile-banner-card text-black">
                <figure className="tile-banner-card__wrapper">
                    <div className="tile-banner-card__image-container">
                        <Image
                            className="tile-banner-card__image"
                            src={banner.img}
                            width={0}
                            height={0}
                            unoptimized
                            alt={banner.title}
                        />
                    </div>
                    <div className="tile-banner-card__gradient gradient"></div>
                    <figcaption className="tile-banner-card__description">
                        <div
                            className={`tile-banner-card__description__title ${banner.align}`}
                        >
                            <h3>{banner.title}</h3>
                        </div>
                        <div
                            className={`tile-banner-card__description__copy ${banner.align}`}
                        >
                            {banner.description}
                        </div>
                    </figcaption>
                </figure>
            </Link>
        </div>
    );
};

export default TileBanner;
