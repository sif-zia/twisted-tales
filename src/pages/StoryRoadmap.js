import 'reactflow/dist/style.css';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactFlow, { Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import api from '../api/api';
import { Stack, CircularProgress } from '@mui/material';
import dagre from 'dagre';
import ChapterNode from '../components/ChapterNode';

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

	// Find the position of the introduction chapter (start node)
	const introductionChapter = nodes.find(node => node.data.chapter.title === 'Introduction');
	const introductionPosition = dagreGraph.node(introductionChapter.id);

	// Calculate the offset to center the view on the introduction chapter
	const xOffset = introductionPosition.x - window.innerWidth / 2 + nodeWidth / 2;
	const yOffset = introductionPosition.y - window.innerHeight / 2 + nodeHeight / 2;

	const layoutedNodes = nodes.map((node) => {
		const nodeWithPosition = dagreGraph.node(node.id);

		// Adjust node positions based on the offset
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

	const reactFlowWrapper = useRef(null);

	useEffect(() => {
		const fetchStoryRoadmap = async () => {
			try {
				const response = await api.get(`/story/${storyId}/roadmap`);
				const { nodes, edges } = response.data;

				const formattedNodes = nodes.map((node) => ({
					id: node._id,
					type: 'chapter-node',
					data: { chapter: node },
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
				<CircularProgress style={{width: "75px"}}/>
			</Stack>
		);
	}

	return (
		<Stack style={{ width: '100%', height: '70vh', justifyContent: 'center', alignItems: 'center' }}>
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
