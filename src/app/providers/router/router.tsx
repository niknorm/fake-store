import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../../pages/Home/ui/Home";
import { Products } from "../../../pages/Products/ui/Products";
import Layout from "../../layouts/Layout";
import About from "../../../pages/About/ui/About";
import NotFoundPage from "../../../pages/NotFoundPage/ui/NotFoundPage";
import { CartPage } from "../../../pages/CartPage/ui/CartPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
