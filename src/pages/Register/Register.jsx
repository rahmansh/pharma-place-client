import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { createUser } = useAuth()
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = data => {
        const { email, password, url, username } = data;
        // console.log(email, password, url)
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                updateProfile(auth.currentUser, {
                    displayName: username,
                    photoURL: url
                }).then(() => {
                    console.log("Profile Updated!")
                }).catch((error) => {
                    console.log(error)
                    console.log("An Error Occured While Updating")
                })
            })
            .catch((error) => {
                console.log("Error Code: ", error.code)
                console.log("Error Message: ", error.message);
            })
    }

    // console.log(watch("email"));
    // console.log(watch("password"));

    return (
        <div>
            <Helmet>
                <title>PharmaPlace | Login</title>
            </Helmet>
            <Navbar />
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            {/* <input type="email" placeholder="email" className="input input-bordered" required /> */}
                            <input type="text" placeholder="Username" className="input input-bordered" {...register("username")} />
                        </div>
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