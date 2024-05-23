import React from "react";
import Image from "next/image";
import HtmlParser from "react-html-parser";
import "@/app/_css/product/lifestyle.css";
export const LifeStyle = ({
    desktopImg,
    mobileImg,
    text,
    // verticalAlign,
    // horizontalAlign,
    theme,
    position,
    title,
    description,
    image,
}) => {
    let horizontalAlign,
        verticalAlign = "";
    switch (position) {
        case "centerRight":
            verticalAlign = "middle";
            horizontalAlign = "right";
            break;
        case "topLeft":
            verticalAlign = "top";
            horizontalAlign = "left";
            break;
        case "topCenter":
            verticalAlign = "top";
            horizontalAlign = "center";
            break;
        case "topRight":
            verticalAlign = "top";
            horizontalAlign = "right";
            break;
        case "centerLeft":
            verticalAlign = "middle";
            horizontalAlign = "left";
            break;
        case "centerCenter":
            verticalAlign = "middle";
            horizontalAlign = "center";
            break;
        case "centerRight":
            verticalAlign = "middle";
            horizontalAlign = "right";
            break;
        case "bottomLeft":
            verticalAlign = "bottom";
            horizontalAlign = "left";
            break;
        case "bottomCenter":
            verticalAlign = "bottom";
            horizontalAlign = "center";
            break;
        case "bottomRight":
            verticalAlign = "bottom";
            horizontalAlign = "right";
        default:
            break;
    }
    return (
        <div
            className={`app__life-style app__life-style--${theme}`}
            title=""
            href=""
            data-translate=""
            img-width=""
        >
            <div className="app__img-banner app__life-style__img-con">
                <Image
                    className="app__img-banner__img app__img-banner__img--desktop"
                    src={image.url}
                    alt={title}
                    width={0}
                    height={0}
                    unoptimized
                />
                {/* <Image
                    className="app__img-banner__img app__img-banner__img--mobile"
                    src={mobileImg}
                    alt=""
                    width={0}
                    height={0}
                    unoptimized
                /> */}
            </div>
            <div
                className={`app__life-style__text__con app__life-style__text__con--${horizontalAlign} app__life-style__text__con--${verticalAlign} app__life-style__text__con__mobile--center app__life-style__text__con__mobile--middle`}
            >
                <h2
                    className={`app__headline app__headline--dark app__headline--${horizontalAlign} app__headline--mobile--center`}
                >
                    <span
                        className="app__headline__container"
                        style={{ "font-size": "5rem" }}
                    >
                        <span className="app__headline__primary-text">
                            {HtmlParser(title)}
                        </span>
                        <span className="app__headline__secondary-text">
                            {HtmlParser(description)}
                        </span>
                    </span>
                </h2>
            </div>
        </div>
    );
};
