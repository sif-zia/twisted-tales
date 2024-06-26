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
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { useRef } from "react";
import api from "../api/api"
import { getCrrUser, loginUser } from "../slices/userSlice";
import { useMediaQuery } from "@mui/material";

const UpdateProfile = () => {

  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [email, setEmail] = useState("")
  const [isUpdate, setIsUpdate] = useState(false)
  const [profilePic, uploadProfilePic] = useState(null);
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)


  const navigate = useNavigate()
  const dispatch = useDispatch();
  dispatch(setPage("update profile"));



  const crrUser = useSelector(getCrrUser);
  useEffect(() => {
    if (crrUser) {
      setName(crrUser.name)
      setBio(crrUser.bio)
      setEmail(crrUser.email)
    }
  }, [])

  useEffect(() => {
    setError(null)
    setSuccess(null)
  }, [name, bio, profilePic])



  useEffect(() => {

    if (!crrUser) return

    console.log("Is update", isUpdate);

    if (crrUser.bio !== null) {
      if (name !== crrUser.name || bio !== crrUser.bio || profilePic) {
        setIsUpdate(true)
      }
      else {
        setIsUpdate(false)
      }
    }
    else {
      if (name !== crrUser.name || profilePic) {
        setIsUpdate(true)
      }
      else {
        setIsUpdate(false)
      }
    }
  }, [name, bio, profilePic, crrUser])

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
    if (!name) {
      setError("Name is a required field");
      return;
    }


    const userFormData = new FormData();
    if (name !== crrUser.name) {
      userFormData.append("name", name);
    }
    if (bio !== crrUser.bio) {
      userFormData.append("bio", bio);
    }
    if (profilePic !== null) {
      userFormData.append("profileImg", profilePic);
    }


    try {
      const userResponse = await api.put(`/user/updateProfile/${crrUser._id}`, userFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(loginUser(userResponse.data.updatedUser))
      if (userResponse.status == 200) {
        setSuccess(true)
        setIsUpdate(false)
      }


    } catch (err) {
      console.log(err.response.data.error)
      setError(err.response.data.error)
    }
  };
  const isDesktop = useMediaQuery("(min-width: 750px)");


  return (

    <div style={{ width: "100%", height: "100%" }}>
      <div className="breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Account</a></li>
              <li className="breadcrumb-item active" aria-current="page">Update User Profile</li>
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
        <Typography variant="h3">Update Profile</Typography>
        <form onSubmit={handleUpdateProfile}>
          <Stack direction={isDesktop ? "row" : "column-reverse"} gap={5} marginTop={2}>
            <Grid container justifyContent="center" spacing={2} >

              {success &&
                <Grid item xs={12}>

                  <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Profile Updated Successfully!
                  </Alert>
                </Grid>
              }


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
              {profilePic && <Grid item xs={12}>
                <Stack direction="row" width="100%" spacing={2} justifyContent="space-between" alignItems="center">
                  <TextField
                    id="cover-img"
                    label="Upload Profile"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                      style: { width: 'auto' },
                      inputProps: {
                        style: { width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
                      },
                    }}
                    value={profilePic.name} />
                  <Box height="100%">
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
                        height="100%"
                      >
                        Reselect
                      </Button>
                    </FormControl>
                  </Box>
                </Stack>
              </Grid>}
              <Grid item xs={12}>
                <Stack direction="row" width="100%" justifyContent="space-between" gap={2}>
                  {!profilePic && <FormControl>
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
                  </FormControl>}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!isUpdate}
                  >
                    Update Profile
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            <img src={`http://localhost:4000/getImage?imagePath=${crrUser.profileImgURL}`} style={{ width: "300px", maxHeight: "300px", borderRadius: "50px" }} alt="User Profile"></img>
          </Stack>

        </form>
      </Box>
    </div>
  );
};

export default UpdateProfile;
