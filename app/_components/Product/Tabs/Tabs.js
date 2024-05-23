"use client";
import { Fragment, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Sidebar from "../Sidebar/Sidebar";
import "@/app/_css/product/tabs.css";
import { Overview } from "./Overview/Overview";
import Specs from "./Specs/Specs";
import { Devices } from "./CompatibleDevices/Devices";
import BoxContent from "./InTheBox/BoxContent";
import { Accessories } from "./Accessories/Accessories";
const Tabs = ({ productData }) => {
    // useEffect(() => {
    //     const getPData = async () => {
    //         const res = await fetch(
    //             `${process.env.NEXT_PUBLIC_SERVER_URL}/api/product/${orderID}?depth=1`
    //         );
    //     }
    // })
    // console.log("sdfddsf");
    // console.log(productData.productAccessories.accessory);
    const [selectedIndex, setSelectedIndex] = useState(0);
    // const scroll = useScroll();
    const navListItems = [
        {
            id: "overview",
            label: "Overview",
            content: <Overview productData={productData} />,
        },
        {
            id: "specs",
            label: "Specs",
            content: productData.productSpecifications ? (
                <Specs
                    productSpecifications={
                        productData.productSpecifications.specificationGroup
                    }
                />
            ) : (
                <></>
            ),
        },
        {
            id: "inthebox",
            label: "In the Box",
            content: productData.inTheBox ? (
                <BoxContent content={productData.inTheBox} />
            ) : (
                <></>
            ),
        },
        {
            id: "accessories",
            label: "Accessories",
            content: productData.productAccessories ? (
                <Accessories
                    accessories={productData.productAccessories.accessory}
                />
            ) : (
                <></>
            ),
        },
        {
            id: "devices",
            label: "Compatible Devices",
            content: productData.compatibleProducts ? (
                <Devices products={productData.compatibleProducts} />
            ) : (
                <></>
            ),
        },
    ];

    const handleTabChange = (index) => {
        setSelectedIndex(index);
    };
    return (
        <div className="">
            <Tab.Group
                selectedIndex={selectedIndex}
                onChange={(index) => handleTabChange(index)}
            >
                <div className="product__tabs__nav">
                    <Tab.List as={Fragment}>
                        <ul className="product__tabs__nav__list">
                            {navListItems.map((item) => {
                                return (
                                    <div
                                        className="product__subnav__item tabs__list__item"
                                        key={item.id}
                                    >
                                        <Tab as={Fragment} key={item.id}>
                                            {({ selected }) => (
                                                <li
                                                    id={`tabs__nav__${item.id}`}
                                                    className={`product__subnav__link ${
                                                        selected
                                                            ? "product__subnav__link--active"
                                                            : ""
                                                    }`}
                                                >
                                                    {item.label}
                                                </li>
                                            )}
                                        </Tab>
                                    </div>
                                );
                            })}
                        </ul>
                    </Tab.List>
                </div>
                <Tab.Panels>
                    <div
                        className="app__tabs__content_wrapper"
                        id="app__tabs__content_wrapper"
                    >
                        <div
                            className={`${
                                selectedIndex == 0
                                    ? "app__tabs__content__full"
                                    : "app__tabs__content"
                            } ${
                                selectedIndex == 3 || selectedIndex == 4
                                    ? "sidebar__hidden"
                                    : ""
                            }`}
                        >
                            {navListItems.map((item) => {
                                return (
                                    <Tab.Panel
                                        className={`app__tabs__content__main app__tabs__content__${item.id}`}
                                        key={item.id}
                                    >
                                        <div className="app__tabs__content__wrap">
                                            {item.content}
                                        </div>
                                    </Tab.Panel>
                                );
                            })}
                            <Sidebar
                                full={selectedIndex == 0 ? true : false}
                                productData={productData}
                            />
                        </div>
                    </div>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Tabs;
