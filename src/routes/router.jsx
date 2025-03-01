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
import Payment from "../pages/Dashboard/Payment/Payment";
import ManageMedicines from "../pages/Dashboard/Seller/ManageMedicines/ManageMedicines";
import PaymentHistory from "../pages/Dashboard/Seller/PaymentHistory/PaymentHistory";
import UserPaymentHistory from "../pages/UserHome/UserPaymentHistory/UserPaymentHistory";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageCategory from "../pages/Dashboard/Admin/ManageCategory/ManageCategory";
import AdminPaymentManagement from "../pages/Dashboard/Admin/AdminPaymentManagement/AdminPaymentManagement";
import AskAdvertisement from "../pages/Dashboard/Seller/AskAdvertisement/AskAdvertisement";
import SalesReport from "../pages/Dashboard/Admin/SalesReport/SalesReport";
import SellerHome from "../pages/Dashboard/Seller/SellerHome/SellerHome";
import ManageBanner from "../pages/Dashboard/Admin/ManageBanner/ManageBanner";

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
                path: "sellerHome",
                element: <SellerHome />
            },
            {
                path: "manageMedicines",
                element: <ManageMedicines />
            },
            {
                path: "seller/paymentHistory",
                element: <PaymentHistory />
            },
            {
                path: "askAdvertisement",
                element: <AskAdvertisement />
            },
            // admin only routes
            {
                path: "adminHome",
                element: <AdminHome />
            },
            {
                path: "manageUsers",
                element: <ManageUsers />
            },
            {
                path: "manageCategory",
                element: <ManageCategory />
            },
            {
                path: "managePayment",
                element: <AdminPaymentManagement />
            },
            {
                path: "salesReport",
                element: <SalesReport />
            },
            {
                path: "manageBanner",
                element: <ManageBanner />
            }
        ]
    }
]);


export default router;
