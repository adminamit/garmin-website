import React from "react";
import Tooltip from "../../Helpers/Tooltip";
import { AiFillQuestionCircle } from "react-icons/ai";
import Link from "next/link";
import "@/app/_css/product/filters.css";
const Filters = () => {
    return (
        <div id="js__filters-section" className="app__product__filters">
            <div className="app__product__filters__group">
                <div className="app__product__filters__label">
                    <Tooltip
                        title="Case Size"
                        icon={<AiFillQuestionCircle />}
                        type="product"
                    >
                        <p className="text-sm font-light">
                            Represents the diameter of the watch housing.
                            <br />
                            The 47 mm Pro and 51 mm Solar options include a
                            flashlight and multiband GPS
                        </p>
                    </Tooltip>
                </div>
                <div className="js__filters-wrapper">
                    <Link
                        href="/p/735548/pn/010-02539-21"
                        className="app__product__filters__buttons--selected js__selected app__product__filters__buttons js__filter-option"
                    >
                        42 mm
                    </Link>

                    <Link
                        href="/p/735611/pn/010-02540-01"
                        className="app__product__filters__buttons js__filter-option"
                    >
                        47 mm
                    </Link>
                    <Link
                        href="/p/735611/pn/010-02540-01"
                        className="app__product__filters__buttons js__filter-option"
                    >
                        47 mm
                    </Link>
                </div>
            </div>
            <div className="app__product__filters__group">
                <div className="app__product__filters__label">
                    <Tooltip
                        title="Edition"
                        icon={<AiFillQuestionCircle />}
                        type="product"
                    >
                        <p className="text-sm font-light">
                            Solar editions have Power Glass lenses that harvest
                            solar energy. Sapphire Solar editions have Power
                            Sapphire lenses that harvest solar energy,
                            multi-band technology and come preloaded with
                            TopoActive maps.
                            <br />
                            Pro models include premium features like a next
                            generation heart rate sensor and built-in flashlight
                            in all three case sizes.
                        </p>
                    </Tooltip>
                </div>
                <div className="js__filters-wrapper">
                    <Link
                        href="/p/735548/pn/010-02539-21"
                        className="app__product__filters__buttons--selected js__selected app__product__filters__buttons js__filter-option"
                    >
                        Standard
                    </Link>

                    <Link
                        href="/p/735611/pn/010-02540-01"
                        className="app__product__filters__buttons js__filter-option"
                    >
                        Solar
                    </Link>
                    <Link
                        href="/p/735611/pn/010-02540-01"
                        className="app__product__filters__buttons js__filter-option"
                    >
                        Sapphire Solar
                    </Link>

                    <Link
                        href="/p/735611/pn/010-02540-01"
                        className="app__product__filters__buttons js__filter-option"
                    >
                        Pro | Solar
                    </Link>
                    <Link
                        href="/p/735611/pn/010-02540-01"
                        className="app__product__filters__buttons js__filter-option"
                    >
                        Pro | Sapphire Solar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Filters;
