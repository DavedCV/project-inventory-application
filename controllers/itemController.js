const Item = require("../models/Item");

const asyncHandler = require("express-async-handler");

exports.getAll = asyncHandler(async (req, res, next) => {
  const allItems = await Item.find({}, "name category price")
    .sort({ name: 1 })
    .populate("category")
    .exec();

  res.render("itemList", { title: "All Items", items: allItems });
});
