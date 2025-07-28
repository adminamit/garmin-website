import React from "react";
import Link from "next/link";
import HtmlParser from "react-html-parser";
import "./index.css";
export const CopyBlock = ({ title, description, link, theme }) => {
    return (
        <div
            className={`base-container base-container__large ${
                theme == "light" ? "light" : "dark"
            } center`}
            locale="en-GB"
        >
            <div id="constraint" className="constraint">
                <h2 className="h2 dark">{title ? HtmlParser(title) : ""}</h2>
                <div className="g__copy g__copy--center g__copy--dark g__copy--intro">
                    <p>{description ? HtmlParser(description) : ""}</p>
                </div>

                {link?.type == "custom" ? (
                    <Link
                        href={link.url}
                        className="cta-button dark normal center"
                    >
                        {link.label}
                    </Link>
                ) : (
                    link?.reference && <Link
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
