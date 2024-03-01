import React, { createContext, useState } from "react";

// Default parameter for the context
const defaultCart = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

const CartContext = createContext(defaultCart);

// Proveedor del contexto del carrito
const CartProvider = ({ children }) => {
  const cartLocalStorageString = localStorage.getItem("cart");

  const cartLocalStorage = cartLocalStorageString
    ? JSON.parse(cartLocalStorageString)
    : [];

  const [cartFromContext, setCartFromContext] = useState(cartLocalStorage);

  const addToCart = (item) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
    //Checking existence
    if (cartLocalStorage != null) {
      const IsDuplicate = cartLocalStorage.filter(
        (cartItem) => item.id === cartItem.id
      );
      //Checking duplicated element and updating
      if (IsDuplicate.length === 0) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartLocalStorage, item])
        );
      }
    } else {
      // Adding to cart
      localStorage.setItem("cart", JSON.stringify([item]));
    }

    setCartFromContext(JSON.parse(localStorage.getItem("cart")));
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartFromContext.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartFromContext(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, cartFromContext }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
