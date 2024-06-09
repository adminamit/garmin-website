import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export const SubItemWrapper = ({ children, title }) => {
    const path = usePathname();
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(false);
    }, [path]);
    return (
        <div
            className={`gh__nav__categories__items__menu__column ${
                active ? "gh__nav__categories__items__menu__column--active" : ""
            }`}
        >
            <span
                data-gatext="PRODUCTS"
                className="gh__nav__categories__items__menu__heading en-GB"
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
                    </svg>{" "}
                    <svg
                        className="minus"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 455 31"
                        width="15px"
                    >
                        <style
                            dangerouslySetInnerHTML={{
                                __html: "tspan{white-space:pre}.shp0{fill:#000}",
                            }}
                        />
                        <path
                            className="shp0"
                            d="M0 0.5L455 0.5L455 30.5L0 30.5L0 0.5Z"
                        />
                    </svg>
                </span>
            </span>
            {children}
        </div>
    );
};
