import { Fragment } from "react";
import NavBar from "../components/NavBar/NavBar";
import { useParams } from "react-router";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage/ShopPage";
import CartPage from "./CartPage/CartPage";

const Layout = () => {
  const { name } = useParams();
  let Page;
  if (!name) {
    Page = <HomePage />;
  } else if (name === "shop") {
    Page = <ShopPage />;
  } else if (name === "cart") {
    Page = <CartPage />;
  }
  return (
    <Fragment>
      <NavBar currentRoute={name} cartItemCount={10} />
      {Page}
    </Fragment>
  );
};

export default Layout;
