import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import axios from "axios"
import { Grid } from '@mui/material';


const Layout = () => {
  // #F2F2DE
  const currentDate = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  const [quote, setQuote] = useState('');
  const maxLength = 100;
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        let data;
        let fetchedQuote = '';
        while (fetchedQuote.length >= maxLength || fetchedQuote.length === 0) {
          const response = await axios.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://favqs.com/api/qotd'));
          data = await JSON.parse(response.data.contents);
          fetchedQuote = data.quote.body;
        }
        setQuote(fetchedQuote);
      } catch (err) {
        console.error('There was a problem fetching the quote of the day:', err);
      }
    };

    fetchQuote();
  }, []);



  return (
    <div>
      <section>
        <Grid container width="100%" className="topbar-1">
          <Grid item xs={3} style={{ display: "flex", direction: "column", justifyContent: "flex-start", alignItems: "center" }}>
            <p className="date" style={{ paddingLeft: "10px", fontSize: "1rem", paddingBottom: "0px", marginBottom: "0px" }}>
              {formattedDate}
            </p></Grid>
          <Grid item xs={6} style={{ display: "flex", direction: "column", justifyContent: "center", alignItems: "center" }} ><Logo /></Grid>
          <Grid item xs={3} style={{ display: "flex", direction: "column", justifyContent: "flex-end", alignItems: "center" }}> <p style={{ color: "#f5f8fc", paddingBottom: "0px", marginBottom: "0px", paddingRight: "10px" }} > {quote ? quote :
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
          }</p></Grid>
        </Grid>
        <NavBar />

      </section>
      <main style={{ backgroundColor: "#FAF9F6" }}>
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
                © 2023 Twisted Tales is Proudly Powered by
                <a href="https://www.egenstheme.com/"> WebWizards</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
