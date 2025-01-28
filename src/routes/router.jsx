import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home/Home";
import Cart from "../pages/Cart/Cart";
import Shop from "../pages/Shop/Shop";
import MedicineCategory from "../pages/MedicineCategory/MedicineCategory";
import Dashboard from "../layouts/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/medicine/:category",
                element: <MedicineCategory />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
]);


export default router;
