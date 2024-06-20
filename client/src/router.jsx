import { createBrowserRouter } from "react-router-dom";

import About from "./pages/About/About";
import Navbar from "./components/Navigation/Navbar";
import ErrorPage from "./pages/Error/ErrorPage";
import Pizza from "./pages/Menu/Pizza/Pizza";
import Desserts from "./pages/Menu/Desserts/Desserts";
import Salads from "./pages/Menu/Salads/Salads";
import Drinks from "./pages/Menu/Drinks/Drinks";
import Client from "./pages/Client/Client";
import Admin from "./pages/Admin/Admin";
import Cart from "./pages/Cart/Cart";
import Menu from "./pages/Menu/Menu";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Favorites from "./pages/Favorites/Favorites";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import OrderComplete from "./pages/OrderComplete/OrderComplete";
import ProductCreator from "./pages/ProductCreator/ProductCreator";
import SelectedOrder from "./pages/SelectedOrder/SelectedOrder";
import LoginPage from "./pages/Login/Login";
import History from "./pages/History/History";
import AdminSelectedOrder from "./pages/SelectedOrder/AdminSelectedOrder";
import RequireAuth from "./components/RequireAuth/RequireAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "pizza",
        element: <Pizza />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "desserts",
        element: <Desserts />,
      },
      {
        path: "salads",
        element: <Salads />,
      },
      {
        path: "drinks",
        element: <Drinks />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "favorites",
        element: (
          <RequireAuth>
            <Favorites />
          </RequireAuth>
        ),
      },
      {
        path: "client-history",
        element: (
          <RequireAuth>
            <History />
          </RequireAuth>
        ),
      },
      {
        path: "order-history",
        element: (
          <RequireAuth>
            <Client />
          </RequireAuth>
        ),
      },
      {
        path: "admin",
        element: (
          <RequireAuth>
            <Admin />
          </RequireAuth>
        ),
      },
      {
        path: "cart",
        element: (
            <Cart />
        ),
      },
      {
        path: "order-complete",
        element: (
          <RequireAuth>
            <OrderComplete />
          </RequireAuth>
        ),
      },
      {
        path: "selected-order",
        element: (
          <RequireAuth>
            <SelectedOrder />
          </RequireAuth>
        ),
      },
      {
        path: "selected-admin-order",
        element: (
          <RequireAuth>
            <AdminSelectedOrder />
          </RequireAuth>
        ),
      },
      {
        path: "create-product",
        element: (
          <RequireAuth>
            <ProductCreator />
          </RequireAuth>
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
