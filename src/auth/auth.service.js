const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRepository = require('./auth.repository');

function generateToken(user) {
    return jwt.sign({ userId: user.id, username: user.username, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

async function register(username, email, password) {
    // buatlah fungsi register yang menerima tiga parameter, username, email, dan password. Fungsi ini akan mendaftarkan user baru.
}

async function login(username, password) {
    // buatlah fungsi login yang menerima dua parameter, username dan password. Fungsi ini akan melakukan proses login user.
}

module.exports = { register, login };