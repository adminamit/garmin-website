import React from "react";
import Link from "next/link";
const ShppingMethod = () => {
  return (
    <div className="checkout__shipping-method my-8">
      <div className="checkout__shipping-method__info mb-4">
        <label className="font-normal text-xl oswald tracking-wider">
          <span>Shipping Method</span>
        </label>
        <p className="my-4">Processing time may take 3-7 days</p>
      </div>

      <p className="checkout__shipping-method__info flex bg-black text-white px-4 py-5 justify-between items-center tracking-wider cursor-pointer">
        <div className="font-medium">
          <div className="text-sm mb-1">Standard Courier</div>
          <div className="text-xs">1-3 business days + processing time</div>
        </div>
        <div>
          <div className="uppercase font-semibold text-sm">0.00</div>
        </div>
      </p>
    </div>
  );
};

export default ShppingMethod;
