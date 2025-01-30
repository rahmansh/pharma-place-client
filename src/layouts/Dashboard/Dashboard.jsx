import { FaHome } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const role = 'admin';

    return (
        <div className="flex min-h-screen">
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
                            role === 'admin' &&
                            <>
                                <li>
                                    <NavLink to={"/dashboard/manageUser"}>Manage Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/manageCategory"}>Manage Category</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/paymentManagement"}>Payment Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/salesReport"}>Sales Report</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/manageBanner"}>Manage Banner Advertise</NavLink>
                                </li>
                            </>
                        }
                        {
                            role === 'seller' &&
                            <>
                                <li>
                                    <NavLink to={"/dashboard/manageMedicines"}>Manage Medicines</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/paymentHistory"}>Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/askAdvertisement"}>Ask For Advertisement</NavLink>
                                </li>
                            </>
                        }
                        {
                            role === 'user' &&
                            <>
                                <li>
                                    <NavLink to={"/dashboard/manageMedicines"}>Manage Medicines</NavLink>
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