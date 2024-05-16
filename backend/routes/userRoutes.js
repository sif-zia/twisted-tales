const express = require("express");

const {addUser, getUser, loginUser, logoutUser, getCrrUser, updatePassword, updateProfile} = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.put("/updatePassword/:id", updatePassword);
router.put("/updateProfile/:id", updateProfile);
router.get("/crr", verifyToken, getCrrUser);
router.get("/logout", verifyToken, logoutUser);
router.post("/login", loginUser);
router.get("/:id", verifyToken, getUser);
router.post("/", addUser);


module.exports = router;