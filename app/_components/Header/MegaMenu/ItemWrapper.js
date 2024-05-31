import React, { useState } from "react";

export const ItemWrapper = ({ children, title }) => {
    const [active, setActive] = useState(false);
    return (
        <li
            className={`gh__nav__categories__items js__mega-menu-item en-GB ${
                active ? "gh__nav__categories__items--active" : ""
            }`}
        >
            <span
                className="gh__nav__categories__items__link"
                tabIndex={0}
                onClick={() => setActive(active ? false : true)}
            >
                {title}
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
            {children}
        </li>
    );
};
