import React from "react";

const Navigation = ({ accessories, activeCategory, setActiveCategory }) => {
    console.log("accessories");
    console.log(accessories);
    return (
        <nav className="app__product__accessories-nav">
            <ul
                className="app__product__accessories-nav__list"
                data-categories-list-collapsed="false"
            >
                {accessories.map((accessory) => {
                    return (
                        <li
                            className={`app__product__accessories-nav__list-item ${
                                activeCategory == accessory.id
                                    ? "app__product__accessories-nav__list-item--active"
                                    : ""
                            }`}
                            onClick={() => {
                                setActiveCategory(accessory.id);
                            }}
                            key={accessory.id}
                        >
                            <a
                                className="app__product__accessories-nav__link"
                                href="#accessories"
                                data-category={
                                    accessory.accessoryCategory.title
                                }
                            >
                                {accessory.accessoryCategory.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
