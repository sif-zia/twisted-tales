const express = require("express");

const { getLatestStories, getTrendingStories, getGenres, getTopPicks, getWriterOfTheMonth, getGenreCover, getTopThree } = require("../controllers/exploreController")

const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/latestStories", getLatestStories)
router.get("/trendingStories", getTrendingStories)
router.get("/genres", getGenres)
router.get("/topPicks", verifyToken, getTopPicks)
router.get("/writerOfTheMonth", getWriterOfTheMonth)
router.get("/getGenreCover", getGenreCover)
router.get("/topThree", getTopThree)

module.exports = router;