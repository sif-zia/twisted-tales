import 'reactflow/dist/style.css';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactFlow, { Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import api from '../api/api';
import { Stack, CircularProgress, Button, Typography, Paper, TextField, InputAdornment } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import dagre from 'dagre';
import ChapterNode from '../components/ChapterNode';
import { getCrrUser } from '../slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPage } from '../slices/navbarSlice';

const nodeWidth = 405;
const nodeHeight = 480;

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes, edges) => {
	dagreGraph.setGraph({ rankdir: 'TB' });

	nodes.forEach((node) => {
		dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
	});

	edges.forEach((edge) => {
		dagreGraph.setEdge(edge.source, edge.target);
	});

	dagre.layout(dagreGraph);

	const introductionChapter = nodes.find(node => node.data.chapter.title === 'Introduction');
	const introductionPosition = dagreGraph.node(introductionChapter.id);

	const xOffset = introductionPosition.x - window.innerWidth / 2 + nodeWidth / 2;
	const yOffset = introductionPosition.y - window.innerHeight / 2 + nodeHeight / 2;

	const layoutedNodes = nodes.map((node) => {
		const nodeWithPosition = dagreGraph.node(node.id);

		node.position = {
			x: nodeWithPosition.x - xOffset,
			y: nodeWithPosition.y - yOffset,
		};

		return node;
	});

	return { nodes: layoutedNodes, edges };
};


