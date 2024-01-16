const Item = require("../models/Item");
const Category = require("../models/Category");
const Vendor = require("../models/Vendor");

const asyncHandler = require("express-async-handler");

exports.getAll = asyncHandler(async (req, res, next) => {
  const allItems = await Item.find({}, "name category price")
    .sort({ name: 1 })
    .populate("category")
    .exec();

  res.render("itemList", { title: "All Items", items: allItems });
});

exports.getById = asyncHandler(async (req, res, next) => {
  const itemId = req.params.id;

  const item = await Item.findById(itemId)
    .populate("category")
    .populate("vendor")
    .exec();

  if (item == null) {
    const err = new Error("Item not found");
    err.status = 404;
    return next(err);
  }

  res.render("itemDetails", { title: "Item Details", item: item });
});

exports.createGet = asyncHandler(async (req, res, next) => {
  const categories = await Category.find().exec();
  const vendors = await Vendor.find().exec();

  res.render("itemForm", {
    title: "Create Item",
    categories: categories,
    vendors: vendors,
  });
});

exports.createPost = asyncHandler(async (req, res, next) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    vendor: req.body.vendor,
  });

  await item.save();
  res.redirect(item.url);
});
