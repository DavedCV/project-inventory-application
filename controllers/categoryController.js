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

  await Category.findByIdAndDelete(categoryId).exec();

  res.redirect("/catalog/category");
});

exports.createGet = asyncHandler(async (req, res, next) => {
  res.render("categoryForm", {
    title: "Create Category",
  });
});

exports.createPost = asyncHandler(async (req, res, next) => {
  const category = new Category({
    name: req.body.name,
    description: req.body.description,
  });

  await category.save();
  res.redirect(category.url);
});

exports.getById = asyncHandler(async (req, res, next) => {
  const categoryId = req.params.id;
  const category = await Category.findById(categoryId).exec();

  res.render("categoryDetails", {
    title: "Category Details",
    category: category,
  });
});

exports.updateGet = asyncHandler(async (req, res, next) => {
  const categoryId = req.params.id;
  const category = await Category.findById(categoryId).exec();

  res.render("categoryForm", {
    title: "Update Category",
    category: category,
  });
});

exports.updatePost = asyncHandler(async (req, res, next) => {
  const category = new Category({
    name: req.body.name,
    description: req.body.description,
    _id: req.params.id,
  });

  await Category.findByIdAndUpdate(req.params.id, category).exec();
  res.redirect(category.url);
});
