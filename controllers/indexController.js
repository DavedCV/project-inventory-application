const Item = require("../models/Item");
const Category = require("../models/Category");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const allItems = await Item.find({}, "name category price")
    .sort({ name: 1 })
    .populate("category")
    .exec();

  res.render("index", { title: "All Items", items: allItems });
});
