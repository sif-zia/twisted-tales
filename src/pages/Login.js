import React from "react";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom";
import { Typography } from "@mui/material";

const Login = () => {
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
                <a href="#">Login</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
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
              <form className="">
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
                        id="outlined-adornment-Email"
                        label="Email"
                      />
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
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        
                        label="Password"
                      />
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

                    <Typography variant="body1" sx={{ mt: 1 }}>
                      Don't have any account? <Link to="/Register">Register</Link>
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
