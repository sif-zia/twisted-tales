const express = require("express");

const {addUser, getUser, loginUser, logoutUser} = require("../controllers/userController");

const router = express.Router();

router.post("/", addUser);
router.get("/:id", getUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;