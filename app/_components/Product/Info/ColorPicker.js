import React from "react";
import Tooltip from "../../Helpers/Tooltip";
import Link from "next/link";
import Image from "next/image";
import "@/app/_css/product/color-picker.css";
import { isEqual } from "lodash";
const ColorPicker = ({ models }) => {
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
