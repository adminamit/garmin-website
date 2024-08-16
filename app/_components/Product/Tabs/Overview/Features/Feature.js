import React from "react";
import Image from "next/image";
import HtmlParser from "react-html-parser";
export const Feature = ({
    image,
    heading,
    title,
    description,
    align,
    headingSize,
}) => {
    return (
        <div
            className={`app__feature__card ${
                align == "left" ? "app__feature__card--left" : ""
            }`}
        >
            {image ? (
                <Image
                    src={image.url}
                    width={0}
                    height={0}
                    className="app__feature__card__image !max-h-[250px] object-contain"
                    unoptimized
                    alt={image.alt}
                />
            ) : (
                <Image
                    alt="default alt"
                    src={`/assets/images/225x250px.webp`}
                    width="160"
                    height="160"
                    className={`app__feature__card__image ${
                        headingSize == "small"
                            ? "!max-h-[50px]"
                            : "!max-h-[250px]"
                    } object-contain`}
                    quality={100}
                    unoptimized
                />
            )}
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
                    className={`app__feature__card__title ${
                        headingSize == "small"
                            ? "app__feature__card__title--small"
                            : ""
                    } ${
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
