import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const isLoggedIn = false;

    // axios
    const axiosPublic = useAxiosPublic();


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
        setLoading,
        logOut,
        signInUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            // storing jsonwebtoken in local storage
            if (user) {
                const userInfo = {
                    email: user.email
                }

                axiosPublic.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
            }

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