import React from "react";
import CartItem from "@/app/_components/Cart/CartItem";
import FreeItem from "./FreeItem";
const CartItems = ({ items, cartDetails }) => {
    return (
        <div className="flex flex-col">
            {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
            ))}

            {/* IF FREE PRODUCTS */}

            {cartDetails.freeProduct &&
            Object.keys(cartDetails.freeProduct).length != 0 ? (
                <div className="">
                    <h4 className="oswald mt-4 mb-4 text-xl">
                        Your free gifts
                    </h4>
                    <FreeItem
                        item={cartDetails.freeProduct.freeEligibleProduct}
                        quantity={
                            cartDetails.freeProduct.freeEligibleProductQuantity
                        }
                    />
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default CartItems;
