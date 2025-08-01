"use client";

import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useReducer,
    useRef,
    useState,
} from "react";
import { useAuth } from "../Auth";
import { CartItem, cartReducer } from "./reducers";
import toast from "react-hot-toast";
const Context = createContext();

export const useCart = () => useContext(Context);

const arrayHasItems = (array) => Array.isArray(array) && array.length > 0;

/**
 * ensure that cart items are fully populated, filter out any items that are not
 * this will prevent discontinued products from appearing in the cart
 */

const flattenCart = (cart) => ({
    ...cart,
    // user: user?.id,
    items: cart.items
        .map((item) => {
            if (!item?.product || typeof item?.product !== "object") {
                return null;
            }

            return {
                ...item,
                // flatten relationship to product
                product: item?.product?.id,
                quantity:
                    typeof item?.quantity === "number" ? item?.quantity : 0,
                categories: item?.product?.categories.map((category) => {
                    return category.id;
                }),
            };
        })
        .filter(Boolean),
});

export const CartProvider = (props) => {
    const { children } = props;
    const { user, authStatus } = useAuth();
    const [cart, dispatchCart] = useReducer(cartReducer, {});
    const [isCartUpdating, setIsCartUpdating] = useState(false);
    const [cartDetails, setCartDetails] = useState(null);
    const [cartReady, setCartReady] = useState(false);
    // this method can be used to add new items AND update existing ones
    const addItemToCart = useCallback((incomingItem) => {
        dispatchCart({
            type: "ADD_ITEM",
            payload: incomingItem,
        });
    }, []);

    const deleteItemFromCart = useCallback((incomingProduct) => {
        dispatchCart({
            type: "DELETE_ITEM",
            payload: incomingProduct,
        });
    }, []);

    const clearCart = useCallback(() => {
        dispatchCart({
            type: "CLEAR_CART",
        });
    }, []);

    //Add Coupon To Cart
    const addCouponToCart = useCallback((couponCode) => {
        dispatchCart({
            type: "ADD_COUPON",
            payload: couponCode,
        });
    }, []);

    // Remove Coupon From Cart
    const removeCouponFromCart = useCallback(() => {
        dispatchCart({
            type: "REMOVE_COUPON",
        });
    }, []);

    const forceRecalculateCart = useCallback(() => {
        reCalculateCart();
    }, []);

    const isProductInCart = useCallback(
        (incomingProduct) => {
            let isInCart = false;
            const { items: itemsInCart } = cart || {};
            if (Array.isArray(itemsInCart) && itemsInCart.length > 0) {
                isInCart = Boolean(
                    // eslint-disable-line function-paren-newline
                    itemsInCart.find(({ product }) =>
                        typeof product === "string"
                            ? product === incomingProduct.id
                            : product?.id === incomingProduct.id
                    )
                );
            }
            return isInCart;
        },
        [cart]
    );

    //Update Cart From LocalStorage
    useEffect(() => {
        setIsCartUpdating(true);
        const localCart = localStorage.getItem("cart");
        if (localCart) {
            dispatchCart({
                type: "SET_CART",
                payload: JSON.parse(localCart ? localCart : { items: [] }),
            });
        } else {
            dispatchCart({
                type: "SET_CART",
                payload: { items: [] },
            });
        }

        setIsCartUpdating(false);
        setCartReady(true);
    }, []);

    // every time the cart changes, determine whether to save to local storage or Payload based on authentication status
    // upon logging in, merge and sync the existing local cart to Payload
    useEffect(() => {
        if (!cartReady) return;
        setIsCartUpdating(true);
        // wait until we have attempted authentication (the user is either an object or `null`
        localStorage.setItem("cart", JSON.stringify(cart));
        reCalculateCart();
    }, [cart]);

    const reCalculateCart = async () => {
        setIsCartUpdating(true);
        // Clear any cached cart details to force fresh calculation
        localStorage.removeItem("cartDetails");
        const flattenedCart = flattenCart(cart);
        const req = await fetch(
            `/api/order/calculate`,
            {
                credentials: "include",
                method: "POST",
                body: JSON.stringify({
                    cart: flattenedCart,
                    user: user ? user.id : "",
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (req.ok) {
            const data = await req.json();
            if (data.coupon) {
                if (data.coupon.Error) {
                    toast.error(data.coupon.Error);
                    removeCouponFromCart();
                } else {
                    // toast.success("Coupon applied successfully");
                }
            }
            localStorage.setItem("cartDetails", JSON.stringify(data));

            setCartDetails(data);
            setIsCartUpdating(false);
        }
    };

    return (
        <Context.Provider
            value={{
                cart,
                addItemToCart,
                deleteItemFromCart,
                cartIsEmpty: !arrayHasItems(cart?.items),
                clearCart,
                isProductInCart,
                // total,
                // hasInitializedCart,
                isCartUpdating,
                addCouponToCart,
                removeCouponFromCart,
                forceRecalculateCart,
                cartDetails,
            }}
        >
            {children}
        </Context.Provider>
    );
};
