const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true },
});

VendorSchema.virtual("url").get(function () {
  return "/catalog/vendor/" + this._id;
});

module.exports = mongoose.model("Vendor", VendorSchema);
