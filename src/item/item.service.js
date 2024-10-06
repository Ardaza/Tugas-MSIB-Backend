const { insertItem, findItems, findItemById, editItem, deleteItem } = require("./item.repository");

async function createItem(newItemData) {
  // buatlah fungsi createItem yang menerima satu parameter newItemData. Fungsi ini akan memasukkan data item baru ke dalam database.
  return await insertItem(newItemData);
}

async function getAllItems() {
  // buatlah fungsi getAllItems yang tidak menerima parameter. Fungsi ini akan mengembalikan seluruh data item yang ada di database.
  return await findItems();
}

async function getItemById(id) {
  // buatlah fungsi getItemById yang menerima satu parameter id. Fungsi ini akan mengembalikan data item berdasarkan id yang diberikan.
  return await findItemById(id);
}

async function editItemById(id, itemData) {
  // buatlah fungsi editItemById yang menerima dua parameter, id dan itemData. Fungsi ini akan mengubah data item berdasarkan id yang diberikan.
  return await editItem(id, itemData);
}

async function deleteItemById(id) {
  // buatlah fungsi deleteItemById yang menerima satu parameter id. Fungsi ini akan menghapus data item berdasarkan id yang diberikan.
  return await deleteItem(id);
}

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  editItemById,
  deleteItemById,
};
