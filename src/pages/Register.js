import React from "react";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText"
import Grid from "@mui/material/Unstable_Grid2";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../slices/navbarSlice";
import api from "../api/api";
import { loginUser } from "../slices/userSlice";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [retypePasswordValidation, setRetypePasswordValidation] = useState(true);

  useEffect(() => {
    setError(null)
  }, [name, email, password, retypePassword])

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  dispatch(setPage("register"));

  // useEffect(() => {
  //   // Array of JavaScript file paths
  //   const jsFiles = [
  //     "https://unpkg.com/wavesurfer.js@7.7.2",
  //     "assets/js/masonry.pkgd.min.js",
  //   ]; // Add your file paths here

  //   // Load each JavaScript file
  //   jsFiles.forEach((filePath) => {
  //     const script = document.createElement("script");
  //     script.src = filePath;
  //     script.async = true;
  //     document.body.appendChild(script);
  //   });

  //   // Cleanup function
  //   return () => {
  //     jsFiles.forEach((filePath) => {
  //       const script = document.querySelector(`script[src="${filePath}"]`);
  //       if (script) {
  //         document.body.removeChild(script);
  //       }
  //     });
  //   };
  // }, []);

  const navigate = useNavigate();

  const sendAddUserRequest = async () => {
    try {
      await api.post("/user/", {
        name: name,
        email: email,
        password: password,
      });
      console.log("User created");
      navigate("/login");
    } catch (error) {
      setError(error?.response?.data.error || "No Response From Server");
      console.error(error);
    }
  };

  const handleRegisterUser = async (e) => {
    e.preventDefault();
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8;
    const isRetypePasswordValid = retypePassword === password;
  
    // Update state for showing validation errors
    setEmailValidation(isEmailValid);
    setPasswordValidation(isPasswordValid);
    setRetypePasswordValidation(isRetypePasswordValid);
  
    if (isEmailValid && isPasswordValid && isRetypePasswordValid) {
      await sendAddUserRequest();
    }
  };
  

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
                Register
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
                <Typography variant="h2">
                  Create a New Account
                </Typography>
              </div>
              <form className="" onSubmit={handleRegisterUser}>
                <div className="row">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    {error &&
                      <Grid xs={12} sx={{ marginLeft: 2 }}>
                        <Alert severity="error">{error}</Alert>
                      </Grid>
                    }
                    <Grid xs={12}>
                      <FormControl
                        fullWidth
                        sx={{
                          // Override styles based on screen size
                          "@media (max-width: 600px)":
                          {
                            width: "90%",
                          },
                          "@media (max-width: 300px)":
                          {
                            width: "100%",
                          },
                          m: 1,
                        }}
                      >
                        <InputLabel htmlFor="outlined-adornment-Name">
                          Name
                        </InputLabel>
                        <OutlinedInput
                          value={name}
                          onChange={(e) =>
                            setName(e.target.value)
                          }
                          id="outlined-adornment-Name"
                          label="Name"
                        />
                      </FormControl>
                    </Grid>
                    <Grid xs={12}>
                      <FormControl
                        fullWidth
                        sx={{
                          // Override styles based on screen size
                          "@media (max-width: 600px)":
                          {
                            width: "90%",
                          },
                          "@media (max-width: 300px)":
                          {
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
                          onChange={(e) => setEmail(e.target.value)}
                          id="outlined-adornment-Email"
                          label="Email"
                        />
                        {!emailValidation && <FormHelperText sx={{color: "red"}}>Invalid Email</FormHelperText>} 
                      </FormControl>
                    </Grid>
                    <Grid xs={12}>
                      <FormControl
                        variant="outlined"
                        fullWidth
                        sx={{
                          // Override styles based on screen size
                          "@media (max-width: 600px)":
                          {
                            width: "90%",
                          },
                          "@media (max-width: 300px)":
                          {
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
                            setPassword(
                              e.target.value
                            )
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
                        {!passwordValidation && <FormHelperText sx={{color: "red"}}>Password must contain atleast 8 characters</FormHelperText>}
                      </FormControl>
                    </Grid>
                    <Grid xs={12}>
                      <FormControl
                        variant="outlined"
                        fullWidth
                        sx={{
                          // Override styles based on screen size
                          "@media (max-width: 600px)":
                          {
                            width: "90%",
                          },
                          "@media (max-width: 300px)":
                          {
                            width: "100%",
                          },
                          m: 1,
                        }}
                      >
                        <InputLabel htmlFor="outlined-adornment-RetypePassword">
                          Retype Password
                        </InputLabel>
                        <OutlinedInput
                          value={retypePassword}
                          onChange={(e) =>
                            setRetypePassword(
                              e.target.value
                            )
                          }
                          id="outlined-adornment-RetypePassword"
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
                          label="Retype Password"
                        />
                        {!retypePasswordValidation && <FormHelperText sx={{color: "red"}}>Passwords do not match</FormHelperText>}
                      </FormControl>
                    </Grid>
                  </Grid>

                  <div
                    className="col-12"
                    style={{ marginLeft: "10px" }}
                  >
                    <button
                      style={{ margin: "10px 0" }}
                      type="submit"
                      className="eg-btn btn--primary btn--lg"
                    >
                      Register
                    </button>

                    <Typography
                      variant="body1"
                      sx={{ mt: 1 }}
                    >
                      Already have an account?{" "}
                      <Link to="/Login">Login</Link>
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

export default Register;
