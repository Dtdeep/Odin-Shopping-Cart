import { Fragment } from "react";
import NavBar from "../components/NavBar/NavBar";
import { useParams } from "react-router";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage/ShopPage";
import CartPage from "./CartPage/CartPage";
import { useState, useEffect } from "react";

const Layout = () => {
  const { name } = useParams();
  const [cartItems, setCartItems] = useState([{}]);
  const [shoppingItems, setShoppingItems] = useState([{}]);
  const [error, setError] = useState("");
  let Page;

  if (!name) {
    Page = <HomePage />;
  } else if (name === "shop") {
    Page = <ShopPage shoppingItems={shoppingItems} />;
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
      <NavBar currentRoute={name} cartItemCount={10} />
      {Page}
    </Fragment>
  );
};

export default Layout;
