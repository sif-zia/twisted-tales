const express = require("express");

const { addStory, getStory, searchStory, getStoryRoadmap, deleteStory, addChapter, getChapter, deleteChapter} = require("../controllers/storyController");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.delete("/:id/chapter/:chapterId", verifyToken, deleteChapter);
router.get("/:id/chapter/:chapterId", verifyToken, getChapter);
router.post("/:id/chapter", verifyToken, addChapter);
router.get("/:id/roadmap", verifyToken, getStoryRoadmap);
router.get("/search", verifyToken, searchStory);
router.get("/:id", verifyToken, getStory);
router.delete("/:id", verifyToken, deleteStory);
router.post("/", verifyToken, addStory);

module.exports = router;