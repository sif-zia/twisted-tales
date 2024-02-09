import React from "react";
import { useEffect } from "react";

const Register = () => {
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
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="contact-section pt-100 pb-100">
        <div className="container">
          <div className="row gy-4 justify-cotnent-center align-items-center">
            <div className="col-lg-5 pe-lg-5 pe-0">
              <div className="contact-box">
                <div className="title">
                  <h3>Contact Us</h3>
                  <p>
                    Morbi quis elementum ex, id commodo odio. In maximus, augue
                    europea vestibulum gomat.
                  </p>
                </div>
                <div className="left-social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="info">
                      <a href="tel:05661111985">+880 566 1111 985</a>
                      <a href="tel:06571111576">+880 657 1111 576</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="info">
                      <a href="https://demo-egenslab.b-cdn.net/cdn-cgi/l/email-protection#4d24232b220d28352c203d2128632e2220">
                        <span
                          className="__cf_email__"
                          data-cfemail="a5cccbc3cae5c0ddc4c8d5c9c08bc6cac8"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                      <a href="https://demo-egenslab.b-cdn.net/cdn-cgi/l/email-protection#264f48404966555356564954520845494b">
                        <span
                          className="__cf_email__"
                          data-cfemail="ee87808881ae9d9b9e9e819c9ac08d8183"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="form-title">
                <h2>Have Any Questions</h2>
              </div>
              <form className="contact-form">
                <div className="row">
                  <div className="col-12">
                    <div className="form-inner">
                      <input type="text" placeholder="Enter Your Name" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-inner">
                      <input type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-inner">
                      <input type="text" placeholder="Enter Your Subject" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-inner">
                      <textarea
                        rows="5"
                        placeholder="Enter Your Messege"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="eg-btn btn--primary btn--lg"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section-1">
        <div className="paper-fly-icon">
          <img src="assets/images/icons/paper-fly.svg" alt="image" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-10 col-sm-12 text-center">
              <h2>Get the best blog stories into your inbox Connect Us now.</h2>
              <form className="newsletter-from">
                <div className="inner-form">
                  <input type="email" placeholder="Enter Your Email..." />
                  <button type="submit">
                    Subscribe
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
      </section>
    </div>
  );
};

export default Register;
