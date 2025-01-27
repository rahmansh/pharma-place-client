import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
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