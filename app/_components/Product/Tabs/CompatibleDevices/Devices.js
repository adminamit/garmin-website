import React from "react";
import Device from "./Device";
import "@/app/_css/product/devices.css";
export const Devices = ({ products }) => {
    return (
        <div className="app__product__devices">
            <div className="app__product__devices__container">
                {products.map((device) => {
                    return <Device device={device} key={device.id} />;
                })}
            </div>
            {products.length == 0 ? (
                <div className="text-center oswald">
                    <h4 className="text-lg">No accessories found!</h4>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
