import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Grid, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import { Box } from "@mui/material";
import { motion } from "framer-motion"
import { Handle, Position } from 'reactflow';
import { useNavigate } from "react-router-dom";

import api from "../api/api";


const nodeWidth = 405;
const nodeHeight = 480;

const ChapterNode = ({ data }) => {
	const [likes, setLikes] = useState(null);

	const navigate = useNavigate();
	const chapter = data.chapter;
	const isOwned = data.isOwned;

	const handleGoToRead = () => {
		navigate(`/story/${chapter.story}/chapter/${chapter._id}`);
	}

	const handleAddSequel = () => {
		const params = { storyId: chapter.story, prevChapter: chapter._id }
		navigate(`/story/${chapter.story}/addChapter`, { state: params });
	}

	useEffect(() => {
		const getLikes = async () => {
			try {
				const response = await api.get(`/story/${chapter.story}/chapter/${chapter._id}/reactions`);
				setLikes(response.data.likes);
			} catch (error) {
				console.error('There was a problem fetching the likes:', error);
			}
		}

		getLikes();
	}, [chapter]);


	return (
		<>
			<Handle type="target" position={Position.Top} isConnectable={true} />
			<Box style={{ margin: "11px", maxWidth: nodeWidth, maxHeight: nodeHeight }}>
				<Card sx={{ height: "95%", borderRadius: "25px" }}>
					<motion.div whileHover={{ scale: 1.1 }}  >
						<CardMedia sx={{ height: "150px", overflow: "hidden" }}
							component="img"
							alt="story cover"
							image={`http://localhost:4000/getImage?imagePath=${chapter?.coverImgURL}`}
						/>
					</motion.div>
					<CardContent>
						<Grid container
							rowSpacing={1}
							columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
							<Grid item xs={12} display="flex" justifyContent="center" alignItems="center" mb="10px" mt="10px" >
								<Typography variant="h5">{chapter?.title} </Typography>
							</Grid>
							<Grid item xs={12} display="flex" justifyContent="center" alignItems="center" >
								<Stack direction="row"   >
									<Box style={{ borderRight: '2px solid #ddd', padding: "0px 5px" }}>
										<Typography variant="subtitle1" color="#6b726e">{chapter?.author?.name}</Typography>
									</Box>
									{/* <Divider orientation="vertical" variant="middle" flexItem sx={{height:"100%"}}/> */}
									<Box style={{ paddingLeft: "5px" }}>
										{likes !== null ? <Typography variant="subtitle1" color="#6b726e">{likes}{likes === 1 ? " Like" : " Likes"}</Typography> :
										<Typography variant="subtitle1" color="#6b726e">{chapter?.readBy.length}{chapter?.readBy.length === 1 ? " Read" : " Reads"}</Typography>}
									</Box>
								</Stack>
							</Grid>
						</Grid>
					</CardContent>
					{isOwned && <CardActions>
						<Stack direction="row" width="100%" justifyContent="space-evenly">
							<Button variant="contained" color="primary" sx={{ marginX: "10px", marginBottom: "5px" }} onClick={handleGoToRead}>Read</Button>
							<Divider orientation="vertical" variant="middle" flexItem sx={{ height: "100%" }} />
							<Button variant="contained" color="primary" sx={{ marginX: "10px", marginBottom: "5px" }} onClick={handleAddSequel}>Add Sequel</Button>
						</Stack>
					</CardActions>}
				</Card>
			</Box>
			<Handle type="source" position={Position.Bottom} isConnectable={true} />
		</>
	);
}

export default ChapterNode;