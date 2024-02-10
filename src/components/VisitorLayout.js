import React from "react";
import { Outlet } from "react-router-dom";

const VisitorLayout = () => {
  return (
    <>
      <header>
        <div className="topbar-1 d-lg-flex d-none">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="date">
              Novembar 30, 2022 <span>28°C</span>
            </div>
            <div className="header-logo">
              <a href="index-2.html">
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/images/logo/logo-1.svg"
                />
              </a>
            </div>
            <ul className="social-1">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bx bxl-facebook"></i>6.5K
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i className="bx bxl-twitter"></i>3.5K
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i className="bx bxl-pinterest-alt"></i>2.1K
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="bx bxl-instagram"></i>1.9K
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="style-1">
        <div className="container">
          
          <div className="help-center d-flex justify-content-md-between justify-content-center align-items-center">
            <h5>
              <a href="contact.html">Help Center</a>
            </h5>
            <ul className="help-list">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="contact.html">Help</a>
              </li>
            </ul>
          </div>
          <div className="row copyright-area">
            <div className="col-lg-12 text-center">
              <p>
                © 2023 Blogxton is Proudly Powered by
                <a href="https://www.egenstheme.com/">Egens Theme</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default VisitorLayout;
