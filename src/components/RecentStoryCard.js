import React from "react";

const RecentStoryCard = ( {storyName, genre, author, imageURL} ) => {
  return (
    <div class="col-md-6 col-sm-6">
      <div class="blog-grid-1 two">
        <a href="post-format-no-sidebar-02.html" class="image">
          <img src={imageURL} alt={storyName + " image"} />
        </a>
        <div class="content">
          <ul>
            <li>
              <a href="author-details.html">By {author}</a>
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
          <div class="bottom-area">
            <a
              href="post-format-no-sidebar-02.html"
              class="eg-btn arrow-btn"
            >
              Read Now<i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentStoryCard;
