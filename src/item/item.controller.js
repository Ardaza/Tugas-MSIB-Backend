const express = require("express");
const { createItem, getAllItems, getItemById, editItemById, deleteItemById } = require("./item.service");
const authorizeJWT = require('../middleware/authorizeJWT');
const adminAuthorization = require("../middleware/adminAuthorization");

const router = express.Router();

// Create Item
router.post("/", adminAuthorization, async (req, res) => {
    // buatlah endpoint POST /item yang akan digunakan untuk membuat item baru. Endpoint ini akan memanggil fungsi createItem yang telah dibuat sebelumnya.
    const newItem = await createItem(req.body);
    res.status(201).json({ message: "Item created successfully", data: newItem });
});

router.get("/", authorizeJWT, async (req, res) => {
    // buatlah endpoint GET /item yang akan digunakan untuk mengambil seluruh data item. Endpoint ini akan memanggil fungsi getAllItems yang telah dibuat sebelumnya.
    const items = await getAllItems();
    res.status(200).json({ message: "Items retrieved successfully", data: items });
});

router.get("/:id", authorizeJWT, async (req, res) => {
    // buatlah endpoint GET /item/:id yang akan digunakan untuk mengambil data item berdasarkan id. Endpoint ini akan memanggil fungsi getItemById yang telah dibuat sebelumnya.
    const item = await getItemById(req.params.id);
    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item retrieved successfully", data: item });
});

router.put("/:id", adminAuthorization, async (req, res) => {
    // buatlah endpoint PUT /item/:id yang akan digunakan untuk mengubah data item berdasarkan id. Endpoint ini akan memanggil fungsi editItemById yang telah dibuat sebelumnya.
    const updatedItem = await editItemById(req.params.id, req.body);
    if (!updatedItem) {
        return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item updated successfully", data: updatedItem });
});

router.delete("/:id", adminAuthorization, async (req, res) => {
    // buatlah endpoint DELETE /item/:id yang akan digunakan untuk menghapus data item berdasarkan id. Endpoint ini akan memanggil fungsi deleteItemById yang telah dibuat sebelumnya.
    const deletedItem = await deleteItemById(req.params.id);
    if (!deletedItem) {
        return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
});

module.exports = router;