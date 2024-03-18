import React from "react";
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
import { useState } from "react";
import { useRef } from "react";
const NextChapter = [{ name: "haha", id: 1 },
                    { name: "wowww", id: 2 },
                    { name: "grapeee", id: 3 }]; {/*Show chapters at current and greater depth only */}

const StoryName="Mystory"
const AddChapter = () => {
    const fileInputRef = useRef(null);

    const handleUploadCover = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        // You can access file properties such as file.name, file.type, file.size, etc.
    };

    const [genre, setGenre] = useState(null);
    const [type, setType] = useState(null);
    const [file, setFile] = useState(null);

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const dispatch = useDispatch();
    dispatch(setPage("add chapter"));



    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="breadcrumb-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index-2.html">Story</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Add Chapter</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <Box
                sx={{
                    margin: {
                        xs: "50px 3vw 0 3vw", // Margin of 10px on extra-small screens and up
                        sm: "50px 5vw 0 5vw", // Margin of 20px on small screens and up
                        md: "50px 10vw 0 10vw", // Margin of 30px on medium screens and up
                        lg: "50px 15vw 0 15vw", // Margin of 40px on large screens and up
                        xl: "50px 16.25vw 0 16.25vw", // Margin of 50px on extra-large screens and up
                    },
                }}
                minHeight="65vh"
            >
                <Typography variant="h3">Add Chapter to {StoryName}</Typography>

                <Grid container justifyContent="center" spacing={2} marginTop={2}>
                    <Grid item xs={6}>
                        <TextField variant="outlined" fullWidth label="Title" id="title" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="next-chp-label">Next Chapter</InputLabel>
                            <Select
                                labelId="next-chp-label"
                                id="next-chp"
                                value={type}
                                label="Next Chapter"
                                onChange={handleTypeChange}
                            >
                                {NextChapter.map((chapter) => (
                                    <MenuItem value={chapter.id}>{chapter.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            multiline
                            label="Description"
                            id="desc"
                        />
                    </Grid>



                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            multiline
                            label="Draft"
                            id="draft"
                            rows={3}
                        />
                    </Grid>
                    {file && <Grid item xs={12}>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            id="cover-img"
                            label="Cover Image"
                            defaultValue={file.name}
                            fullWidth
                        />
                    </Grid>}
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between">
                            <button type="submit" class="eg-btn btn--primary btn--lg">
                                Publish
                            </button>

                            <FormControl>
                                <InputLabel htmlFor="upload-file" style={{ display: "none" }}>
                                    Upload Cover
                                </InputLabel>
                                <Input
                                    id="upload-file"
                                    type="file"
                                    inputRef={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: "none" }}
                                />
                                <Button
                                    onClick={handleUploadCover}
                                    variant="contained"
                                    component="span"
                                    style={{ minHeight: "55px" }}
                                >
                                    Upload Cover
                                </Button>
                            </FormControl>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AddChapter;
