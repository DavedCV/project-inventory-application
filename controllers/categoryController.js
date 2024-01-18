const { ExpressValidator } = require("express-validator");
const Category = require("../models/Category");

const asyncHandler = require("express-async-handler");

exports.getAll = asyncHandler(async (req, res, next) => {
  const allCategories = await Category.find({}).sort({ name: 1 }).exec();

  res.render("categoryList", {
    title: "All Categories",
    categories: allCategories,
  });
});

exports.deleteGet = asyncHandler(async (req, res, next) => {
  const categoryId = req.params.id;

  const category = await Category.findById(categoryId).exec();

  res.render("categoryDelete", {
    title: "Delete Category",
    category: category,
  });
});

exports.deletePost = asyncHandler(async (req, res, next) => {
  const categoryId = req.params.id;

  const category = await Category.findByIdAndDelete(categoryId).exec();

  res.redirect("/catalog/category");
});

exports.createGet = asyncHandler(async (req, res, next) => {});

exports.createPost = asyncHandler(async (req, res, next) => {});
