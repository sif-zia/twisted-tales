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
          <div className="row justify-content-start align-items-start pt-90 pb-90 gy-5">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="footer-info">
                  <a href="index-2.html" className="footer-logo">
                    <img src="assets/images/logo/logo-2.svg" alt="image" />
                  </a>
                  <h3>We Would Love to Hear From You.</h3>
                </div>
                <div className="footer-form">
                  <p>Any question for us?</p>
                  <form>
                    <div className="form-inner">
                      <input type="email" placeholder="Enter Your Email..." />
                      <button>Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 d-flex justify-content-lg-center justify-content-md-end">
              <div className="footer-widget">
                <h4 className="footer-title">Top Article This Week</h4>
                <div className="blog-list-1 mb-25">
                  <a href="post-format-no-sidebar-02.html" className="image">
                    <img
                      src="assets/images/blog-list/blog-list1-1.jpg"
                      alt="image"
                    />
                  </a>
                  <div className="content">
                    <h6>
                      <a href="post-format-no-sidebar-02.html">
                        Our Begin Now To Being What You Will Be.
                      </a>
                    </h6>
                    <ul>
                      <li>
                        <a href="blog-standard.html">Nov 02, 2022</a>
                      </li>
                      <li>
                        <a href="blog-standard.html">520 Comment</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-list-1">
                  <a href="post-format-no-sidebar-02.html" className="image">
                    <img
                      src="assets/images/blog-list/blog-list1-2.jpg"
                      alt="image"
                    />
                  </a>
                  <div className="content">
                    <h6>
                      <a href="post-format-no-sidebar-02.html">
                        Our Begin Now To Being What You Will Be.
                      </a>
                    </h6>
                    <ul>
                      <li>
                        <a href="blog-standard.html">Nov 11, 2022</a>
                      </li>
                      <li>
                        <a href="blog-standard.html">454 Comment</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-lg-center">
              <div className="footer-widget">
                <h4 className="footer-title">Quick Link</h4>
                <ul className="footer-list">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="topic.html">Topic</a>
                  </li>
                  <li>
                    <a href="post-format-no-sidebar-01.html">Post</a>
                  </li>
                  <li>
                    <a href="blog-classic.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-lg-end">
              <div className="footer-widget">
                <h4 className="footer-title">Social Media</h4>
                <ul className="social-2">
                  <li>
                    <a href="https://www.facebook.com/">
                      <div className="icon">
                        <i className="bx bxl-facebook"></i>
                        <span>5.5k</span>
                      </div>
                      <p>Facebook</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <div className="icon">
                        <i className="bx bxl-twitter"></i>
                        <span>5.5k</span>
                      </div>
                      <p>Twitter</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <div className="icon">
                        <i className="bx bxl-pinterest"></i>
                        <span>5.5k</span>
                      </div>
                      <p>Pinterest</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <div className="icon">
                        <i className="bx bxl-instagram"></i>
                        <span>5.5k</span>
                      </div>
                      <p>Instagram</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
