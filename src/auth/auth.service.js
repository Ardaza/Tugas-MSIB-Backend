const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRepository = require('./auth.repository');

function generateToken(user) {
    return jwt.sign({ userId: user.id, username: user.username, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

async function register(username, email, password) {

}

async function login(username, password) {

}

module.exports = { register, login };