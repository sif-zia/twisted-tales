import React from "react";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'
 

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // Array of JavaScript file paths
    const jsFiles = [
      "https://unpkg.com/wavesurfer.js@7.7.2",
      "assets/js/masonry.pkgd.min.js",
    ]; // Add your file paths here

    // Load each JavaScript file
    jsFiles.forEach((filePath) => {
      const script = document.createElement("script");
      script.src = filePath;
      script.async = true;
      document.body.appendChild(script);
    });

    // Cleanup function
    return () => {
      jsFiles.forEach((filePath) => {
        const script = document.querySelector(`script[src="${filePath}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div>
      <div className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Register</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
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
                <Typography variant="h2">Create a New Account</Typography>
              </div>
              <form className="">
                <div className="row">
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid xs={12}>
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
                        <InputLabel htmlFor="outlined-adornment-Name">
                          Name
                        </InputLabel>
                        <OutlinedInput
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
                          id="outlined-adornment-Email"
                          label="Email"
                        />
                      </FormControl>
                    </Grid>
                    <Grid xs={12}>
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
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
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
                      </FormControl>
                    </Grid>
                    <Grid xs={12}>
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
                        <InputLabel htmlFor="outlined-adornment-RetypePassword">
                          Retype Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-RetypePassword"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
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
                      </FormControl>
                    </Grid>
                  </Grid>

                  <div className="col-12" style={{ marginLeft: "10px" }}>
                    <button
                      style={{ margin: "10px 0" }}
                      type="submit"
                      className="eg-btn btn--primary btn--lg"
                    >
                      Register
                    </button>

                    <Typography variant="body1" sx={{ mt: 1 }}>
                      Already have an account? <Link to="/Login">Login</Link>
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
