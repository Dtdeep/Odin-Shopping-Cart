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
    <div className={styles.cartItem}>
      <img
        className={styles.cartItemImage}
        src={imagePath}
        alt="product image"
      />
      <h3>{productName}</h3>
      <button
        data-testid="subtractBtn"
        onClick={() => {
          handleQuantityButton(productId, "subtract");
        }}
      >
        -
      </button>
      <input
        onChange={(e) => handleCartInput(productId, e)}
        className={styles.cartItemQuantity}
        type="text"
        value={productValue}
      />
      <button
        data-testid="addBtn"
        onClick={() => {
          handleQuantityButton(productId, "add");
        }}
      >
        +
      </button>
      <p>₱{productPrice * productValue}</p>

      <button
        data-testid="trashBtn"
        onClick={() => handleCartDelete(productId)}
      >
        <TrashSvg className={styles.trashSvg} width={25} height={25} />
      </button>
    </div>
  );
};

export default CartItemCard;
