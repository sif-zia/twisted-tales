import React from "react";
import { useMediaQuery } from '@mui/material';

const SearchItem = ({storyName, date, initiatorName, genre}) => {
  return (
    <div
      className="blog-list-2"
      style={{paddingLeft:"10px", boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)", borderRadius: "10px", maxWidth:"900px"}}
    >
      <div className="date">
        <h3>20</h3>
        <p>November</p>
      </div>
      <div className="content">
        <ul>
          <li>
            <a href="author-details.html">{initiatorName}</a>
          </li>
          <li>
            <a href="blog-classic.html">{genre}</a>
          </li>
        </ul>
        <h4>
          <a href="post-format-no-sidebar-02.html">
            {storyName}
          </a>
        </h4>
        <div className="bottom-area">
          <a href="post-format-no-sidebar-02.html" className="eg-btn arrow-btn">
            Read Story<i className="bi bi-arrow-right"></i>
          </a>
          
        </div>
      </div>
      <a href="post-format-no-sidebar-02.html" className="image" style={{margin:"0", padding:"0"}}>
        <img src="assets/images/blog-list/blog-list2-1.jpg" alt="search result" style={{height:"24vh"}}/>
      </a>
    </div>
  );
};

export default SearchItem;
