import { useContext } from "react";
import CartContext from "../CartContext";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
const CartPage = () => {
  const { cartItems, shoppingItems } = useContext(CartContext);

  return (
    <main>
      {cartItems.map((cartItem) => {
        const productDetail = shoppingItems.find(
          (product) => product.id == cartItem.id,
        );
        return (
          <CartItemCard
            productId={productDetail.id}
            imagePath={productDetail.image}
            productName={productDetail.title}
            productValue={cartItem.quantity}
            productPrice={productDetail.price}
          />
        );
      })}
    </main>
  );
};

export default CartPage;
