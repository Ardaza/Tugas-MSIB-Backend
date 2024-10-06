const transactionRepository = require("./transaction.repository");
const itemRepository = require("../item/item.repository");

async function borrowItem(userId, itemId, quantityBorrowed) {
    // buatlah fungsi borrowItem yang menerima tiga parameter, userId, itemId, dan quantityBorrowed. Fungsi ini akan meminjam item berdasarkan itemId yang diberikan.
    const item = await itemRepository.findItemById(itemId);
    if (!item) {
        throw new Error("Item not found");
    }
    
    if (item.quantity < quantityBorrowed) {
        throw new Error("Not enough quantity available");
    }

    const transaction = await transactionRepository.createTransaction(userId, itemId, quantityBorrowed);

    await itemRepository.updateItemQuantity(itemId, item.quantity - quantityBorrowed);

    return transaction;
}

async function getAllTransactions() {
    // buatlah fungsi getAllTransactions yang tidak menerima parameter. Fungsi ini akan mengembalikan seluruh data transaksi yang ada di database.
    return await transactionRepository.findTransactions();
}

async function getTransactionsByUserId(userId) {
    // buatlah fungsi getTransactionsByUserId yang menerima satu parameter userId. Fungsi ini akan mengembalikan seluruh data transaksi yang dilakukan oleh user dengan id yang diberikan.
    return await transactionRepository.findTransactionsByUserId(userId);
}

async function getTransactionById(transactionId) {
    // buatlah fungsi getTransactionById yang menerima satu parameter transactionId. Fungsi ini akan mengembalikan data transaksi berdasarkan id yang diberikan.
    const transaction = await transactionRepository.findTransactionById(transactionId);
    if (!transaction) {
        throw new Error("Transaction not found");
    }
    return transaction;
}

async function verifyTransaction(transactionId, status) {
    // buatlah fungsi verifyTransaction yang menerima dua parameter, transactionId dan status. Fungsi ini akan memverifikasi transaksi berdasarkan transactionId yang diberikan.
    const transaction = await transactionRepository.findTransactionById(transactionId);
    if (!transaction) {
        throw new Error("Transaction not found");
    }

    return await transactionRepository.updateTransactionStatus(transactionId, status);
}

async function returnItem(transactionId) {
    // buatlah fungsi returnItem yang menerima satu parameter transactionId. Fungsi ini akan mengembalikan item berdasarkan transactionId yang diberikan.
    const transaction = await transactionRepository.findTransactionById(transactionId);
    if (!transaction) {
        throw new Error("Transaction not found");
    }

    // Update the transaction status to 'RETURNED'
    await transactionRepository.updateTransactionStatus(transactionId, 'RETURNED');

    // Update the item quantity based on the quantity borrowed
    await itemRepository.updateItemQuantity(transaction.itemId, transaction.quantityBorrowed);

    return transaction;
}

module.exports = {
    borrowItem,
    getAllTransactions,
    getTransactionById,
    getTransactionsByUserId,
    verifyTransaction,
    returnItem
}