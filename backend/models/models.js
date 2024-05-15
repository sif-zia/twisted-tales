const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImgURL: {
    type: String,
    required: false
  },

  initiatedStories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Story' }],

  writtenChapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }],

  readChapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }],
},{timestamps:true});

const ChapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  coverImgURL: {
    type: String,
    required: false
  },

  story: { type: mongoose.Schema.Types.ObjectId, ref: 'Story' },//new
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]//new
}, { timestamps: true });

const NextChapterSchema = new mongoose.Schema({
  source: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },
  target: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },

});

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  coverImgURL: {
    type: String,
    required: false
  },

  initiator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }],

  introChapter: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },

  boughtBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const LikedSchema = new mongoose.Schema({
  likedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  likedChapter: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter', required: true },
  type: {
    type: String,
    required: true
  }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
const Chapter = mongoose.model('Chapter', ChapterSchema);
const NextChapter = mongoose.model('NextChapter', NextChapterSchema);
const Story = mongoose.model('Story', StorySchema);
const Liked = mongoose.model('Like', LikedSchema);

module.exports = { User, Chapter, NextChapter, Story, Liked };