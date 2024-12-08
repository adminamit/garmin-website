"use client";
import { Fragment, useEffect, useState, useRef } from "react";
import { Tab } from "@headlessui/react";
import Sidebar from "../Sidebar/Sidebar";
import "@/app/_css/product/tabs.css";
import { Overview } from "./Overview/Overview";
import Specs from "./Specs/Specs";
import { Devices } from "./CompatibleDevices/Devices";
import BoxContent from "./InTheBox/BoxContent";
import { Accessories } from "./Accessories/Accessories";
import { isEmpty, compact } from "lodash";
const Tabs = ({ tabsData }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tabReference = useRef(null);
    // const scroll = useScroll();

    const navListItems = [
        tabsData.overviewJson && tabsData.overviewJson.length > 0 ? (
            {
                id: "overview",
                label: "Overview",
                content: (
                    <Overview
                        overviewBlocks={JSON.parse(tabsData.overviewJson)}
                    />
                ),
            }
        ) : (
            <></>
        ),
        tabsData.productSpecifications.specificationGroup.length > 0 ? (
            {
                id: "specs",
                label: "Specs",
                content: (
                    <Specs
                        productSpecifications={
                            tabsData.productSpecifications.specificationGroup
                        }
                    />
                ),
            }
        ) : (
            <></>
        ),
        tabsData.inTheBox ? (
            {
                id: "inthebox",
                label: "In the Box",
                content: <BoxContent content={tabsData.inTheBox} />,
            }
        ) : (
            <></>
        ),
        tabsData.compatibleProducts &&
        tabsData.compatibleProducts.length > 0 ? (
            {
                id: "devices",
                label: "Compatible Devices",
                content: <Devices products={tabsData.compatibleProducts} />,
            }
        ) : (
            <></>
        ),
        tabsData.productAccessories.accessory &&
        tabsData.productAccessories.accessory.length > 0 ? (
            {
                id: "accessories",
                label: "Accessories",
                content: (
                    <Accessories
                        accessories={tabsData.productAccessories.accessory}
                    />
                ),
            }
        ) : (
            <></>
        ),
    ];

    const handleTabChange = (index) => {
        setSelectedIndex(index);
        tabReference.current.scrollIntoView();
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
                                return item.id ? (
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
                                ) : (
                                    <></>
                                );
                            })}
                        </ul>
                    </Tab.List>
                </div>
                <Tab.Panels>
                    <div
                        className="app__tabs__content_wrapper"
                        id="app__tabs__content_wrapper"
                        ref={tabReference}
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
                                return item.id ? (
                                    <Tab.Panel
                                        className={`app__tabs__content__main app__tabs__content__${item.id}`}
                                        key={item.id}
                                    >
                                        <div className="app__tabs__content__wrap">
                                            {item.content}
                                        </div>
                                    </Tab.Panel>
                                ) : (
                                    <></>
                                );
                            })}
                            <Sidebar
                                full={selectedIndex == 0 ? true : false}
                                tabsData={tabsData}
                            />
                        </div>
                    </div>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Tabs;
