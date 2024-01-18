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
router.get("/item/create", itemController.createGet);
// POST page request to create an item
router.post("/item/create", itemController.createPost);

// GET page to delete an item
router.get("/item/delete/:id", itemController.deleteGet);
// POST page request to delete an item
router.post("/item/delete/:id", itemController.deletePost);

// GET page to update an item
router.get("/item/update/:id", itemController.updateGet);
// POST page request to update an item
router.post("/item/update/:id", itemController.updatePost);

// GET page to get an item by id
router.get("/item/:id", itemController.getById);

// CATEGORY ROUTES -------------------------------------------------------------
// - get all categories
// - create a category
// - delete a category
// - update a category
// - get a category by id

// GET all categories catalog
router.get("/category", categoryController.getAll);

// GET create a category
router.get("/category/create", categoryController.createGet);
// POST create a category
router.post("/category/create", categoryController.createPost);

// GET to delete a category
router.get("/category/delete/:id", categoryController.deleteGet);
// POST to delete a category
router.post("/category/delete/:id", categoryController.deletePost);

// GET to update a category
router.get("/category/update/:id", categoryController.updateGet);
// POST to update a category
router.post("/category/update/:id", categoryController.updatePost);

// GET specific category
router.get("/category/:id", categoryController.getById);

// VENDOR ROUTES ---------------------------------------------------------------
// - get all vendors
// - create a vendor
// - delete a vendor
// - update a vendor
// - get a vendor by id

// GET all vendors catalog
router.get("/vendor", vendorController.getAll);

// GET create a vendor
router.get("/vendor/create", vendorController.createGet);
// POST create a vendor
router.post("/vendor/create", vendorController.createPost);

// GET to delete a vendor
router.get("/vendor/delete/:id", vendorController.deleteGet);
// POST to delete a vendor
router.post("/vendor/delete/:id", vendorController.deletePost);

// GET to update a vendor
router.get("/vendor/update/:id", vendorController.updateGet);
// POST to update a vendor
router.post("/vendor/update/:id", vendorController.updatePost);

// GET vendor by id
router.get("/vendor/:id", vendorController.getById);

// Export router ---------------------------------------------------------------

module.exports = router;
