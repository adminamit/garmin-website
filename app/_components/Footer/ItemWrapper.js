"use client";
import React, { useState } from "react";

export const ItemWrapper = ({ children }) => {
    const [active, setActive] = useState(false);
    return (
        <li
            className={`gf__list__item en-GB js__gf__list__item gf__list__item__has__submenu js__gf__has__submenu ${
                active ? "active" : ""
            }`}
            onClick={() => setActive(active ? false : true)}
        >
            {children}
        </li>
    );
};
