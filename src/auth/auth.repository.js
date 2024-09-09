const prisma = require("../db")

async function createUser(userData) {
    // buatlah fungsi createUser yang menerima satu parameter userData. Fungsi ini akan memasukkan data user baru ke dalam database.
}

async function findUserByUsername(username) {
    // buatlah fungsi findUserByUsername yang menerima satu parameter username. Fungsi ini akan mengembalikan data user berdasarkan username yang diberikan.
}

module.exports = { createUser, findUserByUsername };