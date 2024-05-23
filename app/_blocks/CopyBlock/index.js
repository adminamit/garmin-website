import React from "react";
import Link from "next/link";
import HtmlParser from "react-html-parser";
import "./index.css";
export const CopyBlock = ({ title, description, link }) => {
    return (
        <div
            className="base-container base-container__large dark center"
            locale="en-GB"
        >
            <div id="constraint" className="constraint">
                <h2 className="h2 dark">{HtmlParser(title)}</h2>
                <div className="g__copy g__copy--center g__copy--dark g__copy--intro">
                    <p>{HtmlParser(description)}</p>
                </div>

                {link.type == "custom" ? (
                    <Link
                        href={link.url}
                        className="cta-button dark normal center"
                    >
                        {link.label}
                    </Link>
                ) : (
                    <Link
                        href={
                            link.reference.relationTo == "products"
                                ? `/p/${link.reference.value.slug}`
                                : `/c/${link.reference.value.slug}`
                        }
                        className="cta-button dark normal center"
                    >
                        {link.label}
                    </Link>
                )}
            </div>
        </div>
    );
};
