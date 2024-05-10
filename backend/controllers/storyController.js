const addStory = async (req, res) => {
	res.json({ message: "Add Story" });
}

const getStory = async (req, res) => {
	res.json({ message: "Get Story" });
}

const searchStory = async (req, res) => {
	res.json({ message: "Search Story" });
}

const getStoryRoadmap = async (req, res) => {
	res.json({ message: "Get Story Roadmap" });
}

const deleteStory = async (req, res) => {
	res.json({ message: "Delete Story" });
}

const addChapter = async (req, res) => {
	res.json({ message: "Add Chapter" });
}

const getChapter = async (req, res) => {
	res.json({ message: "Get Chapter" });
}

const deleteChapter = async (req, res) => {
	res.json({ message: "Delete Chapter" });
}

module.exports = { addStory, getStory, searchStory, getStoryRoadmap, deleteStory, addChapter, getChapter, deleteChapter };