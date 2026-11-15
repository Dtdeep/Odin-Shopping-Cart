import styles from "./NavBar.module.css";
import CartSvg from "../../assets/shopping-cart.svg?react";
import { Link } from "react-router";

const NavBar = ({ currentRoute, cartItemCount }) => {
  const inHome = currentRoute === "home";
  const inCart = currentRoute === "cart";
  const inShop = currentRoute === "shop";

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.logo}>
          <Link to="/" className={styles.linkDecoration}>
            <h2 className={styles.title}>Shopping Site</h2>
          </Link>
        </li>
        <li className={`${styles.link} ${inHome ? styles.active : ""}`}>
          <Link to="/" className={styles.linkDecoration}>
            Home
          </Link>
        </li>
        <li className={`${styles.link} ${inShop ? styles.active : ""}`}>
          <Link to="/shop" className={styles.linkDecoration}>
            Shop
          </Link>
        </li>
        <li className={`${styles.cart} ${inCart ? styles.cartActive : ""}`}>
          <Link to="/cart" className={styles.linkDecoration}>
            <CartSvg className={`${styles.cartIcon}`} width={30} height={30} />
            <span className={styles.cartCount}>{cartItemCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
