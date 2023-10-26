import { useContext, useEffect } from "react";
import { ProductContext } from "../App";
import ProductCards from "./ProductCards";

const Store = () => {
  const { products, setProducts } = useContext(ProductContext);
  useEffect(() => {
    if (!products) {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => {
          setProducts(json);
        })
        .catch((error) => console.log(error));
    }
  });

  return <>{products ? <ProductCards products={products} /> : "Loading..."}</>;
};

export default Store;
