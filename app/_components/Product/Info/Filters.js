import React from "react";
import Tooltip from "../../Helpers/Tooltip";
import { AiFillQuestionCircle } from "react-icons/ai";
import Link from "next/link";
import "@/app/_css/product/filters.css";
const Filters = ({ attributes, product }) => {
    return (
        <div id="js__filters-section" className="app__product__filters">
            {attributes.map((attribute) => {
                return (
                    <div className="app__product__filters__group">
                        <div className="app__product__filters__label">
                            <Tooltip
                                title={attribute.title}
                                icon={<AiFillQuestionCircle />}
                                type="product"
                            >
                                <p className="text-sm font-light">
                                    {attribute.text}
                                </p>
                            </Tooltip>
                        </div>
                        <div className="js__filters-wrapper">
                            {attribute.values.map((el) => {
                                return (
                                    <Link
                                        href={`/p/${el.sku}`}
                                        className={`${
                                            el.active
                                                ? "app__product__filters__buttons--selected js__selected"
                                                : ""
                                        } app__product__filters__buttons js__filter-option`}
                                    >
                                        {el.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Filters;
