import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
    const isLoggedIn = false;


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        isLoggedIn,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
    // Other prop validations can continue from here
};

export default AuthProvider;