const prisma = require("../db");

async function insertItem(itemData) {
  // buatlah fungsi insertItem yang menerima satu parameter itemData. Fungsi ini akan memasukkan data item baru ke dalam database.
}

async function findItems() {
  // buatlah fungsi findItems yang tidak menerima parameter. Fungsi ini akan mengembalikan seluruh data item yang ada di database.
}

async function findItemById(id) {
  // buatlah fungsi findItemById yang menerima satu parameter id. Fungsi ini akan mengembalikan data item berdasarkan id yang diberikan.
}

async function editItem(id, itemData) {
  // buatlah fungsi editItem yang menerima dua parameter, id dan itemData. Fungsi ini akan mengubah data item berdasarkan id yang diberikan.
}

async function deleteItem(id) {
  // buatlah fungsi deleteItem yang menerima satu parameter id. Fungsi ini akan menghapus data item berdasarkan id yang diberikan.
}

async function updateItemQuantity(itemId, newQuantity) {
  // buatlah fungsi updateItemQuantity yang menerima dua parameter, itemId dan newQuantity. Fungsi ini akan mengubah jumlah item berdasarkan itemId yang diberikan.
}

module.exports = {
  insertItem,
  findItems,
  findItemById,
  editItem,
  deleteItem,
  updateItemQuantity
};
