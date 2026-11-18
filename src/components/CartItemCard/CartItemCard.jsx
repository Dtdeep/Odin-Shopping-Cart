import styles from "./CartItemCard.module.css";

const CartItemCard = () => {
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItemImage}
        src="src/assets/cafe.jpg"
        alt="manhattan cafe in black dress"
      />
      <h3>Manhattan Cafe</h3>
      <button>-</button>
      <input className={styles.cartItemQuantity} type="text" />
      <button>+</button>
      <p>₱200.00</p>

      <button>Trash svg</button>
    </div>
  );
};

export default CartItemCard;
