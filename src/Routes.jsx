import Layout from "./app/Layout";
import TestPage from "./app/test/TestPage";
const routes = [
  {
    path: "/:name?",
    element: <Layout />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
];

export default routes;
