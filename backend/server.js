require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const userRoutes = require("./routes/userRoutes");
const storyRoutes = require("./routes/storyRoutes");

// App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    session({
        secret: process.env.secretKey,
        resave: false,
        saveUninitialized: true,
    })
);

app.use((req, res, next) => {
    console.log(new Date().toLocaleString(), req.path, req.method);
    next();
});

// Routes
app.use("/user", userRoutes);
app.use("/story", storyRoutes);
app.use("/", (req, res) => {
    res.send("Welcome to Twisted Tales API");
});

// Connect to DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to mongodb");
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error:", err);
    });
