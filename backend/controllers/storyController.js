const { User, Story, Chapter, Liked, NextChapter } = require('../models/models');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose')

const storyCoverStorage = multer.diskStorage({
	destination: './images/storyCover/',
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

const uploadStoryCover = multer({
	storage: storyCoverStorage,
	limits: { fileSize: 2000000 },
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	}
}).single('coverImg')

function checkFileType(file, cb) {
	const filetypes = /jpeg|jpg|png/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);

	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb('Error: Images only!');
	}
}

const addStory = async (req, res) => {
	try {
		uploadStoryCover(req, res, async function (err) {
			if (err) {
				return res.status(400).json({ error: err });
			}
			if (!req.file) {
				return res.status(400).json({ error: 'No file uploaded' });
			}
			const { title, desc, genre, price } = req.body;
			const story = new Story({
				title,
				desc,
				genre,
				price,
				coverImgURL: req.file.path,
				initiator: req.user.id
			});

			await story.save();

			await User.findByIdAndUpdate(req.user.id, { $push: { initiatedStories: story._id } });

			res.json({ message: "Story added successfully", story });
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const getStory = async (req, res) => {
	try {
		const { id } = req.params;

		if (mongoose.Types.ObjectId.isValid(id) === false) {
			return res.status(400).json({ error: "Invalid ID" });
		}

		const story = await Story.findById(id);

		if (!story) {
			return res.status(404).json({ message: "Story not found" });
		}

		// Read the cover image file
		fs.readFile(story.coverImgURL, (err, data) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}

			// Prepare form-data response
			const formData = {
				title: story.title,
				desc: story.desc,
				genre: story.genre,
				price: story.price,
				initiator: story.initiator,
				coverImg: {
					data: data, // Image data
					contentType: 'image/png' // Assuming it's PNG, change it based on the actual file type
				}
			};

			res.set('Content-Type', 'multipart/form-data');
			res.json(formData);
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const searchStory = async (req, res) => {
	try {
		const { keyword } = req.query;

		const stories = await Story.aggregate([
			{
				$lookup: {
					from: "users", // Assuming the users collection name is 'users'
					localField: "initiator",
					foreignField: "_id",
					as: "initiator"
				}
			},
			{
				$unwind: "$initiator"
			},
			{
				$match: {
					$or: [
						{ title: { $regex: keyword, $options: 'i' } },
						{ desc: { $regex: keyword, $options: 'i' } },
						{ genre: { $regex: keyword, $options: 'i' } },
						{ "initiator.name": { $regex: keyword, $options: 'i' } }
					]
				}
			}
		]);

		res.json({ message: "Stories retrieved successfully", stories });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const searchChapter = async (req, res) => {
	try {
		const { keyword } = req.query;

		const chapters = await Chapter.aggregate([
			{
				$lookup: {
					from: "users", // Assuming the users collection name is 'users'
					localField: "author",
					foreignField: "_id",
					as: "author"
				}
			},
			{
				$unwind: "$author"
			},
			{
				$match: {
					$or: [
						{ title: { $regex: keyword, $options: 'i' } },
						{ desc: { $regex: keyword, $options: 'i' } },
						{ content: { $regex: keyword, $options: 'i' } },
						{ "author.name": { $regex: keyword, $options: 'i' } }
					]
				}
			}
		]);

		res.json({ message: "Chapters retrieved successfully", chapters: chapters });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const getStoryRoadmap = async (req, res) => {
	try {
		const { id } = req.params;

		if (mongoose.Types.ObjectId.isValid(id) === false) {
			return res.status(400).json({ error: "Invalid Story ID" });
		}

		const story = await Story.findById(id).populate('chapters').populate('introChapter')

		if (!story) {
			return res.status(404).json({ error: "Story not found " })
		}

		const chapters = story.chapters

		const introChp = story.introChapter

		const chapterIds = chapters.map(chapter => chapter._id)

		const nxtChpPointers = await NextChapter.find({
			$or: [
				{ source: { $in: chapterIds } },
				{ target: { $in: chapterIds } }
			]
		})

		res.json({ message: "Story roadmap retrieved successfully", nodes: chapters, edges: nxtChpPointers, start: introChp });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const deleteStory = async (req, res) => {
	try {
		const { id } = req.params;

		if (mongoose.Types.ObjectId.isValid(id) === false) {
			return res.status(400).json({ error: "Invalid ID" });
		}
		const story = await Story.findByIdAndDelete(id);

		res.json({ message: "Story deleted successfully", story: story });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const chapterCoverStorage = multer.diskStorage({
	destination: './images/chapterCover/',
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

const uploadChapterCover = multer({
	storage: chapterCoverStorage,
	limits: { fileSize: 1000000 }, // 1MB max file size
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	}
}).single('coverImg');


const addChapter = async (req, res) => {
	try {
		uploadChapterCover(req, res, async function (err) {
			if (err) {
				return res.status(400).json({ error: err });
			}
			if (!req.file) {
				return res.status(400).json({ error: 'No file uploaded' });
			}

			const storyId = req.params.id

			if (mongoose.Types.ObjectId.isValid(storyId) === false) {
				return res.status(400).json({ error: "Invalid Story ID" });
			}
			const { title, desc, content, isIntro, prevChpId, nextChpId } = req.body;

			const chapter = new Chapter({
				title,
				desc,
				content,
				coverImgURL: req.file.path,
				author: req.user.id
			});

			await chapter.save();

			await Story.findByIdAndUpdate(storyId, { $push: { chapters: chapter._id } });

			await User.findByIdAndUpdate(req.user.id, { $push: { writtenChapters: chapter._id } });

			if (isIntro === "true") {
				await Story.findByIdAndUpdate(storyId, { $set: { introChapter: chapter._id } });
			}
			else {

				if (mongoose.Types.ObjectId.isValid(prevChpId) === false) {
					return res.status(400).json({ error: "Invalid Previous Chapter ID" });
				}

				await NextChapter.create({ source: prevChpId, target: chapter._id })

				if (nextChpId) {
					if (mongoose.Types.ObjectId.isValid(nextChpId) === false) {
						return res.status(400).json({ error: "Invalid Next Chapter ID" });
					}
					await NextChapter.create({ source: chapter._id, target: nextChpId })
				}

			}
			res.json({ message: "Chapter added successfully", chapter });
		});

	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const getChapter = async (req, res) => {
	try {
		const { chapterId } = req.params;

		if (mongoose.Types.ObjectId.isValid(chapterId) === false) {
			return res.status(400).json({ error: "Invalid Chapter ID" });
		}

		const chapter = await Chapter.findById(chapterId).populate('author');

		if (!chapter) {
			return res.status(404).json({ error: "Chapter not found" });
		}

		fs.readFile(chapter.coverImgURL, (err, data) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}

			// Prepare form-data response
			const formData = {
				title: chapter.title,
				desc: chapter.desc,
				content: chapter.content,
				coverImg: {
					data: data, // Image data
					contentType: 'image/png' // Assuming it's PNG, change it based on the actual file type
				},
				author: chapter.author
			};

			res.set('Content-Type', 'multipart/form-data');
			res.json(formData);
		});

		if (!chapter) {
			return res.status(404).json({ message: "Chapter not found" });
		}

	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

const deleteChapter = async (req, res) => {
	try {
		const { chapterId, id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(chapterId) || !mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ error: "Invalid ID" });
		}

		const nextChapters = await NextChapter.findOne({ source: chapterId });

		if (nextChapters) {
			return res.status(400).json({ error: "Chapter cannot be deleted as it is a prequel of other chapters" });
		}

		await NextChapter.deleteMany({ target: chapterId });

		const deletedChapter = await Chapter.findByIdAndDelete(chapterId);

		await User.findByIdAndUpdate(req.user.id, { $pull: { writtenChapters: chapterId } });

		const story = await Story.findByIdAndUpdate(id, { $pull: { chapters: chapterId } }, { new: true });

		if (story.introChapter && story.introChapter.equals(chapterId)) {
			story.introChapter = undefined;
			await story.save();
		}

		res.json({ message: "Chapter deleted successfully", chapter: deletedChapter });
	} catch (error) {
		res.status(500).json({ error: error });
	}
}

const addChapterReaction = async (req, res) => {
    try {
        const { chapterId } = req.params;
        const { type } = req.body;

        if (!mongoose.Types.ObjectId.isValid(chapterId)) {
            return res.status(400).json({ error: "Invalid Chapter ID" });
        }

        const existingReaction = await Liked.findOne({
            likedBy: req.user.id,
            likedChapter: chapterId
        });

        if (existingReaction) {
            return res.status(400).json({ error: "Reaction already exists" });
        }

        if (type !== "like" && type !== "dislike") {
            return res.status(400).json({ error: "Invalid Reaction Type" });
        }

        await Liked.create({ likedBy: req.user.id, likedChapter: chapterId, type });
        
        res.json({ message: "Reaction added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeReaction = async (req, res) => {
    try {
        const { chapterId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(chapterId)) {
            return res.status(400).json({ error: "Invalid Chapter ID" });
        }

        // Find the reaction associated with the user and the chapter
        const reaction = await Liked.findOneAndDelete({
            likedBy: req.user.id,
            likedChapter: chapterId
        });

        if (!reaction) {
            return res.status(404).json({ error: "Reaction not found" });
        }

        res.json({ message: "Reaction removed successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { addStory, getStory, searchStory, getStoryRoadmap, deleteStory, addChapter, getChapter, deleteChapter, searchChapter, addChapterReaction,removeReaction };
