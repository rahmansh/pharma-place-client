import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const isLoggedIn = false;


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        isLoggedIn,
        createUser,
        googleSignIn,
        user,
        loading,
        logOut,
        signInUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    },)

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