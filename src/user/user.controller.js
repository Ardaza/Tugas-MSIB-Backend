const express = require("express");
const router = express.Router();
const userService = require("./user.service");

router.post("/", async (req, res) => {
    // buatlah endpoint POST /user yang akan digunakan untuk membuat user baru. Endpoint ini akan memanggil fungsi insertUser yang telah dibuat sebelumnya.
    const newUserData = req.body;
    const newUser = await userService.insertUser(newUserData);
    res.status(201).json({ message: "User created successfully", data: newUser });
});

router.get("/", async (req, res) => {
    // buatlah endpoint GET /user yang akan digunakan untuk mengambil seluruh data user. Endpoint ini akan memanggil fungsi findUsers yang telah dibuat sebelumnya.
    const users = await userService.findUsers();
    res.status(200).json({ message: "Users retrieved successfully", data: users });
});

router.get("/:id", async (req, res) => {
    // buatlah endpoint GET /user/:id yang akan digunakan untuk mengambil data user berdasarkan id. Endpoint ini akan memanggil fungsi findUserById yang telah dibuat sebelumnya.
    const userId = req.params.id;
    const user = await userService.findUserById(userId);
    
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    
    res.status(200).json({ message: "User retrieved successfully", data: user });
});

router.patch("/:id", async (req, res) => {
    // buatlah endpoint PATCH /user/:id yang akan digunakan untuk mengubah data user berdasarkan id. Endpoint ini akan memanggil fungsi editUser yang telah dibuat sebelumnya.
    const userId = req.params.id;
    const updatedUser = await userService.editUser(userId, req.body);
    
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    
    res.status(200).json({ message: "User updated successfully", data: updatedUser });
});

router.delete("/:id", async (req, res) => {
    // buatlah endpoint DELETE /user/:id yang akan digunakan untuk menghapus data user berdasarkan id. Endpoint ini akan memanggil fungsi deleteUser yang telah dibuat sebelumnya.
    const userId = req.params.id;
    const deletedUser = await userService.deleteUser(userId);
    
    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    
    res.status(200).json({ message: "User deleted successfully" });
});

module.exports = router;