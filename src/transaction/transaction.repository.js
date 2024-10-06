const { parse } = require("dotenv");
const prisma = require("../db");

async function createTransaction(userId, itemId, quantityBorrowed) {
    // buatlah fungsi createTransaction yang menerima tiga parameter, userId, itemId, dan quantityBorrowed. Fungsi ini akan memasukkan data transaksi baru ke dalam database.
    return await prisma.transaction.create({
        data: {
            userId,
            itemId,
            quantityBorrowed,
            status: 'PENDING',
        },
    });
}

async function findTransactions() {
    // buatlah fungsi findTransactions yang tidak menerima parameter. Fungsi ini akan mengembalikan seluruh data transaksi yang ada di database.
    return await prisma.transaction.findMany();
}

async function findTransactionsByUserId(userId) {
    // buatlah fungsi findTransactionsByUserId yang menerima satu parameter userId. Fungsi ini akan mengembalikan seluruh data transaksi yang dilakukan oleh user dengan id yang diberikan.
    return await prisma.transaction.findMany({
        where: {
            userId,
        },
    });
}

async function findTransactionById(id) {
    // buatlah fungsi findTransactionById yang menerima satu parameter id. Fungsi ini akan
    return await prisma.transaction.findUnique({
        where: {
            id,
        },
    });
}

async function updateTransactionStatus(transactionId, status, timeStampField) {
    // buatlah fungsi updateTransactionStatus yang menerima tiga parameter, transactionId, status, dan timeStampField. Fungsi ini akan mengubah status transaksi berdasarkan transactionId yang diberikan.
    const updateData = {
        status,
    };

    // If the status is 'RETURNED', we set the timestamp field as well
    if (status === 'RETURNED') {
        updateData.returnedAt = new Date(); // Setting current timestamp for returnedAt
    }

    return await prisma.transaction.update({
        where: {
            id: transactionId,
        },
        data: updateData,
    });
}

module.exports = {
    createTransaction,
    findTransactions,
    findTransactionsByUserId,
    findTransactionById,
    updateTransactionStatus,
}