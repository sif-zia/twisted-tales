import React, { useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchCurrentUser,
    getLoginStatus,
    getUserStatus,
    getUserError,
} from "../slices/userSlice";

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getLoginStatus);
    const userStatus = useSelector(getUserStatus);
    const userError = useSelector(getUserError);

    useEffect(() => {
        if (userStatus === 'idle') {
            dispatch(fetchCurrentUser());
        }
    }, [userStatus, dispatch]);

    if (userStatus === 'loading') {
        console.log("Loading...");
        return <p>Loading...</p>;
    }

    if (userStatus === 'failed') {
        console.log("Error: ", userError);
        return <p>Error: {userError}</p>;
    }

    console.log("isLoggedIn: ", isLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
