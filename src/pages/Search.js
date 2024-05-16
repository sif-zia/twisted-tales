import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  Grid,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchItem from "../components/SearchItem";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useMediaQuery, CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import { setPage } from "../slices/navbarSlice";
import api from "../api/api";
import Alert from '@mui/material/Alert';
import { borderRadius } from "@mui/system";




const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



const Search = () => {
  const dispatch = useDispatch();
  dispatch(setPage("search"));

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    // console.log(personName);
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery("(min-width: 1500px)");




  const [chapters, setChapters] = useState([]);
  const [stories, setStories] = useState([]) //show trending stories by default
  const [search, setSearch] = useState(null);
  const [names, setNames] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const sendAuthorsRequest = async () => {
    try {
      const authorsResponse = await api.get("http://localhost:4000/story/authors")
      const temp = authorsResponse.data.authors
      setNames(temp);
    }
    catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    sendAuthorsRequest()
  }, [])

  const sendChapterSearchRequest = async () => {
    try {
      const chaptersResponse = await api.get(
        "http://localhost:4000/story/search/chapter",
        {
          params: {
            keyword: search,
          },
        }
      );
      const temp = chaptersResponse.data.chapters;
      setChapters(temp);

    } catch (err) {
      console.log(err);
    }
  };

  const sendStorySearchRequest = async () => {
    try {
      const storiesResponse = await api.get(
        "http://localhost:4000/story/search",
        {
          params: {
            keyword: search,
          },
        }
      );
      const temp = storiesResponse.data.stories;
      setStories(temp);
    } catch (err) {
      console.log(err);
    }
  };




  useEffect(() => {

    const handleSearchRequest = async () => {

      setIsLoading(true)
      setChapters([]);
      setStories([])
      if (search !== "") {
        await sendChapterSearchRequest();
        await sendStorySearchRequest();
        setIsLoading(false)
      }
    }

    handleSearchRequest()

  }, [search]);



  return (
    <div>
      <div className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Story</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Search
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10}>
          <Grid item xs={12}>
            <Stack
              direction={isSmallScreen ? "column" : "row"}
              sx={{ padding: "0 15vw", margin: "30px 0" }}
              spacing={2}
            >
              <FormControl fullWidth variant="outlined">
                <OutlinedInput
                  style={{
                    borderRadius: "20px",
                  }}
                  id="outlined-adornment-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search"
                />
              </FormControl>


            </Stack>


            {isLoading && search!=="" &&
              <Grid>
                <Stack style={{ width: '100%', height: '70vh', justifyContent: 'center', alignItems: 'center' }}>
                  <CircularProgress style={{ width: "75px" }} />
                </Stack>
              </Grid>
            }
            {!isLoading && chapters && stories &&
              <Grid
                container
                direction={isDesktop ? "row" : "column"}
                spacing={2}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                my={2}
              >
                {stories?.map((story) => (
                  <Grid item xs={6}>
                    <SearchItem
                      storyName={story.title}
                      date={story.createdAt}
                      genre={story.genre}
                      coverImgURL={story.coverImgURL}
                      isStory={true}
                      storyId={story._id}
                      chapterId={""}
                    />
                  </Grid>
                ))}
                {chapters?.map((chapter) => (
                  <Grid item xs={6}>
                    <SearchItem
                      storyName={chapter.title}
                      date={chapter.createdAt}
                      genre={chapter.story.genre}
                      coverImgURL={chapter.coverImgURL}
                      isStory={false}
                      storyId={chapter.story._id}
                      chapterId={chapter._id}
                    />
                  </Grid>
                ))}

              </Grid>
            }
            {!isLoading && chapters.length == 0 && stories.length == 0 && search?.length > 0 &&
              <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Alert style={{ width: "30vw", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px" }} severity="warning">No Results Found</Alert>
              </Box>
            }
            <Stack justifyContent={"center"} alignItems={"center"} m={6}>
              <Pagination count={isSmallScreen ? 5 : 10} color="primary" />
              {/* onChange={changePage} */}
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Search;
