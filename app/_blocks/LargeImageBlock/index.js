import React from "react";
import { LifeStyle } from "@/app/_components/Product/Tabs/Overview/LifeStyle";
export const LargeImageBlock = ({ position, title, description, image }) => {
    const data = { position, title, description, image };
    console.log("threeColumnBlockItems");
    console.log(data);
    return <LifeStyle {...data} />;
};
