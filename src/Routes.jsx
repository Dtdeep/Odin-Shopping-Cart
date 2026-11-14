import CartPage from "./app/CartPage/CartPage.jsx";
import HomePage from "./app/HomePage.jsx";
import ShopPage from "./app/ShopPage/ShopPage.jsx";
import TestPage from "./app/test/TestPage.jsx";
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
  {
    path: "/test",
    element: <TestPage />,
  },
];

export default routes;
