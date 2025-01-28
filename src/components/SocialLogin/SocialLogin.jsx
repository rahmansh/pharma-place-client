import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    email: user?.email,
                    name: user?.displayName
                }

                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data)
                    })
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