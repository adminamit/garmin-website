import React from "react";
import Image from "next/image";
import Link from "next/link";
import HtmlParser from "react-html-parser";
const Device = ({ device }) => {
    return (
        <div className="app__product__devices__section">
            <Link
                className="app__product__devices__section__link"
                href={`/p/${device.sku}`}
                data-ua-event="Product Page Accessories Tab, Compatible Devices, 605172 + Approach® CT10 Full Set"
            >
                <div className="app__product__devices__section__card app__product__devices__section__drop-shadow">
                    <div className="app__product__devices__section__card-content">
                        <Image
                            src={device.featuredImageUrl}
                            alt={device.title}
                            width="130"
                            height="130"
                        />
                        <div className="app__product__devices__section__card-content__heading g__heading g__heading--center g__heading--light">
                            {device.title ? HtmlParser(device.title) : ""}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Device;
