import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductsPage from "./components/products/products-page.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./components/products/cart-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    loader: "",
    children: [
      // {
      //   path: "/products",
      //   element: <ProductsPage />,
      //   loader: '',
      // },
    ],
  },
  {
    path: "/products/:categoryName",
    element: <ProductsPage />,
  },
]);

const AppProviders = () =>(
  <CartProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </CartProvider>
)

ReactDOM.createRoot(document.getElementById("root")).render(<AppProviders />);
