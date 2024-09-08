const bcrypt = require("bcrypt");
const { insertUser, findUsers, findUserById, editUser, deleteUser } = require("./user.repository");

async function createUser(newUserData) {
    // Buatlah sebuah fungsi asinkron bernama createUser yang menerima satu parameter newUserData.Fungsi ini harus melakukan hal - hal berikut:

    // Menggunakan bcrypt.hash untuk melakukan hashing pada password yang terdapat dalam newUserData.password dengan tingkat kesulitan 10.
    // Mengganti nilai newUserData.password dengan hasil hashing tersebut.
    // Memanggil fungsi insertUser dengan newUserData sebagai argumen untuk menyimpan data pengguna baru ke dalam database.
    // Mengembalikan objek newUser yang merupakan hasil dari pemanggilan fungsi insertUser.
}

async function getAllUsers() {
    // Buatlah sebuah fungsi asinkron bernama getAllUsers yang tidak menerima parameter. Fungsi ini harus melakukan hal - hal berikut:

    // Memanggil fungsi findUsers untuk mendapatkan seluruh data pengguna dari database.
    // Mengembalikan nilai users yang merupakan hasil dari pemanggilan fungsi findUsers.
}

async function getUserById(id) {
    // Buatlah sebuah fungsi asinkron bernama getUserById yang menerima satu parameter id. Fungsi ini harus melakukan hal - hal berikut:

    // Memanggil fungsi findUserById dengan id sebagai argumen untuk mendapatkan data pengguna dari database berdasarkan id.
    // Mengembalikan nilai user yang merupakan hasil dari pemanggilan fungsi findUserById.

}

async function editUserById(id, userData) {
    // Buatlah sebuah fungsi asinkron bernama editUserById yang menerima dua parameter, yaitu id dan userData. Fungsi ini harus melakukan hal - hal berikut:

    // Menggunakan bcrypt.hash untuk melakukan hashing pada password yang terdapat dalam userData.password dengan tingkat kesulitan 10.
    // Mengganti nilai userData.password dengan hasil hashing tersebut.
    // Memanggil fungsi editUser dengan id dan userData sebagai argumen untuk mengubah data pengguna di dalam database.
    // Mengembalikan objek updatedUser yang merupakan hasil dari pemanggilan fungsi editUser.

}

async function deleteUserById(id) {
    // Buatlah sebuah fungsi asinkron bernama deleteUserById yang menerima satu parameter id. Fungsi ini harus melakukan hal - hal berikut:

    // Memanggil fungsi deleteUser dengan id sebagai argumen untuk menghapus data pengguna dari database.
    // Mengembalikan nilai deletedUser yang merupakan hasil dari pemanggilan fungsi deleteUser.
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    editUserById,
    deleteUserById,
}