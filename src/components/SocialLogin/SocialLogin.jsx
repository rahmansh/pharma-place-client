import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();

    // console.log(`Location from Social Login: ${location.state?.from}`);

    let from = location.state?.from?.pathname || "/";

    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    email: user?.email,
                    name: user?.displayName,
                    role: 'User'
                }

                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data)
                    })
                navigate(from, { replace: true })
            }).catch((error) => {
                console.log("Error Code: ", error.code);
                console.log("Error Message: ", error.message);
            })
    }

    return (
        <div>
            <div className="text-center">
                <div className="avatar pb-4">
                    <button onClick={handleGoogleSignIn} className="p-4 bg-primary text-white rounded-md">
                        <FaGoogle />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;