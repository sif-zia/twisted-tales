import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../slices/navbarSlice";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useRef } from "react";
import api from "../api/api"

const AddStory = () => {

  const [title, setTitle] = useState(null)
  const [storyDesc, setStoryDesc] = useState(null)
  const [genre, setGenre] = useState("Genre");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0)
  const [storyCover, setStoryCover] = useState(null);
  const [chapterCover, setChapterCover] = useState(null)
  const [chapterDesc, setChapterDesc] = useState(null)
  const [chapterContent, setChapterContent] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const genres = ["Genre", "Romance", "Drama", "Horror", "Thriller", "Suspense", "Comedy", "Fiction", "Sci-Fi", "Other"]
  const [showIntro, setShowIntro] = useState(false)
  const storyCoverRef = useRef(null);
  const chapterCoverRef = useRef(null)

  useEffect(() => {
    setError(null)
  }, [title, storyDesc, genre, type, price, storyCover, chapterCover, chapterDesc, chapterContent])


  const handleStoryCoverUpload = () => {
    storyCoverRef.current.click();
  };

  const handleChapterCoverUpload = () => {
    chapterCoverRef.current.click();
  }

  const handleStoryCoverChange = (event) => {
    const file = event.target.files[0];
    setStoryCover(file);
  };

  const handleChapterCoverChange = (event) => {
    const file = event.target.files[0];
    setChapterCover(file);
  };


  const dispatch = useDispatch();
  dispatch(setPage("add story"));

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleAddNewStory = async (e) => {
    e.preventDefault();


    if (!title || !storyDesc || genre === "Genre" || type === "" || !storyCover || !chapterDesc || !chapterContent || !chapterCover) {
      setError("Please fill all the fields");
      return;
    }
    const storyFormData = new FormData();
    storyFormData.append("title", title);
    storyFormData.append("desc", storyDesc);
    storyFormData.append("genre", genre);
    storyFormData.append("price", price);
    storyFormData.append("coverImg", storyCover);

    const chapterFormData = new FormData();
    chapterFormData.append("title", "Introduction");
    chapterFormData.append("desc", chapterDesc);
    chapterFormData.append("content", chapterContent);
    chapterFormData.append("coverImg", chapterCover);
    chapterFormData.append("isIntro", true);

    let storyId = null;
    try {
      const storyResponse = await api.post("/story", storyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      storyId = storyResponse.data.story._id
      const chapterResponse = await api.post(`/story/${storyResponse.data.story._id}/chapter`, chapterFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(chapterResponse.data.chapter)
      navigate("/")


    } catch (err) {
      console.log(err.response.data.error)
      setError(err.response.data.error)
      if (storyId) {
        const deleteStoryResponse = await api.delete(`/story/${storyId}`)
      }
    }
  };



  return (

    <div style={{ width: "100%", height: "100%" }}>
      <div className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Story</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add Story</li>
            </ol>
          </nav>
        </div>
      </div>
      <Box
        sx={{
          margin: {
            xs: "50px 3vw 0 3vw",
            sm: "50px 5vw 0 5vw",
            md: "50px 10vw 0 10vw",
            lg: "50px 15vw 0 15vw",
            xl: "50px 16.25vw 0 16.25vw",
          },
        }}
        minHeight="65vh"
      >
        <Typography variant="h3">Create a New Story</Typography>
        <form onSubmit={handleAddNewStory}>
          <Grid container justifyContent="center" spacing={2} marginTop={2}>
            {error &&
              <Grid item xs={12}>
                <Alert severity="error">{error}</Alert>
              </Grid>
            }
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth label="Title"
                id="title"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                label="Description"
                id="desc"
                value={storyDesc}
                onChange={(e) => { setStoryDesc(e.target.value) }}
              />
            </Grid>
            <Grid item xs={type === true ? 4 : 6}>
              <FormControl fullWidth>
                <InputLabel id="genre-label">Genre</InputLabel>
                <Select
                  labelId="genre-label"
                  id="genre"
                  value={genre}
                  label="Genre"
                  onChange={handleGenreChange}
                >
                  {genres.map(currGenre => (
                    <MenuItem value={currGenre}>{currGenre}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={type === true ? 4 : 6}>
              <FormControl fullWidth>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="type"
                  value={type}
                  label="Type"
                  onChange={handleTypeChange}
                >
                  <MenuItem value={false}>Free</MenuItem>
                  <MenuItem value={true}>Paid</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {type === true && (
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Price"
                  id="price"
                  value={price}
                  onChange={(e) => { setPrice(e.target.value) }}
                />
              </Grid>
            )}
            {storyCover && <Grid item xs={10}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                id="cover-img"
                label="Cover Image"
                fullWidth
                value={storyCover.name}

              />
            </Grid>}

            {storyCover && <Grid item xs={2}>
              <FormControl>
                <InputLabel htmlFor="upload-file" style={{ display: "none" }}>
                  Upload Cover
                </InputLabel>
                <Input
                  id="upload-file"
                  type="file"
                  inputRef={storyCoverRef}
                  onChange={handleStoryCoverChange}
                  style={{ display: "none" }}
                />
                <Button
                  onClick={handleStoryCoverUpload}
                  variant="contained"
                  component="span"
                  style={{ minHeight: "55px" }}
                >
                  Upload Cover
                </Button>
              </FormControl>
            </Grid>}
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="space-between">
                {!showIntro &&
                  <button type="button" onClick={() => { setShowIntro(true) }} class="eg-btn btn--primary btn--lg">
                    Add Intro Chapter
                  </button>
                }
                {!storyCover &&
                  <FormControl>
                    <InputLabel htmlFor="upload-file" style={{ display: "none" }}>
                      Upload Cover
                    </InputLabel>
                    <Input
                      id="upload-file"
                      type="file"
                      inputRef={storyCoverRef}
                      onChange={handleStoryCoverChange}
                      style={{ display: "none" }}
                    />
                    <Button
                      onClick={handleStoryCoverUpload}
                      variant="contained"
                      component="span"
                      style={{ minHeight: "55px" }}
                    >
                      Upload Cover
                    </Button>
                  </FormControl>
                }
              </Stack>
            </Grid>
            {showIntro &&

              <Grid item xs={12}>
                <Typography variant="h3" marginY={1}>Add Intro Chapter</Typography>
              </Grid>
            }
            {showIntro && <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                label="Description"
                id="intro-desc"
                rows={1}
                value={chapterDesc}
                onChange={(e) => { setChapterDesc(e.target.value) }}
              />
            </Grid>}

            {showIntro && <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                label="Content"
                id="intro-content"
                rows={3}
                value={chapterContent}
                onChange={(e) => { setChapterContent(e.target.value) }}
              />
            </Grid>}

            {chapterCover && <Grid item xs={10}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                id="cover-img"
                label="Cover Image"
                value={chapterCover.name}
                fullWidth
              />
            </Grid>}

            {chapterCover && <Grid item xs={2}>
              <FormControl>
                <InputLabel htmlFor="upload-file" style={{ display: "none" }}>
                  Upload Cover
                </InputLabel>
                <Input
                  id="upload-file"
                  type="file"
                  inputRef={chapterCoverRef}
                  onChange={handleChapterCoverChange}
                  style={{ display: "none" }}
                />
                <Button
                  onClick={handleChapterCoverUpload}
                  variant="contained"
                  component="span"
                  style={{ minHeight: "55px" }}
                >
                  Upload Cover
                </Button>
              </FormControl>
            </Grid>}
            {showIntro &&
              <Grid item xs={12} marginBottom={2}>
                <Stack direction="row" justifyContent="space-between">
                  <button type="submit" class="eg-btn btn--primary btn--lg">
                    Publish
                  </button>

                  {!chapterCover &&
                    <FormControl>
                      <InputLabel htmlFor="upload-file" style={{ display: "none" }}>
                        Upload Cover
                      </InputLabel>
                      <Input
                        id="upload-file"
                        type="file"
                        inputRef={chapterCoverRef}
                        onChange={handleChapterCoverChange}
                        style={{ display: "none" }}
                      />
                      <Button
                        onClick={handleChapterCoverUpload}
                        variant="contained"
                        component="span"
                        style={{ minHeight: "55px" }}
                      >
                        Upload Cover
                      </Button>
                    </FormControl>
                  }

                </Stack>

              </Grid>
            }


          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default AddStory;
