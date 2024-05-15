import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../slices/userSlice";
import api from "../api/api"
import {CircularProgress, Stack} from "@mui/material"

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
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
    return (
        <Stack style={{ width: '100%', height: '70vh', justifyContent: 'center', alignItems: 'center' }}>
				<CircularProgress style={{width: "75px"}}/>
			</Stack>
    )
};

export default PrivateRoute;
