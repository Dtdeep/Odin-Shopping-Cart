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
    <div className={styles.cardRoot}>
      <img
        className={styles.cardImage}
        src={imagePath}
        alt="manhattan cafe in black dress"
      />
      <h3>{productName}</h3>
      <p>₱{productPrice}</p>
      <div>
        <button
          data-testid="subtractBtn"
          onClick={() => handleQuantityButton("subtract")}
        >
          -
        </button>
        <input
          className={styles.inputBox}
          type="text"
          value={currentQuantity}
          onChange={handleInput}
        />
        <button
          data-testid="addBtn"
          onClick={() => handleQuantityButton("add")}
        >
          +
        </button>
      </div>
      <button onClick={() => handleAddCart(productId, currentQuantity)}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItemCard;
