import styles from "./NavBar.module.css";
import CartSvg from "../../assets/shopping-cart.svg?react";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.logo}>
          <h2 className={styles.title}>Shopping Site</h2>
        </li>
        <li className={`${styles.link} ${styles.active}`}>Home</li>
        <li className={styles.link}>Shop</li>
        <li className={`${styles.cart} ${styles.cartActive}`}>
          <CartSvg className={`${styles.cartIcon}`} width={30} height={30} />
          <span className={styles.cartCount}>0</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
