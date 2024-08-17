import React, { useState } from "react";
import Tooltip from "../../Helpers/Tooltip";
import { AiFillQuestionCircle } from "react-icons/ai";
import "@/app/_css/product/filters.css";
import { isEqual, isMatch, omit } from "lodash";
import { useRouter } from "next/navigation";

const Filters = ({ attributes, product, activeAttributes, variationData }) => {
    const router = useRouter();
    const [selectedVariations, setSelectedVariations] =
        useState(activeAttributes);
    const [notAvailable, setNotAvailable] = useState(false);

    const switchVariation = (e, variations, currentKey) => {
        let available = false;
        variationData.map((variation) => {
            if (isEqual(variation.trimmedAttributes, variations)) {
                available = true;
                router.push(`/p/${variation.sku}`);
            }
        });
        if (!available) {
            variationData.map((variation) => {
                if (isMatch(variation.trimmedAttributes, currentKey)) {
                    router.push(`/p/${variation.sku}`);
                }
            });
            // setNotAvailable(true);
            // setTimeout(() => {
            //     setNotAvailable(false);
            // }, [500]);
        }
    };

    return (
        <div
            id="js__filters-section"
            className={`app__product__filters ${
                notAvailable ? "not__available" : ""
            }`}
        >
            {attributes.map((attribute) => {
                return (
                    <div
                        className="app__product__filters__group"
                        key={attribute.id}
                    >
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
                        <div className={`js__filters-wrapper `}>
                            {attribute.values.map((el) => {
                                return (
                                    // <Link
                                    //     href={`/p/${el.sku}`}
                                    //     className={`${
                                    //         el.active
                                    //             ? "app__product__filters__buttons--selected js__selected"
                                    //             : ""
                                    //     } app__product__filters__buttons js__filter-option`}
                                    // >
                                    //     {el.title}
                                    // </Link>
                                    <span
                                        // href={`/p/${product.sku}`}

                                        onClick={(e) => {
                                            switchVariation(
                                                e,
                                                {
                                                    ...selectedVariations,
                                                    [attribute.title]: el.title,
                                                },
                                                { [attribute.title]: el.title }
                                            );

                                            // setSelectedVariations([...selectedVariations, {el.title ] );
                                        }}
                                        className={`cursor-pointer ${
                                            el.active
                                                ? "app__product__filters__buttons--selected js__selected"
                                                : ""
                                        } app__product__filters__buttons js__filter-option `}
                                    >
                                        {el.title}
                                    </span>
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
