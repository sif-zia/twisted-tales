import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { format } from 'date-fns';

const BestSellers = ({ stories }) => {

  const getFormattedDate = (createdAt, formatString) => {
    if (!createdAt) {
      return " "
    }
    const formatted = format(new Date(createdAt), formatString);
    return formatted
  }

  return (
    <section className="latest-blog-section pt-100 pb-100">
      <div className="container">
        <div className="row align-items-center mb-40">
          <div className="col-lg-9 text-lg-start text-center">
            <div className="section-title-1">
              <h2>Top Three</h2>
              <div className="subtitle justify-content-lg-start justify-content-center">
                <LocalFireDepartmentIcon color="primary" />
                <span>Explore Boundless Worlds of Tales</span>
              </div>
            </div>
          </div>

        </div>
        <div className="row justify-content-center gy-5">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-grid-1">
              <a href="#" className="eg-badge badge--white">
                {stories[0].story.genre}
              </a>
              <a href="#" className="image">
                <img src={`http://localhost:4000/getImage?imagePath=${stories[0].story.coverImgURL}`} alt="image" />
              </a>
              <div className="content">
                <ul>
                  <li>
                    <a href={`/userDetails/${stories[0].story.initiator?._id}`}>
                      By{" "}
                      {stories[0].story.initiator?.name.slice(0, 15)}
                    </a>
                  </li>
                  <li>
                    <a href="#">{getFormattedDate(stories[0].story.createdAt, "MMMM do, yyyy")}</a>
                  </li>
                  <li>{stories[0].readCount} Reads</li>
                </ul>
                <h4>
                  <a href="#">
                    {stories[0].story.title}
                  </a>
                </h4>
                <div className="bottom-area">
                  <a
                    href={`/story/${stories[0].story?._id}`}
                    className="eg-btn arrow-btn"
                  >
                    Read Now<i className="bi bi-arrow-right"></i>
                  </a>
                  {/* <span>
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                    </svg>
                    2 Day Read
                  </span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-grid-1 sibling-2">
              <div className="content">
                <a href="#" className="eg-badge badge--red">
                  {stories[1].story.genre}
                </a>
                <ul>
                  <li>
                    <a href={`/userDetails/${stories[1].story?.initiator?._id}`}>
                      By{" "}
                      {stories[1].story.initiator?.name.slice(0, 15)}
                    </a>
                  </li>
                  <li>
                    <a href="#">{getFormattedDate(stories[1].story.createdAt, "MMMM do, yyyy")}</a>
                  </li>
                  <li>{stories[1].readCount} Reads</li>
                </ul>
                <h4>
                  <a href="#">
                    {stories[1].story.title}
                  </a>
                </h4>
                <div className="bottom-area">
                  <a
                    href={`/story/${stories[1].story._id}`}
                    className="eg-btn arrow-btn"
                  >
                    Read Now<i className="bi bi-arrow-right"></i>
                  </a>
                  {/* <span>
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                    </svg>
                    2 Day Read
                  </span> */}
                </div>
              </div>
              <a href="#" className="image">
                <img src={`http://localhost:4000/getImage?imagePath=${stories[1].story.coverImgURL}`} alt="image" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="blog-grid-1">
              <a href="#" className="eg-badge badge--white">
                {stories[2].story.genre}
              </a>
              <a href="#" className="image">
                <img src={`http://localhost:4000/getImage?imagePath=${stories[2].story.coverImgURL}`} alt="image" />
              </a>
              <div className="content">
                <ul>
                  <li>
                    <a href={`/userDetails/${stories[2].story.initiator?._id}`}>
                      By{" "}
                      {stories[2].story.initiator?.name.slice(0, 15)}
                    </a>
                  </li>
                  <li>
                    <a href="#">{stories[2].story.uploadDate}</a>
                  </li>
                  <li>{stories[2].readCount} Reads</li>
                </ul>
                <h4>
                  <a href="#">
                    {stories[2].story.title}
                  </a>
                </h4>
                <div className="bottom-area">
                  <a
                    href={`/story/${stories[2].story._id}`}
                    className="eg-btn arrow-btn"
                  >
                    Read Now<i className="bi bi-arrow-right"></i>
                  </a>
                  {/* <span>
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.85726 11.3009C7.14547 9.08822 6.60613 6.30362 4.57475 4.68025C4.57356 4.67933 4.57238 4.67818 4.57143 4.6775L4.58021 4.69862L4.57878 4.71446C4.97457 5.72599 4.91905 6.83648 4.43285 7.78924L4.09022 8.461L3.9851 7.71876C3.91368 7.21529 3.71745 6.735 3.41515 6.32382H3.36745L3.3423 6.25495C3.34586 7.02428 3.17834 7.78213 2.8497 8.49704C2.41856 9.43259 2.48191 10.5114 3.01936 11.3833L3.39023 11.9853L2.72299 11.7126C1.62271 11.2628 0.743103 10.3964 0.309587 9.33547C-0.176131 8.15083 -0.0862008 6.77725 0.550429 5.66194C0.882388 5.08179 1.11493 4.46582 1.24187 3.8308L1.36597 3.2084L1.68251 3.76353C1.83366 4.02824 1.94494 4.31476 2.01399 4.61574L2.02111 4.62285L2.02847 4.67107L2.03535 4.669C2.98353 3.45015 3.55158 1.93354 3.6344 0.397865L3.65575 0L4.00076 0.217643C5.4088 1.10544 6.38664 2.52976 6.6887 4.13017L6.69558 4.163L6.69914 4.16805L6.71457 4.14693C6.99053 3.79429 7.13622 3.37485 7.13622 2.93336V2.24967L7.56261 2.7947C8.55398 4.06153 9.06224 5.63301 8.99391 7.21988C8.90991 9.08776 7.85708 10.7272 6.17736 11.6154L5.45008 12L5.85726 11.3009Z" />
                    </svg>
                    55 Min Read
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
