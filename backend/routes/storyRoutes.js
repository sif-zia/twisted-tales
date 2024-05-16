const express = require("express");

const {
    addStory,
    getStory,
    searchStory,
    getStoryRoadmap,
    deleteStory,
    addChapter,
    getChapter,
    deleteChapter,
    searchChapter,
    addChapterReaction,
    removeReaction,
    markRead,
    getReaction,
    getAuthors,
    isMarkedRead,
    getNoOfReactions,
} = require("../controllers/storyController");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.delete("/:id/chapter/:chapterId/react", verifyToken, removeReaction);
router.get("/:id/chapter/:chapterId/react", verifyToken, getReaction);
router.post("/:id/chapter/:chapterId/react", verifyToken, addChapterReaction);
router.get("/:id/chapter/:chapterId/reactions", verifyToken, getNoOfReactions);
router.post("/:id/chapter/:chapterId/markRead", verifyToken, markRead);
router.get("/:id/chapter/:chapterId/markRead", verifyToken, isMarkedRead);
router.delete("/:id/chapter/:chapterId", verifyToken, deleteChapter);
router.get("/:id/chapter/:chapterId", verifyToken, getChapter);
router.post("/:id/chapter", verifyToken, addChapter);
router.get("/:id/roadmap", verifyToken, getStoryRoadmap);
router.get("/search/chapter", verifyToken, searchChapter);
router.get("/search", verifyToken, searchStory);
router.get("/authors", verifyToken, getAuthors);
router.get("/:id", verifyToken, getStory);
router.delete("/:id", verifyToken, deleteStory);
router.post("/", verifyToken, addStory);

module.exports = router;
