import CartPage from "./app/CartPage/CartPage.jsx";
import HomePage from "./app/HomePage.jsx";
import ShopPage from "./app/ShopPage/ShopPage.jsx";
const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
];

export default routes;
