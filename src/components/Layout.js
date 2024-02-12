import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <section>
        {/* <div className="egns-preloader">
          <div className="sequence">
            <div className="seq-preloader">
              <svg
                width="39"
                height="16"
                viewBox="0 0 39 16"
                xmlns="http://www.w3.org/2000/svg"
                className="seq-preload-indicator"
              >
                <title>Sequence Preloader Icon</title>
                <desc>
                  Three orange dots increasing in size from left to right
                </desc>
                <g fill="#F96D38">
                  <path
                    className="seq-preload-circle seq-preload-circle-1"
                    d="M3.999 12.012c2.209 0 3.999-1.791 3.999-3.999s-1.79-3.999-3.999-3.999-3.999 1.791-3.999 3.999 1.79 3.999 3.999 3.999z"
                  />
                  <path
                    className="seq-preload-circle seq-preload-circle-2"
                    d="M15.996 13.468c3.018 0 5.465-2.447 5.465-5.466 0-3.018-2.447-5.465-5.465-5.465-3.019 0-5.466 2.447-5.466 5.465 0 3.019 2.447 5.466 5.466 5.466z"
                  />
                  <path
                    className="seq-preload-circle seq-preload-circle-3"
                    d="M31.322 15.334c4.049 0 7.332-3.282 7.332-7.332 0-4.049-3.282-7.332-7.332-7.332s-7.332 3.283-7.332 7.332c0 4.05 3.283 7.332 7.332 7.332z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div> */}

        <div className="mobile-search">
          <div className="container">
            <div className="row d-flex justify-content-center gy-4">
              <div className="col-10">
                <label>What are you looking for?</label>
                <input type="text" placeholder="Search Blog, Magazin" />
              </div>
              <div className="col-2 d-flex justify-content-end align-items-sm-center align-items-end gap-2">
                <div className="search-cross-btn">
                  <i className="bi bi-search"></i>
                </div>
                <div className="search-cross-btn">
                  <i className="bi bi-x-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-area">
          <div className="menu-toggle-wrap">
            <div className="sidebar-top-area d-flex justify-content-end align-items-center">
              <div className="cross-icon">
                <i className="bx bx-x"></i>
              </div>
            </div>
            <div className="sidebar-body">
              <div className="sidebar-widget mb-40">
                <h4 className="footer-title mb-4">Most Recent Article</h4>
                <div className="blog-list-5 mb-25">
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
                <div className="blog-list-5 mb-25">
                  <a href="post-format-no-sidebar-02.html" className="image">
                    <img
                      src="assets/images/blog-list/blog-list1-3.jpg"
                      alt="image"
                    />
                  </a>
                  <div className="content">
                    <h6>
                      <a href="post-format-no-sidebar-02.html">
                        Start now to become what you will be.
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
                <div className="blog-list-5">
                  <a href="post-format-no-sidebar-02.html" className="image">
                    <img
                      src="assets/images/blog-list/blog-list1-2.jpg"
                      alt="image"
                    />
                  </a>
                  <div className="content">
                    <h6>
                      <a href="post-format-no-sidebar-02.html">
                        Fire up Now With What exactly You Are Going to Be.
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
              <div className="sidebar-widget mb-40">
                <div className="swiper category-sidebar-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="category-1">
                        <a href="blog-classic.html" className="image">
                          <img
                            src="assets/images/category/cate1-1.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="content">
                          <h4>
                            <a href="blog-classic.html">Business</a>
                          </h4>
                          <ul>
                            <li>800 Article</li>
                            <li>3.9k View</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="category-1">
                        <a href="blog-classic.html" className="image">
                          <img
                            src="assets/images/category/cate1-2.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="content">
                          <h4>
                            <a href="blog-classic.html">Life Style</a>
                          </h4>
                          <ul>
                            <li>700 Article</li>
                            <li>1.6k View</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="category-1">
                        <a href="blog-classic.html" className="image">
                          <img
                            src="assets/images/category/cate1-3.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="content">
                          <h4>
                            <a href="blog-classic.html">Fashion</a>
                          </h4>
                          <ul>
                            <li>680 Article</li>
                            <li>2.8k View</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="category-1">
                        <a href="blog-classic.html" className="image">
                          <img
                            src="assets/images/category/cate1-4.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="content">
                          <h4>
                            <a href="blog-classic.html">Travel</a>
                          </h4>
                          <ul>
                            <li>900 Article</li>
                            <li>6.2k View</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="category-1">
                        <a href="blog-classic.html" className="image">
                          <img
                            src="assets/images/category/cate1-5.jpg"
                            alt="image"
                          />
                        </a>
                        <div className="content">
                          <h4>
                            <a href="blog-classic.html">Creative</a>
                          </h4>
                          <ul>
                            <li>800 Article</li>
                            <li>3.9k View</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-widget">
                <h4 className="footer-title mb-4">Subscribe Newsletter</h4>
                <form className="newsletter-from">
                  <div className="inner-form">
                    <input type="email" placeholder="Enter Your Email..." />
                    <button type="submit">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.6686 7.48076L0.811792 0.623786C0.575226 0.51636 0.292947 0.580359 0.12838 0.783782C-0.0373304 0.987206 -0.0430445 1.27634 0.114666 1.48548L5.00026 7.99961L0.114666 14.5137C-0.0430445 14.7229 -0.0373304 15.0131 0.127237 15.2154C0.238091 15.3537 0.403802 15.428 0.571797 15.428C0.652938 15.428 0.734079 15.4109 0.810649 15.3754L15.6674 8.51845C15.8709 8.42474 16 8.22246 16 7.99961C16 7.77675 15.8708 7.57447 15.6686 7.48076Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

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

        <header className="header-area style-1">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="sidebar-button mobile-menu-btn d-lg-flex d-none">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="header-resp-logo d-lg-none d-flex">
              <a href="index-2.html">
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/images/logo/logo-2.svg"
                />
              </a>
            </div>
            <div className="main-nav">
              <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                <div className="mobile-logo-wrap">
                  <a href="index-2.html">
                    <img
                      alt="image"
                      className="img-fluid"
                      src="assets/images/logo/logo-2.svg"
                    />
                  </a>
                </div>
                <div className="menu-close-btn">
                  <i className="bi bi-x-lg text-dark"></i>
                </div>
              </div>
              <ul className="menu-list">
                <li className="menu-item-has-children">
                  <a href="index-2.html" className="drop-down active">
                    Home
                  </a>
                  <i className="bi bi-chevron-down dropdown-icon"></i>
                  <ul className="sub-menu">
                    <li>
                      <a href="index-2.html" className="active">
                        Home 01
                      </a>
                    </li>
                    <li>
                      <a href="index-3.html">Home 02</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home 03</a>
                    </li>
                    <li>
                      <a href="index-5.html">Home 04</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="about.html">About</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="topic.html">Topic</a>
                </li>
                <li className="menu-item-has-children position-inherit">
                  <a href="blog-column-three.html">
                    Post
                    <i className="bi bi-chevron-down dropdown-icon2 d-lg-block d-none"></i>{" "}
                  </a>
                  <i className="bi bi-chevron-down dropdown-icon d-lg-none d-block"></i>
                  <div className="mega-menu">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 d-lg-flex flex-column align-items-center">
                          <div className="sub-menu-wrap">
                            <h6>Post Format</h6>
                            <ul className="sub-menu1">
                              <li>
                                <a href="post-format-no-sidebar-01.html">
                                  Post Format 01
                                </a>
                              </li>
                              <li>
                                <a href="post-format-no-sidebar-02.html">
                                  Post Format 02
                                </a>
                              </li>
                              <li>
                                <a href="post-format-no-sidebar-03.html">
                                  Post Format 03
                                </a>
                              </li>
                              <li>
                                <a href="post-format-no-sidebar-04.html">
                                  Post Format 04
                                </a>
                              </li>
                              <li>
                                <a href="post-format-no-sidebar-05.html">
                                  Post Format 05
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 d-lg-flex flex-column align-items-center">
                          <div className="sub-menu-wrap">
                            <h6>Post Format Sidebar</h6>
                            <ul className="sub-menu1">
                              <li>
                                <a href="post-format-right-sidebar-01.html">
                                  Post Format Right Sidebar 01
                                </a>
                              </li>
                              <li>
                                <a href="post-format-right-sidebar-02.html">
                                  Post Format Right Sidebar 02
                                </a>
                              </li>
                              <li>
                                <a href="post-format-right-sidebar-03.html">
                                  Post Format Right Sidebar 03
                                </a>
                              </li>
                              <li>
                                <a href="post-format-left-sidebar-01.html">
                                  Post Format Left Sidebar 01
                                </a>
                              </li>
                              <li>
                                <a href="post-format-left-sidebar-02.html">
                                  Post Format Left Sidebar 02
                                </a>
                              </li>
                              <li>
                                <a href="post-format-left-sidebar-03.html">
                                  Post Format Left Sidebar 03
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 d-lg-flex flex-column align-items-center">
                          <div className="sub-menu-wrap">
                            <h6>Standard Post Format</h6>
                            <ul className="sub-menu1">
                              <li>
                                <a href="audio-post-format.html">
                                  Audio Post Format
                                </a>
                              </li>
                              <li>
                                <a href="video-post-format.html">
                                  Video Post Format
                                </a>
                              </li>
                              <li>
                                <a href="gallery-post-format.html">
                                  Gallery Post Format
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <a href="feature.html">Blog</a>
                  <i className="bi bi-chevron-down dropdown-icon"></i>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-classic.html">Blog Classic</a>
                    </li>
                    <li>
                      <a href="blog-standard.html">Blog Standard</a>
                    </li>
                    <li>
                      <a href="wide-thumb-blog.html">Blog Wide Thumb</a>
                    </li>
                    <li>
                      <a href="blog-masonary.html">Masonary Blog</a>
                    </li>
                    <li>
                      <a href="blog-audio.html">Post Audio</a>
                    </li>
                    <li>
                      <a href="blog-gallery.html">Post Gallery</a>
                    </li>
                    <li>
                      <a href="blog-quote.html">Post Qoute</a>
                    </li>
                    <li>
                      <a href="video-blog.html">Post Video</a>
                    </li>
                    <li>
                      <a href="horizontal-scrolling-blog.html">
                        Horizontal Blog
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#" className="drop-down">
                    Pages
                  </a>
                  <i className="bi bi-chevron-down dropdown-icon"></i>
                  <ul className="sub-menu">
                    <li>
                      <a href="author.html">Author</a>
                    </li>
                    <li>
                      <a href="author-details.html">Author Details</a>
                    </li>

                    <li>
                      <a href="error.html">Error</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="header-icons d-flex flex-row">
              <div className="search-btn">
                <i className="bi bi-search"></i>
              </div>
              <div className="admin-area">
                <button
                  className="dropdown-toggle d-flex jusify-content-start align-items-center"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person"></i>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-person"></i>Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-chat-right-text"></i>Message
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-file-lock"></i>Lock screen
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-gear"></i>Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-box-arrow-left"></i>Logout
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mobile-menu-btn d-lg-none d-block">
                <i className="bi bi-list text-dark"></i>
              </div>
            </div>
          </div>
        </header>
      </section>
      <main style={{backgroundColor: "#FAF9F6"}}>
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
    </div>
  );
};

export default Layout;
