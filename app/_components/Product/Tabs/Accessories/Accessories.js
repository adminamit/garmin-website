import { useState } from "react";
import Navigation from "./Navigation";
import { List } from "./List";

import "@/app/_css/product/accessories.css";
export const Accessories = ({ accessories }) => {
    // const accessories = [
    //     {
    //         id: "accessory-1",
    //         category: {
    //             label: "Apps",
    //             img: "https://res.garmin.com/en/products/010-D1303-01/g/cf-lg.jpg",
    //         },

    //         items: [
    //             {
    //                 title: "<h5>Garmin Connect<sup className='tm-symbol'>™</sup> Mobile</h5>",
    //                 img: "https://res.garmin.com/en/products/010-D1303-01/g/cf-lg.jpg",
    //             },
    //             {
    //                 title: "<h5>Garmin Golf<sup className='tm-symbol'>™</sup></h5>",
    //                 img: "https://res.garmin.com/en/products/010-GOLF-00/g/cf-lg.jpg",
    //             },
    //             {
    //                 title: '<h5>Garmin Connect<sup className="tm-symbol">™</sup> IQ App</h5>',
    //                 img: "https://res.garmin.com/en/products/010-CONIQ-00/g/cf-lg.jpg",
    //             },
    //         ],
    //     },
    //     {
    //         id: "accessory-2",
    //         category: {
    //             label: "Bands",
    //             img: "https://res.garmin.com/en/products/010-11251-A3/v/cf-lg.jpg",
    //         },

    //         items: [
    //             {
    //                 title: "<h5>Quick Release Bands (18 mm), Black/Amp yellow silicone, slate hardware</h5>",
    //                 img: "https://res.garmin.com/en/products/010-11251-A3/v/cf-lg.jpg",
    //             },
    //             {
    //                 title: "<h5>Quick Release Bands (18 mm), Whitestone/Tidal blue, silver hardware</h5>",
    //                 img: "https://res.garmin.com/en/products/010-11251-A4/v/cf-lg.jpg",
    //             },
    //             {
    //                 title: "<h5>Quick Release Bands (18 mm), Pink/Whitestone, silver hardware</h5>",
    //                 img: "https://res.garmin.com/en/products/010-11251-A5/v/cf-lg.jpg",
    //             },
    //         ],
    //     },
    //     {
    //         id: "accessory-3",
    //         category: {
    //             label: "Cables & Chargers",
    //             img: "https://res.garmin.com/en/products/010-12983-00/g/cf-lg-e0097ee9-6040-42cd-9d3f-000c91940afe.jpg",
    //         },

    //         items: [
    //             {
    //                 title: "<h5>HRM-Dual<sup >™</sup></h5>",
    //                 img: "https://res.garmin.com/en/products/010-12883-00/g/cf-lg-c194e83f-b73a-4914-8291-59da69b164df.jpg",
    //             },
    //             {
    //                 title: "<h5>USB-C Plug Charging/Data Cable</h5>",
    //                 img: "https://res.garmin.com/en/products/010-13278-00/g/cf-lg.jpg",
    //             },
    //             {
    //                 title: "<h5>HRM-Pro<sup>™</sup> Plus</h5>",
    //                 img: "https://res.garmin.com/en/products/010-13118-00/g/cf-lg.jpg",
    //             },
    //             {
    //                 title: '<h5>Garmin Connect<sup className="tm-symbol">™</sup> IQ App</h5>',
    //                 img: "https://res.garmin.com/en/products/010-CONIQ-00/g/cf-lg.jpg",
    //             },
    //             {
    //                 title: "<h5>USB-C Plug Charging/Data Cable</h5>",
    //                 img: "https://res.garmin.com/en/products/010-13278-00/g/cf-lg.jpg",
    //             },
    //         ],
    //     },
    //     {
    //         id: "accessory-4",
    //         category: {
    //             label: "Cycling accessories",
    //             img: "https://res.garmin.com/en/products/010-12104-02/g/cf-lg-d8decd34-0b36-4918-a86b-dbe973c523ad.jpg",
    //         },

    //         items: [
    //             {
    //                 title: "<h5>USB-C Plug Charging/Data Cable</h5>",
    //                 img: "https://res.garmin.com/en/products/010-13278-00/g/cf-lg.jpg",
    //             },
    //             {
    //                 title: "<h5>Garmin Golf<sup className='tm-symbol'>™</sup></h5>",
    //                 img: "https://res.garmin.com/en/products/010-GOLF-00/g/cf-lg.jpg",
    //             },
    //             {
    //                 title: '<h5>Garmin Connect<sup className="tm-symbol">™</sup> IQ App</h5>',
    //                 img: "https://res.garmin.com/en/products/010-CONIQ-00/g/cf-lg.jpg",
    //             },
    //         ],
    //     },
    // ];
    const [activeCategory, setActiveCategory] = useState("");
    // const handleActiveCategoryChange = (category) =>{
    //     setActiveCategory()
    // }
    return (
        <div className="app__product__accessories">
            <div className="app__product__accessories-container">
                <div className="app__product__accessories-container-inner">
                    <Navigation
                        accessories={accessories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
                    />
                    <List
                        accessories={accessories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
                    />
                </div>
            </div>
        </div>
    );
};
