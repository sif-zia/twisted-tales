const bcrypt = require('bcrypt')
const { User, Liked } = require('../models/models')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const multer = require('multer')
const path = require('path')
const { each } = require('lodash')

const userProfileStorage = multer.diskStorage({
  destination: './images/userProfile/',
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  }
})

const uploadUserProfile = multer({
  storage: userProfileStorage,
  limits: { fileSize: 2000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
}).single('profileImg')

function checkFileType (file, cb) {
  const filetypes = /jpeg|jpg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null, true)
  } else {
    cb('Upload JPG and PNG Images only!')
  }
}


const updateProfile = async (req, res) => {
  const { id } = req.params;

  try {
    uploadUserProfile(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ error: err });
      }

      let profileImgURL = req.file ? req.file.path : null;
      const { name, bio } = req.body;

      const updateObject = req.file
        ? { name, bio, profileImgURL }
        : { name, bio };

      const updatedUser = await User.findByIdAndUpdate(id, updateObject, { new: true });

      return res.json({ updatedUser });
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



const updatePassword = async (req, res) => {
  try {
    const { newPassword } = req.body
    const { id } = req.params

    const updatedUser = await findByIdAndUpdate(
      id,
      { password: newPassword },
      { new: true }
    )

    res.status(200).json({ updatedUser })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const addUser = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const oldUser = await User.findOne({ email: email })

    if (oldUser) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    })

    res.json({ message: 'User created', user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error })
  }
}

const getUser = async (req, res) => {
  const { id } = req.params

  try {
    if (mongoose.Types.ObjectId.isValid(id) === false) {
      return res.status(400).json({ error: 'Invalid ID' })
    }

    const user = await User.findById(id)
      .populate({
        path: 'writtenChapters',
        populate: {
          path: 'story',
          model: 'Story'
        }
      })
      .populate('initiatedStories')

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    let likes = await Liked.countDocuments({
      likedChapter: { $in: user.writtenChapters },
      type: 'like'
    })
    console.log(likes)
    likes = likes === null ? 0 : likes

    res.status(200).json({ user, likes })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  // Find user by username
  const user = await User.findOne({ email: email })
  if (!user) {
    return res.status(400).json({ error: 'Invalid Email or Password' })
  }

  // Compare password
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(400).json({ error: 'Invalid Email or Password' })
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      process.env.secretKey,
      { expiresIn: '12h' }
    )

    // Set cookie with JWT token
    res.cookie('token', token, { httpOnly: true })
    res.json({ message: 'Login successful', user: user })
  })
}

const logoutUser = async (req, res) => {
  res.clearCookie('token')
  res.json({ message: `${req.user.name} Logout successful` })
}

const getCrrUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    res.json({ user })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

module.exports = {
  addUser,
  getUser,
  loginUser,
  logoutUser,
  getCrrUser,
  updateProfile,
  updatePassword
}
