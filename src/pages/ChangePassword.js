import React from "react";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Unstable_Grid2";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../slices/navbarSlice";
import api from "../api/api";
import { getCrrUser } from "../slices/userSlice";

const ChangePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [enableButton, setEnableButton] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const [oldPasswordValidation, setOldPasswordValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [retypePasswordValidation, setRetypePasswordValidation] =
    useState(true);

  useEffect(() => {
    setError(null);
    setSuccess(null);

    if (oldPassword.length && password.length && retypePassword.length) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [oldPassword, password, retypePassword]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowOldPassword = () =>
    setShowOldPassword(!showOldPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  dispatch(setPage("change password"));

  const crrUser = useSelector(getCrrUser);

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

  const sendPasswordChangeRequest = async () => {
    try {
      await api.post(`/user/changePassword/${crrUser}`, {
        oldPassword: oldPassword,
        password: password,
        retypePassword: retypePassword,
      });
      setSuccess("Password Changed Successfully!");
    } catch (error) {
      setError(error?.response?.data.error || "No Response From Server");
      console.error(error);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const isOldPasswordValid = oldPassword.length >= 8;
    const isPasswordValid = password.length >= 8;
    const isRetypePasswordValid = retypePassword === password;

    // Update state for showing validation errors
    setOldPasswordValidation(isOldPasswordValid);
    setPasswordValidation(isPasswordValid);
    setRetypePasswordValidation(isRetypePasswordValid);

    console.log("Old Password Validation", isOldPasswordValid);
    console.log("Password Validation", isPasswordValid);
    console.log("Retype Password Validation", isRetypePasswordValid);

    if (isOldPasswordValid && isPasswordValid && isRetypePasswordValid) {
      await sendPasswordChangeRequest();
    }
  };

  return (
    <div>
      <div className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Account</li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
              >
                Change Password
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
                  Change Password
                </Typography>
              </div>
              <form className="" onSubmit={handleChangePassword}>
                <div className="row">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    {error && (
                      <Grid
                        xs={12}
                        sx={{ marginLeft: 2 }}
                      >
                        <Alert severity="error">
                          {error}
                        </Alert>
                      </Grid>
                    )}
                    {success && (
                      <Grid item xs={12}>
                        <Alert
                          icon={
                            <CheckIcon fontSize="inherit" />
                          }
                          severity="success"
                        >
                          {success}
                        </Alert>
                      </Grid>
                    )}
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
                        <InputLabel htmlFor="outlined-adornment-oldPassword">
                          Old Password
                        </InputLabel>
                        <OutlinedInput
                          value={oldPassword}
                          onChange={(e) =>
                            setOldPassword(
                              e.target.value
                            )
                          }
                          id="outlined-adornment-oldPassword"
                          type={
                            showOldPassword
                              ? "text"
                              : "password"
                          }
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={
                                  handleClickShowOldPassword
                                }
                                onMouseDown={
                                  handleMouseDownPassword
                                }
                                edge="end"
                              >
                                {showOldPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Old Password"
                        />
                        {!oldPasswordValidation && (
                          <FormHelperText
                            sx={{ color: "red" }}
                          >
                            Password contains
                            atleast 8 characters
                          </FormHelperText>
                        )}
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
                          New Password
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
                          label="New Password"
                        />
                        {!passwordValidation && (
                          <FormHelperText
                            sx={{ color: "red" }}
                          >
                            Password must contain
                            atleast 8 characters
                          </FormHelperText>
                        )}
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
                        {!retypePasswordValidation && (
                          <FormHelperText
                            sx={{ color: "red" }}
                          >
                            Passwords do not match
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                  </Grid>

                  <div
                    className="col-12"
                    style={{ marginLeft: "10px" }}
                  >
                    <Button
                      disabled={!enableButton}
                      variant="contained"
                      style={{ margin: "10px 0" }}
                      type="submit"
                    >
                      Change Password
                    </Button>
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

export default ChangePassword;
