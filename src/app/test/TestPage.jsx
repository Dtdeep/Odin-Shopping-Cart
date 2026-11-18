import NavBar from "../../components/NavBar/NavBar";
import ProductItemCard from "../../components/ProductItem/ProductItemCard";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
const TestPage = () => {
  return (
    <div>
      <NavBar currentRoute="home" cartItemCount={0} />
      <ProductItemCard />
      <CartItemCard />
    </div>
  );
};

export default TestPage;
