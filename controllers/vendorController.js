const Vendor = require("../models/Vendor");

const asyncHandler = require("express-async-handler");

exports.getAll = asyncHandler(async (req, res) => {
  const vendors = await Vendor.find({});
  res.render("vendorList", { vendors });
});

exports.createGet = asyncHandler(async (req, res) => {});

exports.createPost = asyncHandler(async (req, res) => {});

exports.deleteGet = asyncHandler(async (req, res) => {});

exports.deletePost = asyncHandler(async (req, res) => {});

exports.updateGet = asyncHandler(async (req, res) => {});

exports.updatePost = asyncHandler(async (req, res) => {});

exports.getById = asyncHandler(async (req, res) => {});
