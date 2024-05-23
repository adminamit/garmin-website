import React from "react";
import Image from "next/image";
import { Items } from "./Items";
export const List = ({ accessories, activeCategory, setActiveCategory }) => {
    return (
        <div
            className={`app__product__accessories__outer-wrapper app__product__accessories__outer-wrapper--${activeCategory}`}
        >
            <div>
                {!activeCategory ? (
                    <div className="app__product__accessories__wrapper app__product__accessories__wrapper--categories">
                        {accessories.map((accessory) => {
                            return (
                                <div
                                    className={`app__product__accessories__section`}
                                    onClick={() => {
                                        // alert("sdfsd");
                                        setActiveCategory(accessory.id);
                                    }}
                                    key={accessory.id}
                                >
                                    <div className="app__product__accessories__section__card">
                                        <div className="app__product__accessories__section__card-content">
                                            <Image
                                                alt="Apps"
                                                loading="lazy"
                                                width="130"
                                                height="130"
                                                src={
                                                    accessory.products[0]
                                                        .featuredImageUrl
                                                }
                                            />
                                            <div className="app__product__accessories__section__card-content__heading">
                                                <h4>
                                                    {
                                                        accessory
                                                            .accessoryCategory
                                                            .title
                                                    }
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    ""
                )}
                {activeCategory ? (
                    <Items
                        accessories={accessories}
                        activeCategory={activeCategory}
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};
