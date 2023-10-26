import { Link, useLocation } from "react-router-dom";
import styles from "../css/Header.module.css";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>shoppingcart</h1>
        <nav className={styles.navBar}>
          <div className={styles.wrapper}>
            <Link
              className={`${styles.link} ${
                location.pathname === "/" ? styles.activeLink : ""
              }`}
              to={"/"}
            >
              Home
            </Link>
          </div>
          <div className={styles.wrapper}>
            <Link
              className={`${styles.link} ${
                location.pathname === "/store" ||
                /^\/product\/\d+$/.test(location.pathname)
                  ? styles.activeLink
                  : ""
              }`}
              to={"/store"}
            >
              Store
            </Link>
          </div>
          <div className={styles.wrapper}>
            <Link
              className={`${styles.link} ${
                location.pathname === "/cart" ? styles.activeLink : ""
              }`}
              to={"/cart"}
            >
              Cart
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
