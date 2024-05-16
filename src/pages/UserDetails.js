import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import SearchItem from "../components/SearchItem";
import { useDispatch } from "react-redux";
import { setPage } from "../slices/navbarSlice";
import { useParams } from "react-router-dom";
import api from "../api/api";
import { useEffect, useState } from "react";

const UserDetails = () => {
  const { userId } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const sendAuthorRequest = async () => {
      try {
        const responseAuthor = await api.get(`user/${userId}`);
        const user = responseAuthor.data;
        console.log("in userDetails:", user);
        setAuthor(user);
      } catch (err) {
        console.log(err);
      }
    };

    sendAuthorRequest();
  }, []);

  const isDesktop = useMediaQuery("(min-width: 1500px)");

  const searchResultData = {
    storyName: "Meri Kahani",
    date: "20 January",
    initiatorName: "Hamnana",
    genre: "Comedy",
  };

  const dispatch = useDispatch();
  dispatch(setPage("user details"));

  return (
    <div className="tt-magic-cursor">
      <div className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index-2.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Author Details
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="author-section pt-50 pb-100">
        <div className="container">
          <div className="row gy-2">
            <div className="col-lg-12">
              <div className="author-details">
                <img
                  className="image"
                  src={`${process.env.PUBLIC_URL}/assets/images/authors/author-details-img.jpg`}
                  alt="image"
                />
                <div className="author-info">
                  <h2>{author?.user.name}</h2>
                  <p>{author?.user.email}</p>

                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      direction: "row",
                      width: "50vw",
                      justifyContent: "space-between",
                    }}
                  >
                    <li>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icons/total-post.svg`}
                        alt="image"
                      />{" "}
                      Initiated Plots:{" "}
                      <b style={{ color: "black" }}>
                        {author?.user.initiatedStories.length}
                      </b>
                    </li>
                    <li>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icons/view.svg`}
                        alt="image"
                      />{" "}
                      Composed Chapters:{" "}
                      <b style={{ color: "black" }}>
                        {author?.user.writtenChapters.length}
                      </b>
                    </li>
                    <li>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icons/like.svg`}
                        alt="image"
                      />{" "}
                      Likes: <b style={{ color: "black" }}>{author?.likes}</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <Stack direction="row" justifyContent={"space-evenly"}></Stack>
              <Grid
                container
                direction={isDesktop ? "row" : "column"}
                spacing={2}
                display={"flex"}
                // justifyContent={"start"}
                // alignItems={isDesktop ? "start" : "center"}
                style={author?.user.initiatedStories.length === 0 || author?.user.writtenChapters.length === 0  ? { justifyContent: isDesktop? "center" : "start" , alignItems: isDesktop? "start" : "center" } : {}}

              >
                {author?.user.initiatedStories.length !== 0 && (
                  <Grid item xs={6}>
                    <Typography variant="h1" align="center" sx={{ my: "25px" }}>
                      Initiated Plots
                    </Typography>
                    <Stack direction="column" spacing={2}>
                      {author?.user.initiatedStories?.map((story, index) => (
                        <SearchItem
                          key={index}
                          storyName={story.title}
                          date={story.createdAt}
                          genre={story.genre}
                          coverImgURL={story.coverImgURL}
                          isStory={true}
                          storyId={story._id}
                          chapterId={" "}
                        />
                      ))}
                    </Stack>
                  </Grid>
                )}
                {author?.user.writtenChapters.length !== 0 && (
                  <Grid item xs={6} >
                  <Typography variant="h1" align="center" sx={{ my: "25px" }}>
                      Composed Chapters
                    </Typography>
                    <Stack direction="column" spacing={2}>
                      {author?.user.writtenChapters?.map((chapter, index) => (
                        <SearchItem
                          key={index}
                          storyName={chapter.title}
                          date={chapter.createdAt}
                          genre={chapter.story?.genre}
                          coverImgURL={chapter.coverImgURL}
                          isStory={false}
                          storyId={chapter.story._id}
                          chapterId={chapter._id}
                        />
                      ))}
                    </Stack>
                  </Grid>
                )}
              </Grid>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDetails;
