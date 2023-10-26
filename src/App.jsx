import Router from "./components/Router";
import "./css/reset.css";
import "./css/index.css";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
export const CartContext = createContext();

function App() {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <Router />
        </CartContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

export default App;
