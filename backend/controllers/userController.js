const bcrypt = require("bcrypt");
const { User } = require("../models/models");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const addUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const oldUser = await User.findOne({ email: email });

        if (oldUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.json({ message: "User created", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};

const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        if (mongoose.Types.ObjectId.isValid(id) === false) {
            return res.status(400).json({ error: "Invalid ID" });
        }

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Find user by username
    const user = await User.findOne({ email: email });
    if (!user) {
        return res
            .status(400)
            .json({ message: "Invalid email" });
    }

    // Compare password
    bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
            return res
                .status(400)
                .json({ message: "Invalid password" });
        }

        // Create JWT token
        const token = jwt.sign(
            { id: user._id, name: user.name, email: user.email},
            process.env.secretKey,
            { expiresIn: "12h" }
        );

        // Set cookie with JWT token
        res.cookie("token", token, { httpOnly: true });
        res.json({ message: "Login successful" });
    });
};

const logoutUser = async (req, res) => {
	res.clearCookie("token");
    res.json({ message: `${req.user.name} Logout successful` });
};

module.exports = { addUser, getUser, loginUser, logoutUser };
