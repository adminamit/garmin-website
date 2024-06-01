import React from "react";
import Image from "next/image";
import HtmlParser from "react-html-parser";
export const Feature = ({ image, heading, title, description, align }) => {
    return (
        <div
            className={`app__feature__card ${
                align == "left" ? "app__feature__card--left" : ""
            }`}
        >
            <Image
                src={image.url}
                width={0}
                height={0}
                className="app__feature__card__image"
                unoptimized
                alt={image.alt}
            />
            {heading ? (
                <h3
                    className={`app__feature__card__title ${
                        align == "left" ? "app__feature__card__title--left" : ""
                    }`}
                >
                    {HtmlParser(heading)}
                </h3>
            ) : (
                " "
            )}
            {title ? (
                <h3
                    className={`app__feature__card__title app__feature__card__title--small ${
                        align == "left" ? "app__feature__card__title--left" : ""
                    }`}
                >
                    {HtmlParser(title)}
                </h3>
            ) : (
                " "
            )}
            {description ? (
                <p className="app__feature__card__description">
                    {HtmlParser(description)}
                </p>
            ) : (
                ""
            )}
        </div>
    );
};
