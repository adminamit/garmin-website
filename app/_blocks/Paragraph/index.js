import React from "react";
export const Paragraph = ({ Text }) => {
    return (
        <p
            className={`text-[1.125rem] max-w-[900px] mx-auto font-light pt-4 mt-2 mb-6 text-center px-5`}
        >
            {Text}
        </p>
    );
};
