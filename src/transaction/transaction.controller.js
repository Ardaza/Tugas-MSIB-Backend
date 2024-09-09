const express = require("express");
const router = express.Router();
const transactionService = require("./transaction.service");
const authorizeJWT = require("../middleware/authorizeJWT");
const adminAuthorization = require("../middleware/adminAuthorization");

router.post("/borrow", authorizeJWT, async (req, res) => {
    // buatlah endpoint POST /transaction/borrow yang akan digunakan untuk meminjam buku. Endpoint ini akan memanggil fungsi borrowBook yang telah dibuat sebelumnya.
});

router.get("/", adminAuthorization, async (req, res) => {
    // buatlah endpoint GET /transaction yang akan digunakan untuk mengambil seluruh data transaksi. Endpoint ini akan memanggil fungsi findTransactions yang telah dibuat sebelumnya.
});

router.get("/user", authorizeJWT, async (req, res) => {
    // buatlah endpoint GET /transaction/user yang akan digunakan untuk mengambil seluruh data transaksi yang dilakukan oleh user yang sedang login. Endpoint ini akan memanggil fungsi findUserTransactions yang telah dibuat sebelumnya.
});

router.patch("/verify/:transactionId", adminAuthorization, async (req, res) => {
    // buatlah endpoint PATCH /transaction/verify/:transactionId yang akan digunakan untuk memverifikasi transaksi. Endpoint ini akan memanggil fungsi verifyTransaction yang telah dibuat sebelumnya.
});

router.post("/return/:transactionId", authorizeJWT, async (req, res) => {
    // buatlah endpoint POST /transaction/return/:transactionId yang akan digunakan untuk mengembalikan buku. Endpoint ini akan memanggil fungsi returnBook yang telah dibuat sebelumnya.
})

module.exports = router;