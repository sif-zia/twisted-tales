const { Story, User, Chapter, Liked, NextChapter } = require('../models/models');
const mongoose = require("mongoose");
const fs = require('fs');
const path = require('path');


const getLatestStories = async (req, res) => {
    try {
        const latestStories = await Story.find().sort({ createdAt: -1 }).limit(10).populate('initiator');
        res.status(200).json({ latestStories });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const getLikesForStory = async (storyId) => {
    try {
        const story = await Story.findById(storyId)
        const chapters = story.chapters;

        const likes = await Liked.countDocuments({ likedChapter: { $in: chapters }, type: "like" });

        return likes;
    } catch (err) {
        console.log(err)
        return -1
    }
};

const getTrendingStories = async (req, res) => {
    try {
        const stories = await Story.find(); // Find all stories
        const trendingStories = [];

        // Calculate total likes for each story
        for (const story of stories) {
            const likes = await getLikesForStory(story._id);
            trendingStories.push({ story, likes: likes });
        }

        trendingStories.sort((a, b) => b.likes - a.likes);

        const topTrendingStories = trendingStories.slice(0, 10);

        res.status(200).json({ trendingStories: topTrendingStories });


    } catch (err) {
        console.error('Error:', err);
        res.status(400).json({ error: err.message });
    }
};

//getgenre cover tooooooooooooooooooo

const DEFAULT_COVER_PATH = path.join(__dirname, '..', 'images', 'genreCover', 'defaultCover.jpg');

const sendDefaultCover = (res) => {
    const imageStream = fs.createReadStream(DEFAULT_COVER_PATH);
    imageStream.on('open', () => {
        res.set('Content-Type', 'image/jpeg');
        imageStream.pipe(res);
    });
    imageStream.on('error', (err) => {
        res.status(500).json({ error: err });
    });
};


const getGenreCover = async (req, res) => {
    try {
        const { genre } = req.query;

        const imagePath = path.join(__dirname, '..', 'images', 'genreCover', `${genre}.jpg`);

        fs.access(imagePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.log(`Genre cover for ${genre} not found, returning default cover.`);
                sendDefaultCover(res);
            }
            else {
                const imageStream = fs.createReadStream(imagePath);
                imageStream.on('open', () => {
                    res.set('Content-Type', 'image/jpeg');
                    imageStream.pipe(res);
                });
                imageStream.on('error', (err) => {
                    res.status(500).json({ error: err });
                });
            }
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const getGenres = async (req, res) => {
    try {
        const distinctGenres = await Story.distinct('genre');
        let genres = [];

        for (const genre of distinctGenres) {

            const stories = await Story.find({ genre: genre }).populate('chapters');

            let reads = 0
            for (const story of stories) {
                for (const chapter of story.chapters) {
                    reads += chapter.readBy.length
                }
            }
            genres.push({ genre: genre, count: stories.length, reads: reads });

        }

        res.status(200).json({ genres });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};



const getUserLikedAndReadStoryGenres = async (userId) => {
    try {
        const likes = await Liked.find({ likedBy: userId }).populate('likedChapter');
        const likedStoriesId = likes.map(like => like.likedChapter.story);

        const user = await User.findById(userId).populate('readChapters');
        const readStoriesId = user.readChapters.map(chapter => chapter.story)

        const likedAndReadStories = [...new Set([...likedStoriesId, ...readStoriesId])]

        const stories = await Story.find({ _id: { $in: likedAndReadStories } });

        const genres = [...new Set(stories.map(story => story.genre))];

        return genres;
    } catch (err) {
        console.error(err);
        return new Set();
    }
};

const getTopPicks = async (req, res) => {
    try {

        const userGenres = await getUserLikedAndReadStoryGenres(req.user.id)
        const user = await User.findById(req.user.id)


        const topPicks = await Story.find({ genre: { $in: userGenres }, _id: { $nin: user.initiatedStories } }).sort({ createdAt: -1 }).limit(10);

        res.status(200).json({ topPicks: topPicks })
    }
    catch (err) {
        res.status(400).json({ error: err })
    }
}



const calculateLikesForUser = async (user) => {

    const pastMonth = new Date();
    pastMonth.setMonth(pastMonth.getMonth() - 1);

    const chapters = await Chapter.find({
        author: user._id,
        createdAt: { $gte: pastMonth }
    });
    const chapterIds = chapters.map(chapter => chapter._id);

    const totalLikes = await Liked.countDocuments({ likedChapter: { $in: chapterIds }, type: "like" })

    return totalLikes > 0 ? totalLikes : 0;
};

const getWriterOfTheMonth = async (req, res) => {
    try {
        const users = await User.find();

        let writerOfTheMonth = null;
        let maxLikes = 0;

        for (const user of users) {
            const totalLikes = await calculateLikesForUser(user);
            if (totalLikes > maxLikes) {
                maxLikes = totalLikes;
                writerOfTheMonth = user;
            }
        }
        if (writerOfTheMonth) {
            res.status(200).json({ writerOfTheMonth: writerOfTheMonth, writtenChapters: writerOfTheMonth.writtenChapters.length });
        } else {
            res.status(404).json({ message: "No writers found" });
        }
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const getBestSeller = async (req, res) => {
    try {

        const bestSellers = []
        const mostBoughtStories = await Story.aggregate([
            {
                $addFields: {
                    boughtByCount: { $size: "$boughtBy" }
                }
            },
            {
                $sort: { "boughtByCount": -1 }
            }
        ]).populate('chapters');

        for (const story of mostBoughtStories) {
            let reads = 0
            for (const chapter of story.chapters) {
                reads += chapter.readBy.length
            }
            bestSellers.push({ story: story, reads: reads })
        }
        return res.status(200).json({ bestSellers: bestSellers })
    }
    catch (error) {
        return res.status(500).json({ error: error })
    }
}




module.exports = { getLatestStories, getTrendingStories, getGenres, getTopPicks, getWriterOfTheMonth, getGenreCover,getBestSeller };