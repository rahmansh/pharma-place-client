import { FaHistory, FaHome, FaTags, FaUsers } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { RiAdvertisementFill } from "react-icons/ri";

const Dashboard = () => {

    const [role] = useAdmin();
    console.log(role)

    return (
        <div className="flex min-h-screen font-bold">
            <div className="drawer lg:drawer-open w-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-3">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="text-4xl drawer-button lg:hidden">
                        <MdMenu />
                    </label>
                </div>
                <div className="drawer-side z-50 lg:z-auto lg:relative fixed top-0 left-0 h-full">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        {
                            role === 'Admin' &&
                            <>
                                <li>
                                    <NavLink to={"/dashboard/adminHome"}>
                                        <FaHome />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/manageUsers"}>
                                        <FaUsers />
                                        Manage Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/manageCategory"}>
                                        <FaTags />
                                        Manage Category
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/managePayment"}>Payment Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/salesReport"}>Sales Report</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/manageBanner"}>
                                        <RiAdvertisementFill />
                                        Manage Banner Advertise
                                    </NavLink>
                                </li>
                            </>
                        }
                        {
                            role === 'Seller' &&
                            <>
                                <li>
                                    <NavLink to={"/dashboard/manageMedicines"}>Manage Medicines</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/seller/paymentHistory"}>Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/askAdvertisement"}>Ask For Advertisement</NavLink>
                                </li>
                            </>
                        }
                        {
                            role === 'User' &&
                            <>
                                <li>
                                    <NavLink to={"/dashboard/userPaymentHistory"}>
                                        <FaHistory />
                                        Payment History
                                    </NavLink>
                                </li>
                            </>
                        }
                        <div className="divider"></div>
                        <li>
                            <NavLink to={"/"}>
                                <FaHome /> Home
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;