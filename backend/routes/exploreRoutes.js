const express = require("express");

const {getLatestStories, getTrendingStories, getGenres, getTopPicks, getWriterOfTheMonth, getGenreCover,getBestSeller} = require("../controllers/exploreController")

const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.get("/latestStories", getLatestStories)
router.get("/trendingStories", getTrendingStories)
router.get("/genres", getGenres)
router.get("/topPicks", verifyToken, getTopPicks)
router.get("/writerOfTheMonth", getWriterOfTheMonth)
router.get("/getGenreCover", getGenreCover)
router.get("/bestSellers",getBestSeller)



// trending stories
// genres
// latest
// top picks
// writer of the month

// best sellers --bakwas miss

module.exports = router;