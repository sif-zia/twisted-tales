import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

import Layout from "./components/Layout";
import VisitorLayout from "./components/VisitorLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Chapter from "./pages/Chapter";
import Search from "./pages/Search";
import AddChapter from "./pages/AddChapter";
import AddStory from "./pages/AddStory";
import UserDetails from "./pages/UserDetails";
import PrivateRoute from "./components/PrivateRoute";
import StoryRoadmap from "./pages/StoryRoadmap";
import ChangePassword from "./pages/ChangePassword";

import { CircularProgress, Stack } from "@mui/material";

import { loginUser } from "./slices/userSlice";
import UpdateProfile from "./pages/UpdateProfile";

import api from "./api/api";

function App() {
  // useEffect(() => {
  //   // Array of JavaScript file paths
  //   const jsFiles = [
  //     "assets/js/jquery-3.6.0.min.js",
  //     "assets/js/jquery-ui.js",
  //     "assets/js/bootstrap.bundle.min.js",
  //     "assets/js/swiper-bundle.min.js",
  //     "assets/js/jquery.fancybox.min.js",
  //     "assets/js/gsap.min.js",
  //     "assets/js/TweenMax.min.js",
  //     "assets/js/jquery.fancybox.min.js",
  //     "assets/js/slick.js",
  //     "assets/js/jquery.marquee.min.js",
  //     "assets/js/jquery.nice-select.js",
  //     "assets/js/jquery.counterup.min.js",
  //     "assets/js/main.js",
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
  const dispatch = useDispatch()

  const [user, setUser] = useState(null)
  useEffect(() => {

    const sendLoginRequest = async () => {
      try {
        const response = await api.get("/user/crr")
        const crrUser = response.data.user
        setUser(crrUser)
        dispatch(loginUser(crrUser))
      }
      catch (err) {
        console.log(err)
        setUser("User not Found")
      }
    }

    sendLoginRequest()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "2rem",
        fontWeight: "bold",
        // Add other styles as needed
      },
      h2: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        // Add other styles as needed
      },
      h3: {
        fontFamily: "Satoshi,sans-serif",
        fontSize: "40px",
        color: "black",
        fontWeight: "bold",
      },
      subtitle2: {
        fontFamily: "var(--font-inter)",
        fontStyle: "italic",
        fontWeight: "500",
        fontSize: "17px",
        textTransform: "capitalize",
        color: "var(--primary-one)",
      },

    },

    palette: {
      primary: {
        main: "#ff4c60",
      },
      secondary: {
        main: "#F2F2DE",
      },
    },
  });
  const responsiveTheme = responsiveFontSizes(theme);

  return (
    <>
      {user === null ?
        <Stack sx={{ width: "100%", height: "90vh", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress sx={{ color: "red", width: "75px" }} />
        </Stack> :
        <ThemeProvider theme={responsiveTheme}>
          < Routes >
            <Route path="/" element={<Layout />}>
              <Route exact path="/" element={<Explore />} />
              <Route path="story/:storyId/chapter/:chapterId" element={<PrivateRoute><Chapter /></PrivateRoute>} />
              <Route path="story/:storyId/addChapter" element={<PrivateRoute><AddChapter /></PrivateRoute>} />
              <Route path="story/:storyId" element={<PrivateRoute><StoryRoadmap /></PrivateRoute>} />
              <Route path="userDetails/:userId" element={<PrivateRoute><UserDetails /></PrivateRoute>} />
              <Route path="search" element={<PrivateRoute><Search /></PrivateRoute>} />
              <Route path="addStory" element={<PrivateRoute><AddStory /></PrivateRoute>} />
              <Route path="updateProfile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
              <Route path="changePassword" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
            </Route>
            <Route path="/login" element={<VisitorLayout />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/register" element={<VisitorLayout />}>
              <Route index element={<Register />} />
            </Route>
          </Routes >
        </ThemeProvider >
      }
    </>
  );
}

export default App;
