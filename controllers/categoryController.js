const Category = require("../models/Category");

const asyncHandler = require("express-async-handler");

exports.getAll = asyncHandler(async (req, res, next) => {
  const allCategories = await Category.find({}).sort({ name: 1 }).exec();

  res.render("categoryList", {
    title: "All Categories",
    categories: allCategories,
  });
});
