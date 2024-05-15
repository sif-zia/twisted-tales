import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SignpostIcon from "@mui/icons-material/Signpost";
import { Stack } from "@mui/system";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { Typography } from "@mui/material";
import api from "../api/api"
import userSlice from "../slices/userSlice";
import { format } from 'date-fns';
import { useSelector } from "react-redux";
import { getCrrUser } from "../slices/userSlice"
import { useMediaQuery } from '@mui/material';





const Chapter = () => {

  // useEffect(() => {
  //   // Array of JavaScript file paths
  //   const jsFiles = [
  //     "https://unpkg.com/wavesurfer.js@7.7.2",
  //     "%PUBLIC_URL%/assets/js/SmoothScroll.js",
  //     "%PUBLIC_URL%/assets/js/waypoints.min.js",
  //   ]; // Add your file paths here

  //   // Load each JavaScript file
  //   jsFiles.forEach((filePath) => {
  //     const script = document.createElement("script");
  //     script.src = filePath;
  //     script.async = true;
  //     document.body.appendChild(script);
  //   });

  //   // Cleanup function
  //   return () => {
  //     jsFiles.forEach((filePath) => {
  //       const script = document.querySelector(`script[src="${filePath}"]`);
  //       if (script) {
  //         document.body.removeChild(script);
  //       }
  //     });
  //   };
  // }, []);

  const isSmallScreen = useMediaQuery('(max-width:992px)');
  const { storyId, chapterId } = useParams()
  const [chapter, setChapter] = useState(null)
  const [error, setError] = useState(null)
  const [isLiked, setLiked] = useState(null)
  const crrUser = useSelector(getCrrUser)


  useEffect(() => {
    const sendChapterRequest = async () => {
      try {
        const response = await api.get(`/story/${storyId}/chapter/${chapterId}`)
        const responseChapter = response.data.chapter
        const author = await api.get(`/user/${responseChapter.author._id}`)
        setChapter(responseChapter)
        setChapter(prev => ({ ...prev, authorLikes: author.data.likes }))
      }
      catch (err) {
        console.log(err)
        setError(err.response.data.error)
      }
    }

    sendChapterRequest()
  }, [])

  useEffect(() => {
    const getReaction = async () => {
      try {
        const response = await api.get(`/story/${storyId}/chapter/${chapterId}/react`)
        if (response.status == 200) {
          if (response.data.type == "like") {
            setLiked(true)
          }
          else if (response.data.type == "dislike") {
            setLiked(false)
          }
        }
      }
      catch (err) {
        console.log(err)
      }
    }
    getReaction()
  }, [])

  const handleAddLike = async () => {
    if (isLiked == false) {
      await handleRemoveReaction()
    }
    try {
      const response = await api.post(`/story/${storyId}/chapter/${chapterId}/react`, { type: "like" })
      setLiked(true)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleAddDislike = async () => {

    if (isLiked == true) {
      await handleRemoveReaction()
    }
    try {
      const response = await api.post(`/story/${storyId}/chapter/${chapterId}/react`, { type: "dislike" })
      setLiked(false)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleRemoveReaction = async () => {
    try {
      const response = await api.delete(`/story/${storyId}/chapter/${chapterId}/react`)
      setLiked(null)
    }
    catch (err) {
      console.log(err)
    }
  }

  const getFormattedDate = (createdAt, formatString) => {
    if (!createdAt) {
      return " "
    }
    const formatted = format(new Date(createdAt), formatString);
    return formatted
  }



  return (
    <>
      <div className="breadcrumb-section mb-100">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Story</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {chapter?.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="post-gallery-details style-7">
        <div className="container">
          <div className="post-gallery-content">
            <div className="post-format-wrapper">
              <div className="row justify-content-center">
                <div className="col-lg-9 p-lg-0" style={{ maxWidth: isSmallScreen ? "70vw" : "55vw" }}>
                  <div className="post-thumb">
                    <div className="post-thumb-title">
                      <span>{chapter?.story.genre}</span>
                      <h2>{chapter?.desc}</h2>
                    </div>
                    <div className="post-thumb-img">
                      <img
                        src={`http://localhost:4000/getImage?imagePath=${chapter?.coverImgURL}`}
                        alt
                        style={{ width: "100%", height: "100%" }}
                      />
                      <div className="post-thumb-date">
                        <a href>
                          <strong>{getFormattedDate(chapter?.createdAt, "dd")}</strong>
                          {getFormattedDate(chapter?.createdAt, "MMMM")}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <p className="first-para">
                        {chapter?.content.slice(0, 1).toUpperCase() + chapter?.content.slice(1)}
                      </p>
                    </div>
                  </div>
                </div>
                {/* {!isSmallScreen && } */}
                <div className="col-lg-3 p-lg-0" style={{ marginTop: "50px", marginLeft: isSmallScreen ? "0px" : "50px", maxWidth: "65vw", justifyContent: "center", alignItems: "center" }}>
                  <div className="author-sidebar">
                    <div className="author-sidebar-img">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/post-format/author-sidebar-img2.jpg`}
                        alt
                      />
                    </div>
                    <div className="author-sidebar-content">
                      <div className="author-title">
                        <h5>
                          <a onClick={()=>  window.location.href = `http://localhost:3000/userDetails/${chapter?.author._id}`}>{chapter?.author.name}</a>
                        </h5>
                        <span>Creative</span>
                      </div>
                      <div className="author-meta">
                        <ul>
                          <li>
                            <a>
                              <svg
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z"></path>
                              </svg>
                              {chapter?.authorLikes} {chapter?.authorLikes > 1 ? " Likes" : " Like"}

                            </a>
                          </li>
                          <li>
                            <a>
                              <svg
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z"></path>
                              </svg>
                              {getFormattedDate(chapter?.author.createdAt, "MMMM do, yyyy")}
                            </a>
                          </li>
                          <li>
                            <a>
                              <svg
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M14.5662 14.9619C14.5908 15.0728 14.5903 15.1878 14.5648 15.2986C14.5393 15.4093 14.4895 15.513 14.419 15.6021C14.3484 15.6912 14.2589 15.7635 14.157 15.8136C14.055 15.8638 13.9432 15.8906 13.8295 15.8922C13.7123 15.8916 13.5967 15.8643 13.4916 15.8124L12.1473 15.1555C10.8911 15.6143 9.51546 15.6277 8.25052 15.1936C6.98557 14.7595 5.90806 13.9042 5.19824 12.7708C6.14928 12.8941 7.11563 12.8159 8.03447 12.5413C8.95331 12.2667 9.80408 11.8018 10.5315 11.1768C11.2589 10.5518 11.8466 9.78079 12.2565 8.91379C12.6664 8.0468 12.8892 7.10326 12.9106 6.14449C12.911 5.70944 12.8664 5.27551 12.7777 4.84961C13.6869 5.29062 14.4601 5.96909 15.0156 6.81329C15.571 7.65749 15.8881 8.63608 15.9332 9.64561C15.9633 10.4111 15.8336 11.1744 15.5525 11.887C15.2714 12.5996 14.845 13.2459 14.3004 13.7847L14.5662 14.9619Z"></path>
                                <path d="M6.0757 0.216195C4.48484 0.198449 2.95187 0.812289 1.81293 1.92312C0.673981 3.03395 0.0220199 4.5511 1.29169e-06 6.1419C-0.000538167 6.94954 0.167902 7.74837 0.494497 8.48703C0.821091 9.22569 1.29861 9.88786 1.89638 10.431L1.65183 11.7365C1.63148 11.8461 1.63545 11.9588 1.66346 12.0668C1.69147 12.1747 1.74285 12.2751 1.81395 12.361C1.88505 12.4469 1.97414 12.5161 2.07493 12.5638C2.17572 12.6114 2.28575 12.6364 2.39724 12.6368C2.52333 12.6366 2.64739 12.6052 2.75837 12.5453L4.19679 11.7726C4.8041 11.9674 5.43791 12.067 6.0757 12.068C7.66662 12.0857 9.19965 11.4718 10.3386 10.3609C11.4776 9.25002 12.1295 7.73277 12.1514 6.1419C12.1294 4.5511 11.4774 3.03395 10.3385 1.92312C9.19953 0.812289 7.66656 0.198449 6.0757 0.216195ZM3.79731 7.05136C3.64711 7.05136 3.50027 7.00681 3.37538 6.92336C3.25049 6.83991 3.15314 6.7213 3.09566 6.58253C3.03818 6.44375 3.02314 6.29105 3.05244 6.14373C3.08175 5.99641 3.15408 5.86109 3.26029 5.75487C3.36651 5.64866 3.50183 5.57633 3.64915 5.54702C3.79647 5.51772 3.94917 5.53276 4.08795 5.59024C4.22672 5.64772 4.34533 5.74507 4.42878 5.86996C4.51223 5.99485 4.55678 6.14169 4.55678 6.29189C4.55678 6.49332 4.47676 6.68649 4.33433 6.82891C4.19191 6.97134 3.99874 7.05136 3.79731 7.05136ZM6.0757 7.05136C5.92549 7.05136 5.77866 7.00681 5.65377 6.92336C5.52887 6.83991 5.43153 6.7213 5.37405 6.58253C5.31657 6.44375 5.30153 6.29105 5.33083 6.14373C5.36013 5.99641 5.43247 5.86109 5.53868 5.75487C5.64489 5.64866 5.78022 5.57633 5.92754 5.54702C6.07486 5.51772 6.22756 5.53276 6.36633 5.59024C6.50511 5.64772 6.62372 5.74507 6.70717 5.86996C6.79062 5.99485 6.83516 6.14169 6.83516 6.29189C6.83516 6.49332 6.75515 6.68649 6.61272 6.82891C6.47029 6.97134 6.27712 7.05136 6.0757 7.05136ZM8.35409 7.05136C8.20388 7.05136 8.05704 7.00681 7.93215 6.92336C7.80726 6.83991 7.70992 6.7213 7.65244 6.58253C7.59495 6.44375 7.57991 6.29105 7.60922 6.14373C7.63852 5.99641 7.71085 5.86109 7.81707 5.75487C7.92328 5.64866 8.0586 5.57633 8.20592 5.54702C8.35324 5.51772 8.50595 5.53276 8.64472 5.59024C8.78349 5.64772 8.90211 5.74507 8.98556 5.86996C9.06901 5.99485 9.11355 6.14169 9.11355 6.29189C9.11355 6.49332 9.03354 6.68649 8.89111 6.82891C8.74868 6.97134 8.55551 7.05136 8.35409 7.05136Z"></path>
                              </svg>
                              {chapter?.author.writtenChapters.length} {chapter?.author.writtenChapters.length > 1 ? " Chapters" : " Chapter"}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="author-social">
                        <h6>Share This:</h6>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Stack direction="row" padding="0px 50px" alignItems={"center"} justifyContent={"space-between"} >
              <Stack
                direction={"row"}
              >

                <Button onClick={() => (
                  isLiked === true ? handleRemoveReaction() : handleAddLike()

                )}>
                  {isLiked === true ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                  <span style={{ color: "primary", fontWeight: "bold", marginLeft: "10px", fontSize: "20px" }}>250</span>
                </Button>


                <Button onClick={() => (
                  isLiked === false ? handleRemoveReaction() : handleAddDislike()
                )}>
                  {isLiked === false ? <ThumbDownAltIcon /> : <ThumbDownOffAltOutlinedIcon />}
                  <span style={{ color: "primary", fontWeight: "bold", marginLeft: "10px", fontSize: "20px" }}>10</span>
                </Button>
              </Stack>

              <div className="details-navigation">
                <div className="single-navigation two">
                  <a href="#" className="img">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/roadmap.png`}
                      alt />
                    <div className="arrow">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12"></path>
                      </svg>
                    </div>
                  </a>
                  <div className="content">
                    <a href="#">Back to Roadmap </a>
                  </div>
                </div>
              </div>
            </Stack>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chapter;
