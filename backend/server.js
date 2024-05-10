require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

// App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(new Date().toLocaleString(), req.path, req.method);
  next();
});

// Routes
app.use("/user", userRoutes);

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
