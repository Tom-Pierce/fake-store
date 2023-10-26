import { useParams } from "react-router-dom";
import { CartContext, ProductContext } from "../App";
import { useContext, useEffect, useState } from "react";
import styles from "../css/ProductPage.module.css";
import StarRating from "./StarRating";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState("");
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    if (products) {
      const newCurrentProduct = products.filter((product) => {
        return product.id === parseInt(id);
      })[0];
      setCurrentProduct(newCurrentProduct);
      setLoading(false);
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

  return (
    <>
      <div className={styles.productPage}>
        {loading ? (
          "Loading..."
        ) : (
          <>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={currentProduct.image}
                alt="product image"
              />
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{currentProduct.title}</h2>
              <span className={styles.rating}>
                <StarRating rating={currentProduct.rating.rate} />
                {currentProduct.rating.rate} stars out of{" "}
                {currentProduct.rating.count} reviews
              </span>
              <p className={styles.description}>{currentProduct.description}</p>
              <div className={styles.buttons}>
                <button
                  type="button"
                  onClick={() => {
                    const newCart = cart;
                    setCart([...newCart, currentProduct]);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default ProductPage;
