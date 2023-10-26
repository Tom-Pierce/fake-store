import PropTypes, { object } from "prop-types";
import styles from "../css/ProductCards.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

const ProductCards = ({ products }) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <ul className={styles.cardList}>
      {products.map((product) => {
        return (
          <li key={product.id} className={styles.card}>
            <Link className={styles.productLink} to={`/product/${product.id}`}>
              <img
                className={styles.productImage}
                src={product.image}
                alt={"product image"}
              ></img>
              <p className={styles.title}>{product.title}</p>
              <div className={styles.imageContainer}></div>
              <p className={styles.price}>€{product.price}</p>
            </Link>
            <button
              type="button"
              className={styles.addToCartButton}
              onClick={() => {
                const newCart = cart;
                setCart([...newCart, product]);
              }}
            >
              Add to Cart
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ProductCards.propTypes = {
  products: PropTypes.arrayOf(object),
};
export default ProductCards;
