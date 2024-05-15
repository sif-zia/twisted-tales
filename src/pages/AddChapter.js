import React, { useEffect } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/api";
import { Alert } from "@mui/material";

const getName = (Id, nodes) => {
    const node = nodes.filter((chapter) => chapter._id === Id)[0];
    return node.title;
}

const BFS = (edges, start, crr, nodes) => {
    const queue = [start._id];
    const depth = {}
    depth[start._id] = 0;
    const visited = new Set();
    let result = [];

    let crrDepth = 0;
    while (queue.length > 0) {
        const current = queue.shift();

        if (visited.has(current)) {
            continue;
        }
        
        visited.add(current);
        result.push({ chapterId: current, depth: depth });

        let found = false;
        for (const edge of edges) {
            if (edge.source === current) {
                console.log("From", getName(edge.source, nodes), "To", getName(edge.target, nodes))
                queue.push(edge.target);
                found = true;
            }
        }

        if (found)
            depth+=1;
        console.log("Depth: ", depth);
    }
    return { result, crrDepth };
};

const AddChapter = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [nextChapters, setNextChapters] = useState([]);
    const [story, setStory] = useState({});
    const { storyId, prevChapter: prevChapterId } = location.state;
    const [prevChapter, setPrevChapter] = useState(null);
    const [error, setError] = useState(null);

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [content, setContent] = useState("");
    const [nextChapter, setNextChapter] = useState("No Next Chapter");

    useEffect(() => {
        const sendEdgesRequest = async () => {
            try {
                const response = await api.get(`/story/${storyId}/roadmap`);
                const { nodes, edges, start } = response.data;

                setPrevChapter(nodes.filter((chapter) => chapter._id === prevChapterId)[0]);

                const { result, crrDepth } = BFS(edges, start, prevChapterId, nodes);
                console.log("Result: ", result, "CrrDepth: ", crrDepth);
                const possibleNxtChpIdsWithDepth = result.filter((chapter) => (chapter.depth > crrDepth));
                const nextChpIds = possibleNxtChpIdsWithDepth.map((chapter) => (chapter.chapterId));
                const nextChps = nodes.filter((chapter) => nextChpIds.includes(chapter._id));
                setNextChapters(nextChps);

                const storyResponse = await api.get(`/story/${storyId}`);
                setStory(storyResponse.data.story);
            }
            catch (error) {
                console.error("Error fetching edges: ", error);
                setError(error);
            }
        }

        sendEdgesRequest();
    }, [storyId, prevChapterId]);

    useEffect(() => {
        setError(null);
    }, [title, desc, content, file]);

    const handleChapterUpload = async (event) => {
        event.preventDefault();

        if (!title || !desc || !content || !file) {
            setError("All fields are required");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("desc", desc);
            formData.append("content", content);
            formData.append("coverImg", file);
            formData.append("prevChpId", prevChapterId);
            if (nextChapter !== "No Next Chapter") {
                formData.append("nextChpId", nextChapter);
            }

            await api.post(`/story/${storyId}/chapter`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate(`/story/${storyId}`);
        } catch (error) {
            console.error("Error adding chapter: ", error);
        }
    };


    const fileInputRef = useRef(null);

    const handleUploadCover = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
    };


    const handleNextChapterChange = (event) => {
        setNextChapter(event.target.value);
    };

    const dispatch = useDispatch();
    dispatch(setPage("add chapter"));



    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="breadcrumb-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index-2.html">{story?.title}</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Add Chapter</li>
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
                <Typography variant="h3">Add Sequel to {prevChapter?.title}</Typography>

                <Grid container justifyContent="center" spacing={2} marginTop={2}>
                    {error && <Grid item xs={12}>
                        <Alert severity="error">{error}</Alert>
                    </Grid>}
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Title"
                            id="title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="next-chp-label">Next Chapter</InputLabel>
                            <Select
                                labelId="next-chp-label"
                                id="next-chp"
                                value={nextChapter}
                                label="Next Chapter"
                                onChange={handleNextChapterChange}
                            >
                                <MenuItem key="no-next-chapter" value="No Next Chapter" selected="true">No Next Chapter</MenuItem>
                                {nextChapters.map((chapter) => (
                                    <MenuItem key={chapter._id} value={chapter._id}>{chapter.title}</MenuItem>
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
                            value={desc}
                            onChange={(e) => { setDesc(e.target.value) }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            multiline
                            label="Draft"
                            id="draft"
                            value={content}
                            onChange={(e) => { setContent(e.target.value) }}
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
                            value={file.name}
                            fullWidth
                        />
                    </Grid>}
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between">
                            <button type="submit" class="eg-btn btn--primary btn--lg" onClick={handleChapterUpload}>
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
