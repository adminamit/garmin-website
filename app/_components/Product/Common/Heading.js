import React from "react";

export const Heading = ({
    children,
    align = "text-center",
    size = "text-2xl",
}) => {
    return (
        <div
            className={`product__sidebar__title w-full ${align} uppercase box-border`}
        >
            <h2
                className={`my-4 oswald font-normal tracking-wider text-black ${size} leading-[1.25]`}
            >
                {children}
            </h2>
        </div>
    );
};
