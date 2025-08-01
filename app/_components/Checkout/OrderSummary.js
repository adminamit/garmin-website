import React, { useEffect } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import Link from "next/link";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import OrderItems from "./OrderItems";
import { useCart } from "@/app/_providers/Cart";
import { Loader } from "@/app/_components/Loader";

const formatPrice = (price) => {
    return price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
    });
};

const OrderSummary = ({
    discountCode,
    handleDiscountCodeChange,
    applyDiscount,
    orderItems,
    isCartUpdating,
}) => {
    const {
        cart,
        cartIsEmpty,
        addItemToCart,
        cartDetails,
        hasInitializedCart,
        forceRecalculateCart,
    } = useCart();

    // Force recalculation when component mounts to ensure latest calculation
    useEffect(() => {
        if (cartDetails && cartDetails.cart) {
            forceRecalculateCart();
        }
    }, []);

    return (
        <>
            <div
                className={`checkout__section--side-wrapper  ${
                    isCartUpdating ? "pointer-events-none opacity-30" : ""
                }`}
            >
                <div className="mb-1">
                    <label className="font-normal text-xl oswald tracking-wider">
                        <span>Order Summary:</span>
                    </label>
                </div>

                <>
                    <div className="checkout__section__order-total-summary">
                        <div className="order-total-summary__item">
                            <div className="order-total-summary__title order-total-summary__title--subtotal">
                                <span>Subtotal</span>{" "}
                                <BsFillQuestionCircleFill className="tooltip" />
                            </div>
                            <div className="order-total-summary__detail order-total-summary__detail--price">
                                {formatPrice(cartDetails.cart.subTotal)} Inc GST
                            </div>
                        </div>
                        {cartDetails.cart.discount > 0 ? (
                            <div className="order-total-summary__item">
                                <div className="order-total-summary__title">
                                    Discount
                                </div>
                                <div className="order-total-summary__detail order-total-summary__detail--price">
                                    {formatPrice(cartDetails.cart.discount)}
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="order-total-summary__item">
                            <div className="order-total-summary__title">
                                Courier Charge
                            </div>
                            <div className="order-total-summary__detail">
                                {formatPrice(cartDetails.cart.courierCharge || 590)}
                            </div>
                        </div>
                        {/* <div className="order-total-summary__item">
                                <div className="order-total-summary__title">
                                    GST
                                </div>
                                <div className="order-total-summary__detail order-total-summary__detail--price">
                                    {cartDetails.formattedTax}
                                </div>
                            </div> */}
                        <div className="order-total-summary__item border-t border-black pt-3 mt-3">
                            <div className="order-total-summary__title">
                                Total
                            </div>
                            <div className="order-total-summary__detail order-total-summary__detail--price">
                                {formatPrice((cartDetails.cart.total || 0) + (cartDetails.cart.courierCharge || 590))}
                            </div>
                        </div>
                    </div>

                    <OrderItems
                        orderItems={cart.items}
                        cartDetails={cartDetails}
                    />
                </>

                <Link href="/cart">
                    <div className="checkout__continue-shopping pt-8 pb-4 px-4 text-black uppercase text-sm font-semibold text-center">
                        Edit Cart
                    </div>
                </Link>
            </div>
        </>
    );
};

export default OrderSummary;
