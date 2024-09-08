const { parse } = require("dotenv");
const prisma = require("../db");

async function createTransaction(userId, itemId, quantityBorrowed) {

}

async function findTransactions() {

}

async function findTransactionsByUserId(userId) {

}

async function findTransactionById(id) {

}

async function updateTransactionStatus(transactionId, status, timeStampField) {

}

module.exports = {
    createTransaction,
    findTransactions,
    findTransactionsByUserId,
    findTransactionById,
    updateTransactionStatus,
}