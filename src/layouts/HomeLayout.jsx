import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";

const HomeLayout = () => {

    return (
        <div>
            <Helmet>
                <title>PharmaPlace | Home</title>
            </Helmet>
            <Navbar />
            <div className="max-w-screen-2xl mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default HomeLayout;