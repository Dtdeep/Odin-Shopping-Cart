import { Fragment } from "react";
import NavBar from "../components/NavBar/NavBar";
import { useParams } from "react-router";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage/ShopPage";
import CartPage from "./CartPage/CartPage";
import { useState, useEffect } from "react";

const Layout = () => {
  const { name } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [error, setError] = useState(null);
  let Page;

  const handleAddCart = (productId, quantity) => {
    if (quantity <= 0) return;
    let newCartItem;
    const exists = cartItems.some((product) => product.id === productId);
    if (exists) {
      newCartItem = cartItems.map((cartItem) => {
        if (cartItem.id === productId) {
          return { id: productId, quantity: quantity };
        }
        return cartItem;
      });
    } else {
      newCartItem = [...cartItems, { id: productId, quantity: quantity }];
    }
    console.log(newCartItem);
    setCartItems(newCartItem);
  };

  if (!name) {
    Page = <HomePage />;
  } else if (name === "shop") {
    Page = (
      <ShopPage
        shoppingItems={shoppingItems}
        handleAddCart={handleAddCart}
        error={error}
      />
    );
  } else if (name === "cart") {
    Page = <CartPage />;
  }

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setShoppingItems(data))
      .catch((error) => {
        setError(error);
      });
    return controller.abort();
  });

  return (
    <Fragment>
      <NavBar currentRoute={name} cartItemCount={cartItems.length} />
      {Page}
    </Fragment>
  );
};

export default Layout;
