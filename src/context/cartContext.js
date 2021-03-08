import React from "react";
const CartContext = React.createContext({
  cart: { itemsCart: [], itemsCount: 0, totalPrice: 0.01 },
  setCart: (items) => {},
});
export default CartContext;
