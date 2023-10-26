import { useParams } from "react-router-dom";
import { ProductContext } from "../App";
import { useContext, useEffect, useState } from "react";
import styles from "../css/ProductPage.module.css";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  useEffect(() => {
    if (products) {
      const newCurrentProduct = products.filter((product) => {
        return product.id === parseInt(id);
      })[0];
      setCurrentProduct(newCurrentProduct);
    } else {
      setLoading(true);
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((json) => {
          setCurrentProduct(json);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [products, id]);

  useEffect(() => {
    console.log(currentProduct);
  }, [currentProduct]);
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <img src={currentProduct.image} alt="product image" />
          <div className={styles.productInfo}>
            <span>{currentProduct.title}</span>
          </div>
        </>
      )}
    </>
  );
};
export default ProductPage;
