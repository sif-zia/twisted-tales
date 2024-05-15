import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLoginStatus, loginUser } from "../slices/userSlice";
import api from "../api/api"
import Skeleton from "@mui/material/Skeleton"

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getLoginStatus);
    const [user, setUser] = useState(null)
    useEffect(() => {

        const sendLoginRequest = async () => {
            try {
                const response = await api.get("/user/crr")
                const crrUser = response.data.user
                setUser(crrUser)
            }
            catch (err) {
                console.log(err)
                setUser("Not Found")
            }
        }

        sendLoginRequest()
    }, [])

    if (user != null && user === "Not Found") {
        return <Navigate to="/login" />
    }
    if (user != null) {
        dispatch(loginUser(user))
        return children
    }
    return <Skeleton animation="pulse" sx={{width:"100vw", height:"100vh"}} ></Skeleton>
};

export default PrivateRoute;
