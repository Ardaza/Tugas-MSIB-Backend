const express = require("express");
const router = express.Router();
const transactionService = require("./transaction.service");
const authorizeJWT = require("../middleware/authorizeJWT");
const adminAuthorization = require("../middleware/adminAuthorization");

router.post("/borrow", authorizeJWT, async (req, res) => {

});

router.get("/", adminAuthorization, async (req, res) => {

});

router.get("/user", authorizeJWT, async (req, res) => {

});

router.patch("/verify/:transactionId", adminAuthorization, async (req, res) => {

});

router.post("/return/:transactionId", authorizeJWT, async (req, res) => {

})

module.exports = router;