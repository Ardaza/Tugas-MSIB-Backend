const express = require("express");
const { createItem, getAllItems, getItemById, editItemById, deleteItemById } = require("./item.service");
const authorizeJWT = require('../middleware/authorizeJWT');
const adminAuthorization = require("../middleware/adminAuthorization");

const router = express.Router();

// Create Item
router.post("/", adminAuthorization, async (req, res) => {

});

router.get("/", authorizeJWT, async (req, res) => {

});

router.get("/:id", authorizeJWT, async (req, res) => {

});

router.put("/:id", adminAuthorization, async (req, res) => {

});

router.delete("/:id", adminAuthorization, async (req, res) => {

});

module.exports = router;