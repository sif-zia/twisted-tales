import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlidingStoryCard from "../components/SlidingStoryCard";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import SlidingCategoryCard from "../components/SlidingCategoryCard";
import ButtonGroup from "../components/ButtonGroup";
import BestSellers from "../components/BestSellers";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RecentStoryCard from "../components/RecentStoryCard";
import AuthorOfTheMonth from "../components/AuthorOfTheMonth";

const Explore = () => {
  const StoryResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CategoryResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = {
    title: "Raspberry Waffle",
    description:
      " Waffle is yummy and i luv it and Tahira sometimes eats it but Zainab likes it too but the one time we ordered, she ditched me cz her mama came to pick her up huh. Anyways, Afroze is my taste bud hehe ",
    imageURL:
      "https://www.julieseatsandtreats.com/wp-content/uploads/2018/01/Easy-Homemade-Waffles.jpg",
    initiator: "Hamnanana",
  };

  const CategoryData = {
    title: "Suspense",
    NoOfStories: 900,
    imageURL: "https://source.unsplash.com/random",
    NoOfReads: 200,
  };

  const BestSellersData = [
    {
      storyName: "The Alchemist",
      genre: "Adventure",
      author: "Paulo Coelho",
      imageURL:
        "https://dailytimes.com.pk/assets/uploads/2021/07/06/the-alchemist-a-graphic-novel.jpg",
      noOfReads: 1000,
      uploadDate: "2021-10-10",
    },
    {
      storyName: "Harry Potter",
      genre: "Fantasy",
      author: "J.K. Rowling",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
      noOfReads: 1000,
      uploadDate: "2021-10-10",
    },
    {
      storyName: "Forty Rules of Love",
      genre: "Philosophy",
      author: "Elif Shafak",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Forty_Rules_of_Love_cover.jpg",
      noOfReads: 1000,
      uploadDate: "2021-10-10",
    },
  ];

  const RecentStoryData = {
    storyName: "The first Muslim",
    genre: "History",
    author: "Lesly Hezlton",
    imageURL:
      "https://book-shelf.pk/cdn/shop/files/TheFirstMuslim-Bookshelf.pkPakistan.jpg?v=1700908297",
  };

  return (
    <div>
      {/*Trending Heading*/}
      <Box sx={{ margin: "25px 25px 0px 25px" }}>
        <Typography variant="h3">Trending</Typography>
        <Stack direction="row">
          <LocalFireDepartmentIcon color="primary" />
          <Typography variant="subtitle2">Stories on Fire!</Typography>
        </Stack>
      </Box>

      {/*Trending Stories Carousel*/}
      <Box sx={{ margin: "0px 15px" }}>
        <Carousel
          responsive={StoryResponsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3500}
		  removeArrowOnDeviceType={["mobile"]}
        >
          <SlidingStoryCard
            title={data.title}
            description={data.description}
            imageURL={data.imageURL}
            initiator={data.initiator}
          />
          <SlidingStoryCard
            title={data.title}
            description={data.description}
            imageURL={data.imageURL}
            initiator={data.initiator}
          />
          <SlidingStoryCard
            title={data.title}
            description={data.description}
            imageURL={data.imageURL}
            initiator={data.initiator}
          />
          <SlidingStoryCard
            title={data.title}
            description={data.description}
            imageURL={data.imageURL}
            initiator={data.initiator}
          />
          <SlidingStoryCard
            title={data.title}
            description={data.description}
            imageURL={data.imageURL}
            initiator={data.initiator}
          />
          <SlidingStoryCard
            title={data.title}
            description={data.description}
            imageURL={data.imageURL}
            initiator={data.initiator}
          />
          <SlidingStoryCard
            title={data.title}
            description={data.description}
            imageURL={data.imageURL}
            initiator={data.initiator}
          />
          <SlidingStoryCard
            title={data.title}
            description={data.description}
            imageURL={data.imageURL}
            initiator={data.initiator}
          />
          <SlidingStoryCard
            title={data.title}
            description={data.description}
            imageURL={data.imageURL}
            initiator={data.initiator}
          />
        </Carousel>
      </Box>

      {/*Genre Heading*/}
      <Box sx={{ margin: "110px 7vw 25px 7vw" }}>
        <Typography variant="h3">Genre</Typography>
        <Stack direction="row">
          <LocalFireDepartmentIcon color="primary" />
          <Typography variant="subtitle2">
            Adventure Begins Where Genres Collide!
          </Typography>
        </Stack>
      </Box>

      {/*Genre Stories Carousel*/}
      <Box sx={{ margin: "0 6.5vw" }}>
        <Carousel
          responsive={CategoryResponsive}
          infinite={true}
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={true}
          removeArrowOnDeviceType={["superLargeDesktop", "mobile"]}
        >
          <SlidingCategoryCard
            title={CategoryData.title}
            NoOfStories={CategoryData.NoOfStories}
            imageURL={CategoryData.imageURL}
            NoOfReads={CategoryData.NoOfReads}
          />

          <SlidingCategoryCard
            title={CategoryData.title}
            NoOfStories={CategoryData.NoOfStories}
            imageURL={CategoryData.imageURL}
            NoOfReads={CategoryData.NoOfReads}
          />

          <SlidingCategoryCard
            title={CategoryData.title}
            NoOfStories={CategoryData.NoOfStories}
            imageURL={CategoryData.imageURL}
            NoOfReads={CategoryData.NoOfReads}
          />

          <SlidingCategoryCard
            title={CategoryData.title}
            NoOfStories={CategoryData.NoOfStories}
            imageURL={CategoryData.imageURL}
            NoOfReads={CategoryData.NoOfReads}
          />

          <SlidingCategoryCard
            title={CategoryData.title}
            NoOfStories={CategoryData.NoOfStories}
            imageURL={CategoryData.imageURL}
            NoOfReads={CategoryData.NoOfReads}
          />
        </Carousel>
      </Box>

      <BestSellers stories={BestSellersData} />

      {/*Latest Posts*/}
      <div className="home-two-recent-post pb-100">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-lg-12">
              <div className="section-title-2">
                <div className="titel">
                  <h4 style={{ fontSize: "30px" }}>Latest</h4>
                  <div className="dash"></div>
                </div>
                <div className="col-lg-3 d-flex justify-content-lg-end justify-content-center">
                  <a
                    href="blog-standard.html"
                    className="eg-btn arrow-btn-2 mt-lg-0 mt-4"
                  >
                    Explore More<i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="row justify-content-center gy-4">
                <RecentStoryCard
                  storyName={RecentStoryData.storyName}
                  genre={RecentStoryData.genre}
                  author={RecentStoryData.author}
                  imageURL={RecentStoryData.imageURL}
                />
                <RecentStoryCard
                  storyName={RecentStoryData.storyName}
                  genre={RecentStoryData.genre}
                  author={RecentStoryData.author}
                  imageURL={RecentStoryData.imageURL}
                />
                <RecentStoryCard
                  storyName={RecentStoryData.storyName}
                  genre={RecentStoryData.genre}
                  author={RecentStoryData.author}
                  imageURL={RecentStoryData.imageURL}
                />
                <RecentStoryCard
                  storyName={RecentStoryData.storyName}
                  genre={RecentStoryData.genre}
                  author={RecentStoryData.author}
                  imageURL={RecentStoryData.imageURL}
                />
              </div>
            </div>
            <Stack className="col-lg-4" direction="column" justifyContent="center" bgcolor="#FAF9F6">
              <Stack className="section-title-2 two mb-30" direction="row" justifyContent="center">
                <h4>Writer of the Month</h4>
                <div className="dash"></div>
              </Stack>
              <div className="another-post-area mb-50">
				<AuthorOfTheMonth/>
			  </div>
            </Stack>
          </div>
        </div>
      </div>

      {/*Top Picks Carousel*/}
      <Typography sx={{ margin: "110px 7vw 25px 7vw" }} variant="h3">
        Top Picks For You
      </Typography>
      <Box sx={{ margin: "0 6.5vw" }}>
        <Carousel
          responsive={CategoryResponsive}
          infinite={true}
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={true}
          removeArrowOnDeviceType={["superLargeDesktop", "mobile"]}
        >
          <SlidingCategoryCard
            title={CategoryData.title}
            NoOfStories={CategoryData.NoOfStories}
            imageURL={CategoryData.imageURL}
            NoOfReads={CategoryData.NoOfReads}
          />

          <SlidingCategoryCard
            title={CategoryData.title}
            NoOfStories={CategoryData.NoOfStories}
            imageURL={CategoryData.imageURL}
            NoOfReads={CategoryData.NoOfReads}
          />

          <SlidingCategoryCard
            title={CategoryData.title}
            NoOfStories={CategoryData.NoOfStories}
            imageURL={CategoryData.imageURL}
            NoOfReads={CategoryData.NoOfReads}
          />

          <SlidingCategoryCard
            title={CategoryData.title}
            NoOfStories={CategoryData.NoOfStories}
            imageURL={CategoryData.imageURL}
            NoOfReads={CategoryData.NoOfReads}
          />

          <SlidingCategoryCard
            title={CategoryData.title}
            NoOfStories={CategoryData.NoOfStories}
            imageURL={CategoryData.imageURL}
            NoOfReads={CategoryData.NoOfReads}
          />
        </Carousel>
      </Box>
    </div>
  );
};

export default Explore;
