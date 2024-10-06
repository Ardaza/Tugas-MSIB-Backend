const prisma = require("../db")

async function insertUser(userData) {
    // buatlah fungsi insertUser yang menerima satu parameter userData. Fungsi ini akan memasukkan data user baru ke dalam database.
    return await prisma.user.create({
        data: userData,
    });
}

async function findUsers() {
    // buatlah fungsi findUsers yang tidak menerima parameter. Fungsi ini akan mengembalikan seluruh data user yang ada di database.
    return await prisma.user.findMany();
}

async function findUserById(id) {
    // buatlah fungsi findUserById yang menerima satu parameter id. Fungsi ini akan mengembalikan data user berdasarkan id yang diberikan.
    return await prisma.user.findUnique({
        where: { id: parseInt(id) }, // Ensure id is an integer
    });
}

async function editUser(id, userData) {
    // buatlah fungsi editUser yang menerima dua parameter, id dan userData. Fungsi ini akan mengubah data user berdasarkan id yang diberikan.
    return await prisma.user.update({
        where: { id: parseInt(id) }, // Ensure id is an integer
        data: userData,
    });
}

async function deleteUser(id) {
    // buatlah fungsi deleteUser yang menerima satu parameter id. Fungsi ini akan menghapus data user berdasarkan id yang diberikan.
    return await prisma.user.delete({
        where: { id: parseInt(id) }, // Ensure id is an integer
    });
}

module.exports = {
    insertUser,
    findUsers,
    findUserById,
    editUser,
    deleteUser,
}