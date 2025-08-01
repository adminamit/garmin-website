import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import Link from "next/link";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

const formatPrice = (price) => {
    return price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
    });
};
const SubTotal = ({
    couponCode,
    handleCouponCodeChange,
    applyCouponCode,
    removeCouponCode,
    cartDetails,
    cart,
}) => {
    return (
        <>
            <div className="cart__section--side-wrapper">
                <div className="cart__section__order-total-summary">
                    <div className="order-total-summary__item">
                        <div className="order-total-summary__title order-total-summary__title--subtotal">
                            <span>Subtotal</span>{" "}
                            <BsFillQuestionCircleFill className="tooltip" />
                        </div>
                        <div className="order-total-summary__detail order-total-summary__detail--price">
                            {formatPrice(cartDetails.cart.subTotal)}
                        </div>
                    </div>
                    {/* <div className="order-total-summary__item">
                        <div className="order-total-summary__title">
                            Estimated GST(Inc)
                        </div>
                        <div className="order-total-summary__detail">
                            {formatPrice(cartDetails.cart.tax)}
                        </div>
                    </div> */}
                    {cartDetails.cart.discount > 0 ? (
                        <div className="order-total-summary__item">
                            <div className="order-total-summary__title">
                                Discount
                            </div>
                            <div className="order-total-summary__detail order-total-summary__detail--price">
                                - {formatPrice(cartDetails.cart.discount)}
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="order-total-summary__item">
                        <div className="order-total-summary__title">
                            Estimated Total
                        </div>
                        <div className="order-total-summary__detail order-total-summary__detail--price">
                            {formatPrice((cartDetails.cart.total || 0) + (cartDetails.cart.courierCharge || 590))}
                        </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">
                        * Includes courier charge of ₹590 (₹500 + 18% GST)
                    </div>
                </div>

                <div className="discount-wrapper">
                    <div className="mb-1">
                        <label className="font-medium text-lg oswald ">
                            <span>Discount Code</span>
                        </label>
                    </div>
                    <div className="flex">
                        <div className="input-wrapper  h-[60px]">
                            <input
                                type="text"
                                value={couponCode}
                                onChange={handleCouponCodeChange}
                                className="border border-borderColor p-[0.875em] text-[1em] h-full w-[95%]"
                            />
                        </div>

                        <button
                            onClick={() => applyCouponCode()}
                            className="button bg-white h-[60px] w-[40%]"
                        >
                            APPLY
                        </button>
                    </div>
                    {cart.coupon ? (
                        <div className="mb-4">
                            <div className="flex">
                                <p className="bg-primary text-white text-base oswald px-4 py-2 flex items-center justify-center">
                                    <span>{cart.coupon}</span>
                                    <IoIosClose
                                        className="w-8 h-8 cursor-pointer"
                                        onClick={() => removeCouponCode()}
                                    />
                                </p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <Link href="/checkout">
                    <button className="button !w-full bg-primary border-none hover:bg-white hover:text-black h-12 mt-6">
                        CHECKOUT
                    </button>
                </Link>
            </div>

            <div className="cart__section--side-wrapper--bottom text-center mt-4">
                <Link href="/">
                    <div className="cart__continue-shopping py-2 px-4 text-[#005c90] text-sm font-medium hover:bg-black hover:text-white">
                        CONTINUE SHOPPING
                    </div>
                </Link>
            </div>
        </>
    );
};

export default SubTotal;
