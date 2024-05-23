import React from "react";

export const Heading = ({ title }) => {
    return (
        <div className="">
            <h1 className="py-[1.5em] px-[1em] text-[2.5rem] oswald text-center tracking-wide">
                <p>{title}</p>
            </h1>
        </div>
    );
};
