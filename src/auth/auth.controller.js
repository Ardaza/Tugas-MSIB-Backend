const express = require('express');
const router = express.Router();
const authService = require('./auth.service');

router.post('/register', async (req, res, next) => {
    // buatlah endpoint POST /auth/register yang akan digunakan untuk mendaftarkan user baru. Endpoint ini akan memanggil fungsi registerUser yang telah dibuat sebelumnya.
})

router.post('/login', async (req, res, next) => {
    // buatlah endpoint POST /auth/login yang akan digunakan untuk login. Endpoint ini akan memanggil fungsi loginUser yang telah dibuat sebelumnya.
})

module.exports = router;