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
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../layouts/ManageUsers/ManageUsers";
import ManageBanner from "../pages/Dashboard/ManageBanner/ManageBanner";
import UserHome from "../pages/UserHome/UserHome/UserHome";
import Payment from "../pages/Dashboard/Payment/Payment";
import ManageMedicines from "../pages/Dashboard/Seller/ManageMedicines/ManageMedicines";
import PaymentHistory from "../pages/Dashboard/Seller/PaymentHistory/PaymentHistory";
import UserPaymentHistory from "../pages/UserHome/UserPaymentHistory/UserPaymentHistory";

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
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            // normal user routes
            {
                path: "userPaymentHistory",
                element: <UserPaymentHistory />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "payment",
                element: <Payment />
            },

            // seller
            {
                path: "manageMedicines",
                element: <ManageMedicines />
            },
            {
                path: "seller/paymentHistory",
                element: <PaymentHistory />
            },

            // admin only routes
            {
                path: "manageUsers",
                element: <ManageUsers />
            },
            {
                path: "manageBanner",
                element: <ManageBanner />
            }
        ]
    }
]);


export default router;
