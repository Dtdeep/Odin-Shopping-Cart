import { Fragment } from "react";
import NavBar from "../components/NavBar/NavBar";
import { useParams } from "react-router";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage/ShopPage";
import CartPage from "./CartPage/CartPage";
import { useState, useEffect } from "react";
import CartShopContext from "./CartContext";
import HandlerContext from "./HandlerContext";

const Layout = () => {
  const { name } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [errorShop, setErrorShop] = useState(null);
  let Page;

  const handleAddCart = (productId, quantity) => {
    if (quantity <= 0) return;
    let newCartItem;
    const exists = cartItems.some((product) => product.id === productId);
    if (exists) {
      newCartItem = cartItems.map((cartItem) => {
        if (cartItem.id === productId) {
          return { id: productId, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      });
    } else {
      newCartItem = [...cartItems, { id: productId, quantity: quantity }];
    }
    console.log(newCartItem);
    setCartItems(newCartItem);
  };

  const handleQuantityButton = (productId, command) => {
    const newCartItem = cartItems.map((cartItem) => {
      if (cartItem.id !== productId) {
        return cartItem;
      }
      if (command === "add") {
        return { id: productId, quantity: cartItem.quantity + 1 };
      }
      if (command === "subtract") {
        return { id: productId, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });

    setCartItems(newCartItem);
  };

  const handleCartInput = (productId, e) => {
    const raw = e.target.value;
    const value = Number(raw);
    if (Number.isNaN(value)) return;

    const newCartItem = cartItems.map((cartItem) => {
      if (cartItem.id === productId) {
        return { id: productId, quantity: value };
      }

      return cartItem;
    });

    setCartItems(newCartItem);
  };

  const handleCartDelete = (productId) => {
    const newCartItem = cartItems.filter((cartItem) => {
      return cartItem.id !== productId;
    });
    setCartItems(newCartItem);
  };

  if (!name) {
    Page = <HomePage />;
  } else if (name === "shop") {
    Page = (
      <ShopPage
        shoppingItems={shoppingItems}
        handleAddCart={handleAddCart}
        error={errorShop}
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
        setErrorShop(error);
      });
    return controller.abort();
  }, []);

  return (
    <Fragment>
      <NavBar currentRoute={name} cartItemCount={cartItems.length} />
      <HandlerContext
        value={{
          handleQuantityButton: handleQuantityButton,
          handleCartInput: handleCartInput,
          handleCartDelete: handleCartDelete,
        }}
      >
        <CartShopContext
          value={{
            cartItems: cartItems,
            shoppingItems: shoppingItems,
          }}
        >
          {Page}
        </CartShopContext>
      </HandlerContext>
    </Fragment>
  );
};

export default Layout;
