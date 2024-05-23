import React from "react";
import WishlishtCard from "./Card";
export const Wishlist = ({ items, removeItemFromWishlist }) => {
    return (
        <div className="ais-QueryRuleCustomData">
            <div className="cards">
                {items.map((item) => {
                    return (
                        <WishlishtCard
                            item={item}
                            removeItemFromWishlist={removeItemFromWishlist}
                        />
                    );
                })}
            </div>
        </div>
    );
};
