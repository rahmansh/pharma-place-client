import AuthContext from "./AuthContext";
import PropTypes from 'prop-types';

const AuthProvider = ({ children }) => {

    const user = "Shihab"

    const authInfo = {
        user
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