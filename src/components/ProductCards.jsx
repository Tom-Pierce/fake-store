import PropTypes, { object } from "prop-types";
import styles from "../css/ProductCards.module.css";
import { Link } from "react-router-dom";

const ProductCards = ({ products }) => {
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
