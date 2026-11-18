import styles from "./ProductItemCard.module.css";

const ProductItemCard = () => {
  return (
    <div className={styles.cardRoot}>
      <img
        className={styles.cardImage}
        src="src/assets/cafe.jpg"
        alt="manhattan cafe in black dress"
      />
      <h3>Manhattan Cafe</h3>
      <p>₱200</p>
      <div>
        <button>-</button>
        <input className={styles.inputBox} type="text" />
        <button>+</button>
      </div>
      <button>Add To Cart</button>
    </div>
  );
};

export default ProductItemCard;
