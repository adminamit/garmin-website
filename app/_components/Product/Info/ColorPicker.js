import React from "react";
import Tooltip from "../../Helpers/Tooltip";
import Link from "next/link";
import Image from "next/image";
import "@/app/_css/product/color-picker.css";
import { isEqual } from "lodash";
const ColorPicker = ({ models }) => {
    const colorOptions = [
        {
            id: "010-02582-21",
            img: "https://res.garmin.com/en/products/010-02582-21/v/cf-sm-0ec329b8-43ec-44e7-8936-726b323bf8db.jpg",
            url: "/p/760778/pn/010-02582-21",
            active: false,
        },
        {
            id: "010-02582-22",
            img: "https://res.garmin.com/en/products/010-02582-11/v/cf-sm-0ce2081e-72db-4b5c-b857-8353cd70cd23.jpg",
            url: "/p/760778/pn/010-02582-21",
            active: true,
        },
        {
            id: "010-02582-23",
            img: "https://res.garmin.com/en/products/010-02582-30/v/cf-sm-b777fbce-441f-4123-b7f3-ed6b5590c9b0.jpg",
            url: "/p/760778/pn/010-02582-21",
            active: true,
        },
        {
            id: "010-02582-24",
            img: "https://res.garmin.com/en/products/010-02803-11/v/cf-sm.jpg",
            url: "/p/760778/pn/010-02582-21",
            active: true,
        },
        {
            id: "010-02582-25",
            img: "https://res.garmin.com/en/products/010-02803-01/v/cf-sm.jpg",
            url: "/p/760778/pn/010-02582-21",
            active: false,
        },
    ];
    return (
        <div className="app__color__picker js__filters-wrapper">
            <div className="app__color__picker__title">
                <Tooltip title="Model/Colour" icon="" type="product">
                    <></>
                </Tooltip>
            </div>
            <ul className="app__color__picker__list">
                {models.map((model) => {
                    return (
                        <li className="app__color__picker__item" key={model.id}>
                            {/* {JSON.stringify(model.activeAttributes)}
                            {JSON.stringify(model.attributes)}
                            {JSON.stringify(
                                isEqual(
                                    model.activeAttributes,
                                    model.attributes
                                )
                            )} */}
                            <Link
                                className={`app__color__picker__link js__filter-option ${
                                    model.active
                                        ? "app__color__picker__link__active"
                                        : ""
                                } ${
                                    model.current
                                        ? "app__color__picker__link__selected"
                                        : ""
                                }`}
                                href={`/p/${model.sku}`}
                            >
                                <Image
                                    src={model.image}
                                    alt="010-02582-21"
                                    width={0}
                                    height={0}
                                    unoptimized
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ColorPicker;
