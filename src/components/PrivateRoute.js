import { Navigate } from "react-router-dom";
import { getLoginStatus } from "../slices/userSlice";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(getLoginStatus)
    
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;