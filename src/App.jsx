import Router from "./components/Router";
import "./css/reset.css";
import "./css/index.css";
import { createContext, useState } from "react";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState();

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts }}>
        <Router />
      </ProductContext.Provider>
    </>
  );
}

export default App;
