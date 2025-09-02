"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
  useMemo,
} from "react";
import { useAuth } from "../Auth";
import { cartReducer } from "./reducers";
import toast from "react-hot-toast";

const Context = createContext({
  cart: { items: [] },
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  clearCart: () => {},
  isProductInCart: () => false,
  isCartUpdating: false,
  addCouponToCart: () => {},
  removeCouponFromCart: () => {},
  forceRecalculateCart: () => {},
  cartDetails: null,
  cartIsEmpty: true,
});

export const useCart = () => useContext(Context);

const arrayHasItems = (array) => Array.isArray(array) && array.length > 0;

/** Flatten + sanitize cart before sending to server */
const flattenCart = (cart) => {
  const items = Array.isArray(cart?.items) ? cart.items : [];
  return {
    ...cart,
    items: items
      .map((item) => {
        if (!item?.product || typeof item.product !== "object") return null;
        return {
          ...item,
          // flatten relationship to product
          product: item.product.id,
          quantity: typeof item.quantity === "number" ? item.quantity : 0,
          categories: Array.isArray(item.product?.categories)
            ? item.product.categories.map((category) => category.id)
            : [],
        };
      })
      .filter(Boolean),
  };
};

export const CartProvider = (props) => {
  const { children } = props;
  const { user } = useAuth();

  // ✅ Safe initial shape prevents cart.items being undefined
  const [cart, dispatchCart] = useReducer(cartReducer, { items: [] });
  const [isCartUpdating, setIsCartUpdating] = useState(false);
  const [cartDetails, setCartDetails] = useState(null);
  const [cartReady, setCartReady] = useState(false);

  const addItemToCart = useCallback((incomingItem) => {
    dispatchCart({ type: "ADD_ITEM", payload: incomingItem });
  }, []);

  const deleteItemFromCart = useCallback((incomingProduct) => {
    dispatchCart({ type: "DELETE_ITEM", payload: incomingProduct });
  }, []);

  const clearCart = useCallback(() => {
    dispatchCart({ type: "CLEAR_CART" });
  }, []);

  const addCouponToCart = useCallback((couponCode) => {
    dispatchCart({ type: "ADD_COUPON", payload: couponCode });
  }, []);

  const removeCouponFromCart = useCallback(() => {
    dispatchCart({ type: "REMOVE_COUPON" });
  }, []);

  const forceRecalculateCart = useCallback(() => {
    reCalculateCart();
  }, []);

  const isProductInCart = useCallback(
    (incomingProduct) => {
      const itemsInCart = Array.isArray(cart?.items) ? cart.items : [];
      return Boolean(
        itemsInCart.find(({ product }) =>
          typeof product === "string"
            ? product === incomingProduct.id
            : product?.id === incomingProduct.id
        )
      );
    },
    [cart]
  );

  // ✅ Normalize before providing so consumers always see an array
  const normalizedCart = useMemo(
    () => ({ ...cart, items: Array.isArray(cart?.items) ? cart.items : [] }),
    [cart]
  );

  // Initialize from localStorage
  useEffect(() => {
    setIsCartUpdating(true);
    let parsed = { items: [] };
    try {
      const raw = localStorage.getItem("cart");
      parsed = raw ? JSON.parse(raw) : { items: [] };
      if (!Array.isArray(parsed.items)) parsed.items = [];
    } catch {
      parsed = { items: [] };
    }
    dispatchCart({ type: "SET_CART", payload: parsed });
    setIsCartUpdating(false);
    setCartReady(true);
  }, []);

  // Persist & recalc whenever cart changes (after ready)
  useEffect(() => {
    if (!cartReady) return;
    setIsCartUpdating(true);
    localStorage.setItem("cart", JSON.stringify(normalizedCart));
    reCalculateCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalizedCart, cartReady]);

  const reCalculateCart = async () => {
    try {
      setIsCartUpdating(true);
      localStorage.removeItem("cartDetails");

      const flattenedCart = flattenCart(normalizedCart);

      const req = await fetch(`/api/order/calculate`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
          cart: flattenedCart,
          user: user ? user.id : "",
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (req.ok) {
        const data = await req.json();
        if (data?.coupon?.Error) {
          toast.error(data.coupon.Error);
          removeCouponFromCart();
        }
        localStorage.setItem("cartDetails", JSON.stringify(data));
        setCartDetails(data);
      }
    } catch {
      // swallow; UI can re-trigger
    } finally {
      setIsCartUpdating(false);
    }
  };

  return (
    <Context.Provider
      value={{
        cart: normalizedCart,
        addItemToCart,
        deleteItemFromCart,
        clearCart,
        isProductInCart,
        isCartUpdating,
        addCouponToCart,
        removeCouponFromCart,
        forceRecalculateCart,
        cartDetails,
        cartIsEmpty: !arrayHasItems(normalizedCart.items),
        cartReady,
      }}
    >
      {children}
    </Context.Provider>
  );
};
