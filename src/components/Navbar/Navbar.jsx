import { Link } from 'react-router-dom';
import navImg from '../../assets/images/pharma-place.webp'
import useAuth from '../../hooks/useAuth';
import { IoCartOutline } from "react-icons/io5";
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {
    const { user } = useAuth();
    const { logOut } = useAuth();

    const [role] = useAdmin();
    console.log(role)


    const handleLogout = () => {
        logOut().then(() => {
            console.log("Sign-out successful.")
        }).catch((error) => {
            console.log(error)
            console.log("An error happened while loggin Out user")
        })
    }


    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/shop"}>Shop</Link></li>
        {!user && <li><a>Join US</a></li>}
        <li><Link to={"/dashboard/cart"}><button><IoCartOutline className='text-primary text-2xl' /></button></Link></li>

    </>

    return (
        <div className='w-full bg-base-100'>
            <div className='max-w-screen-2xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <Link to={"/"} className="btn btn-ghost text-xl">
                            <img className='w-10 rounded-xl' src={navImg} alt="" />
                            PharmaPlace
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="m-1">
                                        <div className="avatar">
                                            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li><a>Update Profile</a></li>
                                        {role === "Admin" && <li><Link to={"/dashboard/adminHome"}>Dashboard</Link></li>}

                                        {role === "Seller" && <li><Link to={"/dashboard/manageMedicines"}>Dashboard</Link></li>}
                                        {role === "User" && <li><Link to={"/dashboard/userPaymentHistory"}>Dashboard</Link></li>}
                                        <li><button onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            </> : <>
                                <Link to={"/login"}><button className='btn btn-primary'>Login</button></Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;