require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify token
    jwt.verify(token, process.env.secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;
