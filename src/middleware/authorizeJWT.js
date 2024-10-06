const e = require('express');
const jwt = require('jsonwebtoken');

function authorizeJWT(req, res, next) {
    // buatlah fungsi authorizeJWT yang menerima tiga parameter, req, res, dan next. Fungsi ini akan memeriksa apakah user yang sedang login adalah admin atau bukan.
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Access denied: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Access denied: Invalid token" });
    }
}

module.exports = authorizeJWT;