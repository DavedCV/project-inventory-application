const Vendor = require("../models/Vendor");
const Item = require("../models/Item");

const asyncHandler = require("express-async-handler");

exports.getAll = asyncHandler(async (req, res) => {
  const vendors = await Vendor.find({});
  res.render("vendorList", { vendors });
});

exports.createGet = asyncHandler(async (req, res) => {
  res.render("vendorForm", { title: "Create Vendor" });
});

exports.createPost = asyncHandler(async (req, res) => {
  const vendor = new Vendor({
    name: req.body.name,
    description: req.body.description,
  });

  await vendor.save();
  res.redirect(vendor.url);
});

exports.deleteGet = asyncHandler(async (req, res) => {
  const vendorId = req.params.id;

  const vendor = await Vendor.findById(vendorId).exec();

  res.render("vendorDelete", { title: "Delete Vendor", vendor });
});

exports.deletePost = asyncHandler(async (req, res) => {
  const vendorId = req.params.id;

  const [dependantItems, vendor] = await Promise.all([
    Item.find({ vendor: vendorId }).exec(),
    Vendor.findById(vendorId).exec(),
  ]);

  if (dependantItems.length > 0) {
    res.render("vendorDelete", {
      title: "Delete Vendor",
      vendor: vendor,
      error: true,
    });
  } else {
    await Vendor.findByIdAndDelete(vendorId).exec();
    res.redirect("/catalog/vendor");
  }
});

exports.updateGet = asyncHandler(async (req, res) => {});

exports.updatePost = asyncHandler(async (req, res) => {});

exports.getById = asyncHandler(async (req, res) => {});
