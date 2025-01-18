import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import useAuth from "../hooks/useAuth";

const HomeLayout = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div>
            <Navbar />
            <div className="max-w-screen-2xl mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default HomeLayout;