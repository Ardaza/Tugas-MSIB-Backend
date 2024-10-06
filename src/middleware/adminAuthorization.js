const jwt = require('jsonwebtoken');

const authorizeAdmin = (req, res, next) => {
    // buatlah fungsi authorizeAdmin yang menerima tiga parameter, req, res, dan next. Fungsi ini akan memeriksa apakah user yang sedang login adalah admin atau bukan.
    const user = req.user;
    if (!user || user.role !== 'ADMIN') {
        return res.status(403).json({ message: "Access forbidden: Admins only" });
    }

    next();
};

module.exports = authorizeAdmin;