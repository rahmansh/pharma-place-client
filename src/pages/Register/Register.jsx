import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
    const { createUser } = useAuth()
    const { register, handleSubmit } = useForm();

    const axiosPublic = useAxiosPublic();

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
                    const userInfo = {
                        name: username,
                        email: email
                    }
                    axiosPublic.post(`/users`, userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                console.log("User Data Inserted")
                            }
                        })

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
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;