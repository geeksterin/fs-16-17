import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Cart from "../pages/Cart/Cart";
import ProductPage from "../pages/ProductPage/ProductPage";
import Header from "../components/Header/Header";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Login from "../pages/Login/Login";
import { useState, createContext, useReducer } from "react";

export const CartContext = createContext();
export const UserContext = createContext();
// - provider - set the data / pass the data
// - consumer - consume the data

// public routes - /, /product
// private routes - /profile, /cart, /account

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//   },
//   {
//     path: "cart",
//     element: (
//       <PrivateRoute>
//         <Cart />
//       </PrivateRoute>
//     ),
//   },
//   {
//     path: "product/:productId",
//     element: <ProductPage />,
//   },
//   {
//     path: "login",
//     element: <Login />,
//   },
// ]);

// const AppRouter = () => {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// };

// lazy loading - 1 bundle - 4 chunk

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
};

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      return { ...state, items: [...state.items, { ...payload, quantity: 1 }] };

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload),
      };

    case CART_ACTION_TYPES.INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case CART_ACTION_TYPES.DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
  }
};

const AppRouter = () => {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default AppRouter;

// https://www.example.com/api/v1/user/2/hello/3?search=hello&page=1
