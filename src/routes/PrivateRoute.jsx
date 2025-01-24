import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    location = useLocation();

    if (loading) {
        return <h2>Loading....</h2>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;