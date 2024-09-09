const { parse } = require("dotenv");
const prisma = require("../db");

async function createTransaction(userId, itemId, quantityBorrowed) {
    // buatlah fungsi createTransaction yang menerima tiga parameter, userId, itemId, dan quantityBorrowed. Fungsi ini akan memasukkan data transaksi baru ke dalam database.
}

async function findTransactions() {
    // buatlah fungsi findTransactions yang tidak menerima parameter. Fungsi ini akan mengembalikan seluruh data transaksi yang ada di database.
}

async function findTransactionsByUserId(userId) {
    // buatlah fungsi findTransactionsByUserId yang menerima satu parameter userId. Fungsi ini akan mengembalikan seluruh data transaksi yang dilakukan oleh user dengan id yang diberikan.
}

async function findTransactionById(id) {
    // buatlah fungsi findTransactionById yang menerima satu parameter id. Fungsi ini akan
}

async function updateTransactionStatus(transactionId, status, timeStampField) {
    // buatlah fungsi updateTransactionStatus yang menerima tiga parameter, transactionId, status, dan timeStampField. Fungsi ini akan mengubah status transaksi berdasarkan transactionId yang diberikan.
}

module.exports = {
    createTransaction,
    findTransactions,
    findTransactionsByUserId,
    findTransactionById,
    updateTransactionStatus,
}