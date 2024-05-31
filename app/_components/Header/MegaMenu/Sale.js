import React from "react";

export const Sale = () => {
    return (
        <li className="gh__nav__categories__items js__mega-menu-item en-GB">
            <span className="gh__nav__categories__items__link" tabIndex={0}>
                SALE
                <span className="items__menu__icon">
                    <svg
                        className="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="14px"
                        viewBox="0 0 12 12"
                        version="1.1"
                    >
                        <g
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                        >
                            <g
                                transform="translate(-347.000000, -136.000000)"
                                fill="#000000"
                            >
                                <polygon points="352.142857 136 352.142857 141.142857 347 141.142857 347 142.857143 352.142857 142.857143 352.142857 148 353.857143 148 353.857143 142.857143 359 142.857143 359 141.142857 353.857143 141.142857 353.857143 136" />
                            </g>
                        </g>
                    </svg>
                    <svg
                        className="minus"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 455 31"
                        width="15px"
                    >
                        <path
                            className="shp0"
                            d="M0 0.5L455 0.5L455 30.5L0 30.5L0 0.5Z"
                        />
                    </svg>
                </span>
            </span>
            <div className="gh__nav__categories__items__menu">
                {/* Column 1 starts      */}
                <div className="gh__nav__categories__items__menu__column">
                    <span className="gh__nav__categories__items__menu__heading en-GB ">
                        SALES AND PROMOTIONS{" "}
                        <span className="items__menu__icon">
                            <svg
                                className="plus"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="14px"
                                viewBox="0 0 12 12"
                                version="1.1"
                            >
                                <g
                                    stroke="none"
                                    strokeWidth={1}
                                    fill="none"
                                    fillRule="evenodd"
                                >
                                    <g
                                        transform="translate(-347.000000, -136.000000)"
                                        fill="#000000"
                                    >
                                        <polygon points="352.142857 136 352.142857 141.142857 347 141.142857 347 142.857143 352.142857 142.857143 352.142857 148 353.857143 148 353.857143 142.857143 359 142.857143 359 141.142857 353.857143 141.142857 353.857143 136" />
                                    </g>
                                </g>
                            </svg>
                            <svg
                                className="minus"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 455 31"
                                width="15px"
                            >
                                <path
                                    className="shp0"
                                    d="M0 0.5L455 0.5L455 30.5L0 30.5L0 0.5Z"
                                />
                            </svg>
                        </span>
                    </span>
                    <div className="gh__nav__categories__items__menu__subcategories">
                        <a
                            className="gh__nav__categories__items__menu__link"
                            href="/sales-promotions/"
                            target="_self"
                            data-uw-rm-brl="PR"
                            data-uw-original-href="/sales-promotions/"
                        >
                            Shop all sales{" "}
                        </a>
                    </div>
                </div>
                {/* Column 1 Ends */}
                {/* Column 2 Starts*/}
                {/* Column 2 Ends*/}
                {/* Column 3 Starts*/}
                {/* Column 3 Ends */}
                {/* Column 4 Starts */}
                <div className="gh__nav__categories__items__menu__column">
                    <div className="gh__nav__categories__items__menu__promo-card">
                        <a
                            className="vertical"
                            href="/sales-promotions/"
                            target="_self"
                            data-uw-rm-brl="PR"
                            data-uw-original-href="/sales-promotions/"
                        >
                            <img
                                className="gh__nav__categories__items__menu__promo-card__image"
                                src="https://www.garmin.ae/wp-content/uploads/2022/07/32357-top-nav-sale-OS-300x300-1.png"
                                loading="lazy"
                                alt="PROMOTIONS Check out our current offers"
                                data-uw-rm-alt-original="PROMOTIONS Check out our current offers"
                                data-uw-rm-alt="ALT"
                            />
                            <div className="grouping">
                                <h3 className="gh__nav__categories__items__menu__promo-card__heading">
                                    PROMOTIONS Check out our current offers
                                </h3>
                                <div className="gh__nav__categories__items__menu__promo-card__copy" />
                                <span className="gh__nav__categories__items__menu__promo-card__cta">
                                    DISCOVER
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
                {/* Column 4 Ends */}
            </div>
        </li>
    );
};
