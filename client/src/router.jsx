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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: "/pizza",
                element: <Pizza />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/desserts",
                element: <Desserts />
            },
            {
                path: "/salads",
                element: <Salads />
            },
            {
                path: "/drinks",
                element: <Drinks />
            },
            {
                path: "/product-details",
                element: <ProductDetails />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/client",
                element: <Client />
            },
            {
                path: "/admin",
                element: <Admin />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/order-complete",
                element: <OrderComplete />
            },
            {
                path: "/selected-order",
                element: <SelectedOrder />
            },
            {
                path: "/create-product",
                element: <ProductCreator />
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
])