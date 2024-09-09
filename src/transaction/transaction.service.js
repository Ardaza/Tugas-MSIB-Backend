const transactionRepository = require("./transaction.repository");
const itemRepository = require("../item/item.repository");

async function borrowItem(userId, itemId, quantityBorrowed) {
    // buatlah fungsi borrowItem yang menerima tiga parameter, userId, itemId, dan quantityBorrowed. Fungsi ini akan meminjam item berdasarkan itemId yang diberikan.
}

async function getAllTransactions() {
    // buatlah fungsi getAllTransactions yang tidak menerima parameter. Fungsi ini akan mengembalikan seluruh data transaksi yang ada di database.
}

async function getTransactionsByUserId(userId) {
    // buatlah fungsi getTransactionsByUserId yang menerima satu parameter userId. Fungsi ini akan mengembalikan seluruh data transaksi yang dilakukan oleh user dengan id yang diberikan.
}

async function getTransactionById(transactionId) {
    // buatlah fungsi getTransactionById yang menerima satu parameter transactionId. Fungsi ini akan mengembalikan data transaksi berdasarkan id yang diberikan.
}

async function verifyTransaction(transactionId, status) {
    // buatlah fungsi verifyTransaction yang menerima dua parameter, transactionId dan status. Fungsi ini akan memverifikasi transaksi berdasarkan transactionId yang diberikan.
}

async function returnItem(transactionId) {
    // buatlah fungsi returnItem yang menerima satu parameter transactionId. Fungsi ini akan mengembalikan item berdasarkan transactionId yang diberikan.
}

module.exports = {
    borrowItem,
    getAllTransactions,
    getTransactionById,
    getTransactionsByUserId,
    verifyTransaction,
    returnItem
}