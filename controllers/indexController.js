const Item = require("../models/Item");
const Category = require("../models/Category");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.render("index");
});
