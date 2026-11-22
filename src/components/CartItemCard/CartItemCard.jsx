import styles from "./CartItemCard.module.css";
import TrashSvg from "../../assets/trash-svg.svg?react";
import HandlerContext from "../../app/HandlerContext";
import { useContext } from "react";

const CartItemCard = ({
  productId,
  imagePath,
  productName,
  productValue,
  productPrice,
}) => {
  const { handleQuantityButton, handleCartInput, handleCartDelete } =
    useContext(HandlerContext);

  return (
    <article className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img
          className={styles.cartItemImage}
          src={imagePath}
          alt={productName}
        />
      </div>

      <h3 className={styles.productTitle} title={productName}>
        {productName}
      </h3>

      <div className={styles.quantityRow}>
        <button
          className={styles.quantityButton}
          data-testid="subtractBtn"
          onClick={() => handleQuantityButton(productId, "subtract")}
          type="button"
        >
          −
        </button>
        <input
          onChange={(e) => handleCartInput(productId, e)}
          className={styles.cartItemQuantity}
          type="text"
          value={productValue}
          aria-label="Quantity"
        />
        <button
          className={styles.quantityButton}
          data-testid="addBtn"
          onClick={() => handleQuantityButton(productId, "add")}
          type="button"
        >
          +
        </button>
      </div>

      <p className={styles.productPrice}>₱{productPrice * productValue}</p>

      <button
        className={styles.trashButton}
        data-testid="trashBtn"
        onClick={() => handleCartDelete(productId)}
        type="button"
        aria-label="Remove item"
      >
        <TrashSvg className={styles.trashSvg} width={25} height={25} />
      </button>
    </article>
  );
};

export default CartItemCard;