function StoryRoadmap() {
	const { storyId } = useParams();
	const [nodes, setNodes] = useState([]);
	const [edges, setEdges] = useState([]);
	const [loading, setLoading] = useState(true);
	const [story, setStory] = useState(null);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [isOwned, setIsOwned] = useState(null);
	const [isBuyingDialogOpen, setIsBuyingDialogOpen] = useState(false);

	const handleBuyingDialogOpen = () => {
		setIsBuyingDialogOpen(true);
	};

	const handleBuyingDialogClose = () => {
		setIsBuyingDialogOpen(false);
	};

	const [openDialog, setOpenDialog] = useState(false);

	const navigate = useNavigate();
	const crrUser = useSelector(getCrrUser);
	const reactFlowWrapper = useRef(null);
	const dispatch = useDispatch();
	dispatch(setPage("story roadmap"));

	const handleOpenDialog = () => {
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	const handleDeleteStory = async () => {
		try {
			const response = await api.delete(`/story/${storyId}`);
			setSuccess(response.data.message);
		} catch (error) {
			setError(error.response.data.error);
		}
	}

	const handleBuyStory = async () => {
		try {
			const response = await api.post(`/story/${storyId}/buy`);
			setSuccess(response.data.message);
			navigate(0);
		} catch (error) {
			setError(error.response.data.error);
		}
	}

	useEffect(() => {
		const fetchStory = async () => {
			try {
				const response = await api.get(`/story/${storyId}`);
				const author = await api.get(`/user/${response.data.story.initiator}`);
				
				setStory({ ...response.data.story, author: author.data.user });
			} catch (error) {
				console.error('Error fetching story:', error);
			}
		};

		fetchStory();
	}, [storyId]);

	useEffect(() => {
		const fetchStoryRoadmap = async () => {
			try {
				const response = await api.get(`/story/${storyId}/roadmap`);
				const { nodes, edges } = response.data;
				const isOwnedResponse = await api.get(`/story/${storyId}/isowned`);
				setIsOwned(isOwnedResponse.data.isOwned);

				console.log(isOwnedResponse.data.isOwned);

				const formattedNodes = nodes.map((node) => ({
					id: node._id,
					type: 'chapter-node',
					data: { chapter: node, isOwned: isOwnedResponse.data.isOwned },
					position: { x: Math.random() * 500, y: Math.random() * 500 }
				}));

				const formattedEdges = edges.map((edge) => ({
					id: `${edge.source}-${edge.target}`,
					source: edge.source,
					target: edge.target,
					type: 'Straight',
					arrowHeadType: 'arrowclosed'
				}));

				const layoutedElements = getLayoutedElements(formattedNodes, formattedEdges);
				setNodes(layoutedElements.nodes);
				setEdges(layoutedElements.edges);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching story roadmap:', error);
				setLoading(false);
			}
		};

		fetchStoryRoadmap();
	}, [storyId]);

	if (loading) {

		return (
			<Stack style={{ width: '100%', height: '70vh', justifyContent: 'center', alignItems: 'center' }}>
				<CircularProgress style={{ width: "75px" }} />
			</Stack>
		);
	}

	return (
		<Stack style={{ width: '100%', height: '70vh', justifyContent: 'center', alignItems: 'center' }}>
			{story && !loading &&
				<Paper elevation={1} style={{ width: '100%', backgroundColor: '#f5f4e9' }}>
					<Stack direction="row" width="100%" justifyContent="space-between" paddingX={3} paddingY={1}>
						<div>
							<Typography variant="h2" color="primary">{story.title + " Roadmap"}</Typography>
							<Typography variant="subtitle1" color="grey" paddingLeft={3}>{"by " + story.author.name}</Typography>
						</div>
						{!isOwned && <React.Fragment>
							<Button variant="outlined" onClick={handleBuyingDialogOpen}>
								Buy Now
							</Button>
							<Dialog
								open={isBuyingDialogOpen}
								onClose={handleBuyingDialogClose}
								PaperProps={{
									component: 'form',
									onSubmit: () => { },
								}}
							>
								<DialogTitle>Buy this Story</DialogTitle>
								<DialogContent>
									<DialogContentText>
										Enter your JazzCash or EasyPaisa account to buy to this story for {story.price} Rs.
									</DialogContentText>
									<TextField
										fullWidth
										autoFocus
										label="Account No."
										id="outlined-start-adornment"
										sx={{ mt: 3}}
										InputProps={{
											startAdornment: <InputAdornment position="start">+92</InputAdornment>,
										}}
									/>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleBuyingDialogClose}>Cancel</Button>
									<Button onClick={handleBuyStory}>Confirm</Button>
								</DialogActions>
							</Dialog>
						</React.Fragment>}
						{(crrUser._id === story.initiator) && <React.Fragment>
							<Button variant="contained" onClick={handleOpenDialog} color="primary">
								Delete Story
							</Button>
							<Dialog
								open={openDialog}
								onClose={handleCloseDialog}
								aria-labelledby="alert-dialog-title"
								aria-describedby="alert-dialog-description"
							>
								<DialogTitle id="alert-dialog-title">
									{"Delete " + story?.title + "?"}
								</DialogTitle>
								<DialogContent>
									<DialogContentText id="alert-dialog-description">
										{!error && !success && "Are you sure you want delete this story?"}
										{error && error}
										{success && success}
									</DialogContentText>
								</DialogContent>
								<DialogActions>
									<Button variant="outlined" onClick={handleCloseDialog} autoFocus >Cancel</Button>
									{!success && !error && <Button variant="contained" onClick={handleDeleteStory} color="error"><strong>Delete</strong></Button>}
									{success && <Button variant="contained" onClick={() => { navigate("/") }} color="error"><strong>Okay</strong></Button>}
									{error && <Button variant="contained" onClick={handleCloseDialog} color="error"><strong>Okay</strong></Button>}
								</DialogActions>
							</Dialog>
						</React.Fragment>}
					</Stack>
				</Paper>}
			{!loading &&
				<div style={{ width: '100%', height: '100%', backgroundColor: '#f0f4f8' }}>

					<ReactFlow
						nodes={nodes}
						edges={edges}
						nodesDraggable={false}
						edgesFocusable={false}
						panOnScroll={true}
						zoomOnScroll={false}
						nodeTypes={{ 'chapter-node': ChapterNode }}
						ref={reactFlowWrapper}
					>
						<Controls />
					</ReactFlow>
				</div>}
		</Stack>
	);
}

export default StoryRoadmap;
