import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar/Navbar";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = data => {
        const { email, password } = data;
        console.log(email, password)
    }

    // console.log(watch("email"));
    // console.log(watch("password"));


    return (
        <div>
            <Navbar />
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {/* <input type="email" placeholder="email" className="input input-bordered" required /> */}
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p className="mt-4">New User? <Link to={"/register"} className="text-orange-500 font-bold">Register</Link></p>
                        </div>
                    </form>
                    <div className="text-center">
                        <div className="avatar pb-4">
                            <button className="p-4 bg-primary text-white rounded-md">
                                <FaGoogle />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;