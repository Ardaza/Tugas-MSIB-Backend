const transactionRepository = require("./transaction.repository");
const itemRepository = require("../item/item.repository");

async function borrowItem(userId, itemId, quantityBorrowed) {

}

async function getAllTransactions() {

}

async function getTransactionsByUserId(userId) {

}

async function getTransactionById(transactionId) {

}

async function verifyTransaction(transactionId, status) {

}

async function returnItem(transactionId) {

}

module.exports = {
    borrowItem,
    getAllTransactions,
    getTransactionById,
    getTransactionsByUserId,
    verifyTransaction,
    returnItem
}