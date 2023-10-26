import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Store from "./Store";
import Home from "./Home";
import Cart from "./Cart";
import Header from "./Header";
import ProductPage from "./ProductPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "store/",
      element: (
        <>
          <Header />
          <Store />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "cart/",
      element: (
        <>
          <Header />
          <Cart />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "product/:id",
      element: (
        <>
          <Header />
          <ProductPage />
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
