const express = require("express");

const {addUser, getUser, loginUser, logoutUser, getCrrUser} = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/crr", verifyToken, getCrrUser);
router.get("/logout", verifyToken, logoutUser);
router.post("/login", loginUser);
router.get("/:id", verifyToken, getUser);
router.post("/", addUser);

module.exports = router;