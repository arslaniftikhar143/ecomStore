import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./screens/App";
import RootLayout from "./layouts/RootLayout";
import "./index.css";
import Catalog from "./screens/Catalog";
import Pdetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import CheckOut from "./screens/CheckOut";
import Todo from "./screens/Todo";
import { Provider } from "react-redux";
import store from "./features/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="product-details" element={<Pdetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
      <Route path="todo" element={<Todo />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
