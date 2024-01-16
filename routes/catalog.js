const express = require("express");
const router = express.Router();

// Require controller modules --------------------------------------------------

const itemController = require("../controllers/itemController");
const categoryController = require("../controllers/categoryController");
const vendorController = require("../controllers/vendorController");

// ITEM ROUTES -----------------------------------------------------------------
// - get all items
// - create an item
// - delete an item
// - update an item
// - get an item by id

// GET all items catalog
router.get("/item", itemController.getAll);

// GET page to create an item
// router.get("/item/create", itemController.createGet);
// POST page request to create an item
// router.post("/item/create", itemController.createPost);

// GET page to delete an item
// router.get("/item/delete/:id", itemController.deleteGet);
// POST page request to delete an item
//router.get("/item/delete/:id", itemController.deletePost);

// GET page to update an item
// router.get("/item/update/:id", itemController.updateGet);
// POST page request to update an item
// router.post("/item/update/:id", itemController.updatePost);

// GET page to get an item by id
router.get("/item/:id", itemController.getById);

// Export router ---------------------------------------------------------------

module.exports = router;
