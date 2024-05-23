import React from "react";
import "./index.css";
const Shipping = () => {
    return (
        <div className="max-w-[900px] mx-auto my-16 copy">
            <h1 className="oswald uppercase text-[2.5rem] font-normal tracking-wider leading-[1.25] my-6">
                Shipping
            </h1>
            <div>
                <h2 id="costs">Costs</h2>
                <ul>
                    <li>
                        Free standard shipping is included on all Garmin.com
                        orders £30 and over.
                    </li>
                    <li>
                        Selected Marine or Indoor Training products may not
                        qualify for free shipping due to their size or weight as
                        they require specialised shipping services.
                    </li>
                </ul>
                <p>
                    NOTICE: Due to international and national shipping
                    regulations, accessory batteries cannot ship via air. Please
                    be advised that your selected shipping method may be changed
                    to meet these restrictions and the shipping time may be
                    impacted.
                </p>
            </div>
            <div>
                <h2 id="whereweship">Where We Ship</h2>
                <ul>
                    <li>
                        We can ship online purchases only to addresses in United
                        Kingdom
                    </li>
                    <li>
                        Garmin restricts carriers from rerouting packages. The
                        shipping address provided at checkout is where your
                        order will be delivered.
                    </li>
                    <li>
                        Unfortunately we cannot ship online orders via military
                        postal services.
                    </li>
                </ul>
            </div>
            <div>
                <h2 id="orderstatus">Order Status</h2>
                <p>
                    <a href="https://www.garmin.com/en-GB/account/orderhistory/search">
                        Check order, repair or return status
                    </a>
                </p>
            </div>
            <div>
                <h2 id="returns">Returns</h2>
                <p>
                    Merchandise in its original condition may be returned for a
                    refund within 30 days of purchase. Opened software,
                    downloadable items and custom products are nonrefundable.{" "}
                </p>
                <p>
                    <a href="https://www.garmin.com/en-GB/legal/shopterms/">
                        View the returns instructions
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Shipping;
