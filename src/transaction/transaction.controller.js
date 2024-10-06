const express = require("express");
const router = express.Router();
const transactionService = require("./transaction.service");
const authorizeJWT = require("../middleware/authorizeJWT");
const adminAuthorization = require("../middleware/adminAuthorization");

router.post("/borrow", authorizeJWT, async (req, res) => {
    // buatlah endpoint POST /transaction/borrow yang akan digunakan untuk meminjam buku. Endpoint ini akan memanggil fungsi borrowBook yang telah dibuat sebelumnya.
    const { itemId, quantity } = req.body; // Assuming itemId and quantity are sent in the request body
    const userId = req.user.id; // Extracting user ID from the decoded JWT

    transactionService.borrowBook(userId, itemId, quantity)
        .then(transaction => {
            res.status(201).json({ message: "Book borrowed successfully", data: transaction });
        })
        .catch(error => {
            res.status(400).json({ message: error.message });
        });
});

router.get("/", adminAuthorization, async (req, res) => {
    // buatlah endpoint GET /transaction yang akan digunakan untuk mengambil seluruh data transaksi. Endpoint ini akan memanggil fungsi findTransactions yang telah dibuat sebelumnya.
    transactionService.findTransactions()
        .then(transactions => {
            res.status(200).json({ message: "Transactions retrieved successfully", data: transactions });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
});

router.get("/user", authorizeJWT, async (req, res) => {
    // buatlah endpoint GET /transaction/user yang akan digunakan untuk mengambil seluruh data transaksi yang dilakukan oleh user yang sedang login. Endpoint ini akan memanggil fungsi findUserTransactions yang telah dibuat sebelumnya.
    const userId = req.user.id; // Extracting user ID from the decoded JWT

    transactionService.findUserTransactions(userId)
        .then(userTransactions => {
            res.status(200).json({ message: "User transactions retrieved successfully", data: userTransactions });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
});

router.patch("/verify/:transactionId", adminAuthorization, async (req, res) => {
    // buatlah endpoint PATCH /transaction/verify/:transactionId yang akan digunakan untuk memverifikasi transaksi. Endpoint ini akan memanggil fungsi verifyTransaction yang telah dibuat sebelumnya.
    const { transactionId } = req.params;

    transactionService.verifyTransaction(transactionId)
        .then(verifiedTransaction => {
            res.status(200).json({ message: "Transaction verified successfully", data: verifiedTransaction });
        })
        .catch(error => {
            res.status(404).json({ message: error.message });
        });
});

router.post("/return/:transactionId", authorizeJWT, async (req, res) => {
    // buatlah endpoint POST /transaction/return/:transactionId yang akan digunakan untuk mengembalikan buku. Endpoint ini akan memanggil fungsi returnBook yang telah dibuat sebelumnya.
    const { transactionId } = req.params;

    transactionService.returnBook(transactionId)
        .then(returnedTransaction => {
            res.status(200).json({ message: "Book returned successfully", data: returnedTransaction });
        })
        .catch(error => {
            res.status(404).json({ message: error.message });
        });
})

module.exports = router;