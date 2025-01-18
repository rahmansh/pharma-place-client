import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = data => {
        const { email, password, url } = data;
        console.log(email, password, url)
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
                                <span className="label-text">Photo URL</span>
                            </label>
                            {/* <input type="email" placeholder="email" className="input input-bordered" required /> */}
                            <input type="text" placeholder="email" className="input input-bordered" {...register("url")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p className="mt-4">Already User? <Link to={"/login"} className="text-orange-500 font-bold">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;