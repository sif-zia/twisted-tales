import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

import { getCrrUser } from "../slices/userSlice";

const UpdateProfile = () => {

  const [name, setName] = useState(null)
  const [bio, setBio] = useState(null)
  const [email, setEmail] = useState(null)
  const [isUpdate, setIsUpdate] = useState(false)
  const [profilePic, uploadProfilePic] = useState(null);
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch();
  dispatch(setPage("add story"));

  const crrUser = useSelector(getCrrUser);
  if (!crrUser) {
    setName(crrUser.name)
    setBio(crrUser.bio)
    setEmail(crrUser.email)
  }

  const profilePicRef = useRef(null);

  const handleProfilePicUpload = () => {
    profilePicRef.current.click();
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    uploadProfilePic(file);
  };


  const handleUpdateProfile = async (e) => {
    e.preventDefault();


    if (!name || !bio || !profilePic) {
      setError("Please fill all the fields");
      return;
    }
    const storyFormData = new FormData();
    storyFormData.append("title", name);
    storyFormData.append("desc", bio);
    storyFormData.append("coverImg", profilePic);


    try {
      const storyResponse = await api.post("/story", storyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/")


    } catch (err) {
      console.log(err.response.data.error)
      setError(err.response.data.error)
    }
  };



  return (

    <div style={{ width: "100%", height: "100%" }}>
      <div className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index-2.html">Story</a></li>
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
        <form onSubmit={handleUpdateProfile}>
          <Grid container justifyContent="center" spacing={2} marginTop={2}>
            {error && <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth label="Name"
                id="name"
                value={name}
                onChange={(e) => { setName(e.target.value) }} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                label="Email"
                id="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                label="Bio"
                id="bio"
                value={bio}
                onChange={(e) => { setBio(e.target.value) }}
                rows={2}
              />
            </Grid>
            {profilePic && <Grid item xs={9}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                id="cover-img"
                label="Upload Profile"
                fullWidth
                value={profilePic.name} />
            </Grid>}
            {profilePic && <Grid item xs={3}>
              <FormControl>
                <InputLabel htmlFor="upload-file" style={{ display: "none" }}>
                  Reselect
                </InputLabel>
                <Input
                  id="upload-file"
                  type="file"
                  inputRef={profilePicRef}
                  onChange={handleProfilePicChange}
                  style={{ display: "none" }}
                />
                <Button
                  onClick={handleProfilePicUpload}
                  variant="contained"
                  component="span"
                  minHeight="200px"
                >
                  Reselect
                </Button>
              </FormControl>
            </Grid>}
            {!profilePic && <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="upload-file" style={{ display: "none" }}>
                  Upload Profile Picture
                </InputLabel>
                <Input
                  id="upload-file"
                  type="file"
                  inputRef={profilePicRef}
                  onChange={handleProfilePicChange}
                  style={{ display: "none" }}
                />
                <Button
                  onClick={handleProfilePicUpload}
                  variant="contained"
                >
                  Upload Profile Picture
                </Button>
              </FormControl>
            </Grid>}
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default UpdateProfile;
