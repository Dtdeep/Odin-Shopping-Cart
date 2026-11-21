import { useContext } from "react";
import CartShopContext from "../CartContext";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
const CartPage = () => {
  const { cartItems, shoppingItems } = useContext(CartShopContext);

  return (
    <main>
      {cartItems.map((cartItem) => {
        const productDetail = shoppingItems.find(
          (product) => product.id == cartItem.id,
        );
        return (
          <CartItemCard
            key={productDetail.id}
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
