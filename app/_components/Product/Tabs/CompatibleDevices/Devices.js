import React from "react";
import Device from "./Device";
import "@/app/_css/product/devices.css";
export const Devices = ({ products }) => {
    const devices = [
        {
            id: "873214",
            title: '<h4>Approach<sup className="registered-symbol">®</sup> CT10 Full Set</h4>',
            img: "https://res.garmin.com/en/products/010-01994-00/g/cf-lg-ba21fc37-42fb-409c-a22c-1f699557899b.jpg",
            url: "#",
        },
        {
            id: "873214",
            title: '<h4>Rally<sup className="tm-symbol">™</sup> RK100</h4>',
            img: "https://res.garmin.com/en/products/010-02388-01/g/cf-lg-40f31f35-e839-45e3-b1b9-1c21c2ed463f.jpg",
            url: "#",
        },
        {
            id: "873214",
            title: '<h4>Rally<sup className="tm-symbol">™</sup> RK200</h4>',
            img: "https://res.garmin.com/en/products/010-02388-01/g/cf-lg-40f31f35-e839-45e3-b1b9-1c21c2ed463f.jpg",
            url: "#",
        },
        {
            id: "873214",
            title: '<h4>Rally<sup className="tm-symbol">™</sup> RS100</h4>',
            img: "https://res.garmin.com/en/products/010-02388-01/g/cf-lg-40f31f35-e839-45e3-b1b9-1c21c2ed463f.jpg",
            url: "#",
        },
        {
            id: "873214",
            title: '<h4>Rally<sup className="tm-symbol">™</sup> RS200</h4>',
            img: "https://res.garmin.com/en/products/010-02388-01/g/cf-lg-40f31f35-e839-45e3-b1b9-1c21c2ed463f.jpg",
            url: "#",
        },
        {
            id: "873214",
            title: '<h4>Rally<sup className="tm-symbol">™</sup> XC100</h4>',
            img: "https://res.garmin.com/en/products/010-02388-05/g/cf-lg-7c8456de-7cc4-4cc6-9379-7833b51cc0fc.jpg",
            url: "#",
        },
        {
            id: "873214",
            title: '<h4>Tacx<sup className="registered-symbol">®</sup> FLUX S Smart Trainer</h4>',
            img: "https://res.garmin.com/en/products/T2900S/g/cf-lg-fd48e6a8-2fc5-4dad-a73a-38df92cee97a.jpg",
            url: "#",
        },
        {
            id: "873214",
            title: '<h4>Tacx<sup className="registered-symbol">®</sup> NEO Bike Plus Trainer</h4>',
            img: "https://res.garmin.com/en/products/010-02534-60/g/cf-lg.jpg",
            url: "#",
        },
        {
            id: "873214",
            title: '<h4>Varia<sup className="tm-symbol">™</sup> eRTL615</h4>',
            img: "https://res.garmin.com/en/products/010-02788-00/g/cf-lg.jpg",
            url: "#",
        },
        {
            id: "873214",
            title: '<h4>Rally<sup className="tm-symbol">™</sup> RS100</h4>',
            img: "https://res.garmin.com/en/products/010-02388-01/g/cf-lg-40f31f35-e839-45e3-b1b9-1c21c2ed463f.jpg",
            url: "#",
        },
    ];
    return (
        <div className="app__product__devices">
            <div className="app__product__devices__container">
                {products.map((device) => {
                    return <Device device={device} key={device.id} />;
                })}
            </div>
        </div>
    );
};
