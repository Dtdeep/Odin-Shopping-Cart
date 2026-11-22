import styles from "./ProductItemCard.module.css";
import { useState } from "react";

const ProductItemCard = ({
  productId,
  imagePath,
  productName,
  productPrice,
  handleAddCart,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const handleQuantityButton = (command) => {
    if (command === "subtract") {
      if (currentQuantity <= 0) return;
      setCurrentQuantity(currentQuantity - 1);
    } else if (command === "add") {
      setCurrentQuantity(currentQuantity + 1);
    }
  };

  const handleInput = (e) => {
    const raw = e.target.value;

    const value = Number(raw);
    if (Number.isNaN(value)) return;
    setCurrentQuantity(value);
  };

  return (
    <article className={styles.cardRoot}>
      <div className={styles.imageContainer}>
        <img className={styles.cardImage} src={imagePath} alt={productName} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{productName}</h3>
        <p className={styles.productPrice}>₱{productPrice}</p>
        <div className={styles.quantityRow}>
          <button
            className={styles.quantityButton}
            data-testid="subtractBtn"
            onClick={() => handleQuantityButton("subtract")}
            type="button"
          >
            −
          </button>
          <input
            className={styles.inputBox}
            type="text"
            value={currentQuantity}
            onChange={handleInput}
            aria-label="Quantity"
          />
          <button
            className={styles.quantityButton}
            data-testid="addBtn"
            onClick={() => handleQuantityButton("add")}
            type="button"
          >
            +
          </button>
        </div>
        <button
          className={styles.addButton}
          onClick={() => {
            handleAddCart(productId, currentQuantity);
            setCurrentQuantity(0);
          }}
          type="button"
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ProductItemCard;
