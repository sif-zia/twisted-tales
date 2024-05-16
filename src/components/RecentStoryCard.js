import React from "react";
import { useNavigate } from "react-router-dom";

const RecentStoryCard = ({ id, storyName, genre, authorId,author, imageURL }) => {
  const navigate = useNavigate()
  return (
    <div class="col-md-6 col-sm-6">
      <div class="blog-grid-1 two">
        <a href="post-format-no-sidebar-02.html" class="image">
          <img src={imageURL} alt={storyName + " image"} />
        </a>
        <div class="content">
          <ul>
            <li>
              <a href={`/userDetails/${authorId}`}>By {author}</a>
            </li>
            <li>
              <a href="blog-classic.html">{genre}</a>
            </li>
          </ul>
          <h4>
            <a href={`/story/${id}`}>
              {storyName}
            </a>
          </h4>
          <div class="bottom-area">
            <a
              href={`/story/${id}`}
              class="eg-btn arrow-btn"
              // onClick={() => { navigate(`/story/${id}`) }}
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
