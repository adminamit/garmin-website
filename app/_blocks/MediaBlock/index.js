import React from "react";
import HtmlParser from "react-html-parser";
import { serialize } from "@/app/_utilities/GenerateHTML";
import "./index.css";
export const MediaBlock = ({ heading, text, media, imagePosition }) => {
    return (
        <div className="container__spotlight__inner large">
            <div
                className={`g__spotlight g__spotlight--light g__spotlight--width-60-40 g__spotlight--img-${
                    imagePosition === "left" ? "left" : "right"
                }`}
            >
                <div className="media">
                    <img src={media?.url} alt={media?.alt} />
                </div>
                <div className="body">
                    <div className="g__heading g__heading--left g__heading--light">
                        <h2>{heading ? HtmlParser(heading) : ""}</h2>
                    </div>

                    <p className="g__copy g__copy--left g__copy--light g__copy--primary">
                        {/**/}
                        <div>
                            <p>{text ? serialize(text) : ""}</p>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};
