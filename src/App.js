import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/Layout";
import VisitorLayout from "./components/VisitorLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Chapter from "./pages/Chapter";

function App() {
  useEffect(() => {
    // Array of JavaScript file paths
    const jsFiles = [
      "assets/js/jquery-3.6.0.min.js",
      "assets/js/jquery-ui.js",
      "assets/js/bootstrap.bundle.min.js",
      "assets/js/swiper-bundle.min.js",
      "assets/js/jquery.fancybox.min.js",
      "assets/js/gsap.min.js",
      "assets/js/TweenMax.min.js",
      "assets/js/jquery.fancybox.min.js",
      "assets/js/slick.js",
      "assets/js/jquery.marquee.min.js",
      "assets/js/jquery.nice-select.js",
      "assets/js/jquery.counterup.min.js",
      "assets/js/main.js",
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
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Explore" element={<Explore />} />
          <Route path="Chapter" element={<Chapter />} />
        </Route>
        <Route path="/Login" element={<VisitorLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/Register" element={<VisitorLayout />}>
          <Route index element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
