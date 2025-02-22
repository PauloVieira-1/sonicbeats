import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children} {/* Render all child components */}
    </CartContext.Provider>
  );
}

export default CartContext;
     