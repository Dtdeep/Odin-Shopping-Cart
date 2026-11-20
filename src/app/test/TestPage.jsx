import NavBar from "../../components/NavBar/NavBar";
import ProductItemCard from "../../components/ProductItem/ProductItemCard";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
import { useState } from "react";
const TestPage = () => {
  const [input, setInput] = useState("");
  const handleAddCart = (id, quantity) => {
    console.log(id, "+", quantity);
  };

  const handleChange = (id, e) => {
    console.log(id);
    setInput(e.target.value);
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
      <CartItemCard
        productId={1}
        imagePath="src/assets/cafe.jpg"
        productName="Manhattan Cafe"
        productPrice="200"
        productValue={input}
        handleInput={handleChange}
      />
    </div>
  );
};

export default TestPage;
