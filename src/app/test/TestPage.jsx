import NavBar from "../../components/NavBar/NavBar";
import ProductItemCard from "../../components/ProductItem/ProductItemCard";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
const TestPage = () => {
  const handleAddCart = (id, quantity) => {
    console.log(id, "+", quantity);
  };
  return (
    <div>
      <NavBar currentRoute="home" cartItemCount={0} />
      <ProductItemCard
        productId={1}
        imagePath="src/assets/cafe.jpg"
        productName="Manhattan Cafe"
        productPrice="200"
        handleAddCart={handleAddCart}
      />
      <CartItemCard />
    </div>
  );
};

export default TestPage;
