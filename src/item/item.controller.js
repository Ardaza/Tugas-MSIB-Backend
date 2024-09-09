const express = require("express");
const { createItem, getAllItems, getItemById, editItemById, deleteItemById } = require("./item.service");
const authorizeJWT = require('../middleware/authorizeJWT');
const adminAuthorization = require("../middleware/adminAuthorization");

const router = express.Router();

// Create Item
router.post("/", adminAuthorization, async (req, res) => {
    // buatlah endpoint POST /item yang akan digunakan untuk membuat item baru. Endpoint ini akan memanggil fungsi createItem yang telah dibuat sebelumnya.
});

router.get("/", authorizeJWT, async (req, res) => {
    // buatlah endpoint GET /item yang akan digunakan untuk mengambil seluruh data item. Endpoint ini akan memanggil fungsi getAllItems yang telah dibuat sebelumnya.
});

router.get("/:id", authorizeJWT, async (req, res) => {
    // buatlah endpoint GET /item/:id yang akan digunakan untuk mengambil data item berdasarkan id. Endpoint ini akan memanggil fungsi getItemById yang telah dibuat sebelumnya.
});

router.put("/:id", adminAuthorization, async (req, res) => {
    // buatlah endpoint PUT /item/:id yang akan digunakan untuk mengubah data item berdasarkan id. Endpoint ini akan memanggil fungsi editItemById yang telah dibuat sebelumnya.
});

router.delete("/:id", adminAuthorization, async (req, res) => {
    // buatlah endpoint DELETE /item/:id yang akan digunakan untuk menghapus data item berdasarkan id. Endpoint ini akan memanggil fungsi deleteItemById yang telah dibuat sebelumnya.
});

module.exports = router;