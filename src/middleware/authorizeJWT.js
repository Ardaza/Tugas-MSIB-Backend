const e = require('express');
const jwt = require('jsonwebtoken');

function authorizeJWT(req, res, next) {
    // buatlah fungsi authorizeJWT yang menerima tiga parameter, req, res, dan next. Fungsi ini akan memeriksa apakah user yang sedang login adalah admin atau bukan.
}

module.exports = authorizeJWT;