const express = require("express");
const router = express.Router();
const userService = require("./user.service");

router.post("/", async (req, res) => {
    // buatlah endpoint POST /user yang akan digunakan untuk membuat user baru. Endpoint ini akan memanggil fungsi insertUser yang telah dibuat sebelumnya.

});

router.get("/", async (req, res) => {
    // buatlah endpoint GET /user yang akan digunakan untuk mengambil seluruh data user. Endpoint ini akan memanggil fungsi findUsers yang telah dibuat sebelumnya.

});

router.get("/:id", async (req, res) => {
    // buatlah endpoint GET /user/:id yang akan digunakan untuk mengambil data user berdasarkan id. Endpoint ini akan memanggil fungsi findUserById yang telah dibuat sebelumnya.
});

router.patch("/:id", async (req, res) => {
    // buatlah endpoint PATCH /user/:id yang akan digunakan untuk mengubah data user berdasarkan id. Endpoint ini akan memanggil fungsi editUser yang telah dibuat sebelumnya.
});

router.delete("/:id", async (req, res) => {
    // buatlah endpoint DELETE /user/:id yang akan digunakan untuk menghapus data user berdasarkan id. Endpoint ini akan memanggil fungsi deleteUser yang telah dibuat sebelumnya.
});

module.exports = router;