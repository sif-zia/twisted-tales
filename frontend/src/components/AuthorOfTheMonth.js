import React from "react";

const AuthorOfTheMonth = ({ writerOfTheMonth }) => {
  return (
    <div class="swiper-slide">
      <div class="author-2">
        <div class="image-area">
          <div>
            <img src={`http://localhost:4000/getImage?imagePath=${writerOfTheMonth.profileImgURL}`} />
          </div>
          <div class="social-area">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i class="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i class="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i class="bx bxl-pinterest-alt"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i class="bx bxl-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="info">
          <h4>
            <a href={`userDetails/${writerOfTheMonth._id}`}>{writerOfTheMonth.name}</a>
          </h4>
          <span>{writerOfTheMonth.initiatedStories.length} {writerOfTheMonth.initiatedStories.length >= 2 ? "Stories" : "Story"}</span>
          <span>{writerOfTheMonth.writtenChapters.length} {writerOfTheMonth.writtenChapters.length >= 2 ? "Chapters" : "Chapter"}</span>
        </div>
      </div>
    </div>
  );
};

export default AuthorOfTheMonth;
