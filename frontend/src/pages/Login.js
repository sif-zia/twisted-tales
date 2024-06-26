import React from "react";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import Alert from "@mui/material/Alert";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPage } from "../slices/navbarSlice";
import { loginUser } from "../slices/userSlice";
import api from "../api/api";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [emailValidation, setEmailValidation] = useState(true);
    const [passwordValidation, setPasswordValidation] = useState(true);

    useEffect(() => {
        setError(null)
    }, [email, password])

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const sendLoginRequest = async (email, password) => {
        try {
            const response = await api.post("/user/login", {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                dispatch(loginUser(response.data.user));
                navigate("/");
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error || "An error occurred");
            } else if (err.request) {
                setError("No response received from server");
            } else {
                setError(err);
            }
        }
    };

    const handleLoginAttempt = async (e) => {
        e.preventDefault();
    
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const isEmailValid = emailRegex.test(email);
        const isPasswordValid = password.length >= 8;
    
        setEmailValidation(isEmailValid);
        setPasswordValidation(isPasswordValid);
    
        if (isEmailValid && isPasswordValid) {
            await sendLoginRequest(email, password);
        }
    };
    

    dispatch(setPage("login"));

    // useEffect(() => {
    //     // Array of JavaScript file paths
    //     const jsFiles = [
    //         "https://unpkg.com/wavesurfer.js@7.7.2",
    //         "assets/js/masonry.pkgd.min.js",
    //     ]; // Add your file paths here

    //     // Load each JavaScript file
    //     jsFiles.forEach((filePath) => {
    //         const script = document.createElement("script");
    //         script.src = filePath;
    //         script.async = true;
    //         document.body.appendChild(script);
    //     });

    //     // Cleanup function
    //     return () => {
    //         jsFiles.forEach((filePath) => {
    //             const script = document.querySelector(
    //                 `script[src="${filePath}"]`
    //             );
    //             if (script) {
    //                 document.body.removeChild(script);
    //             }
    //         });
    //     };
    // }, []);

    return (
        <div>
            <div className="breadcrumb-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Account</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Login
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section className="contact-section pt-100 pb-100">
                <div className="container">
                    <div className="row gy-4 justify-content-center align-items-center">
                        <div className="col-lg-7">
                            <div className="form-title">
                                <h2>Login to Your Account</h2>
                            </div>
                            {error && <Alert severity="error">{error}</Alert>}
                            <form className="" onSubmit={handleLoginAttempt}>
                                <div className="row">
                                    <div style={{ padding: "10px 0" }}>
                                        <FormControl
                                            fullWidth
                                            sx={{
                                                // Override styles based on screen size
                                                "@media (max-width: 600px)": {
                                                    width: "90%",
                                                },
                                                "@media (max-width: 300px)": {
                                                    width: "100%",
                                                },
                                                m: 1,
                                            }}
                                        >
                                            <InputLabel htmlFor="outlined-adornment-Email">
                                                Email
                                            </InputLabel>
                                            <OutlinedInput
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                id="outlined-adornment-Email"
                                                label="Email"
                                            />
                                            {!emailValidation && <FormHelperText sx={{color: "red"}}>Invalid Email</FormHelperText>}
                                        </FormControl>
                                    </div>
                                    <div style={{ padding: "10px 0" }}>
                                        <FormControl
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                // Override styles based on screen size
                                                "@media (max-width: 600px)": {
                                                    width: "90%",
                                                },
                                                "@media (max-width: 300px)": {
                                                    width: "100%",
                                                },
                                                m: 1,
                                            }}
                                        >
                                            <InputLabel htmlFor="outlined-adornment-password">
                                                Password
                                            </InputLabel>
                                            <OutlinedInput
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                id="outlined-adornment-password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={
                                                                handleClickShowPassword
                                                            }
                                                            onMouseDown={
                                                                handleMouseDownPassword
                                                            }
                                                            edge="end"
                                                        >
                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                            {!passwordValidation && <FormHelperText sx={{color: "red"}}>Password must contain atlest 8 characters</FormHelperText>}
                                        </FormControl>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            style={{ margin: "10px 0" }}
                                            type="submit"
                                            className="eg-btn btn--primary btn--lg"
                                        >
                                            Login
                                        </button>

                                        <Typography
                                            variant="body1"
                                            sx={{ mt: 1 }}
                                        >
                                            Don't have any account?{" "}
                                            <Link to="/register">Register</Link>
                                        </Typography>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
