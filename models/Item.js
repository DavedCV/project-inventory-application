const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  vendor: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
});

// Virtual for item's URL
ItemSchema.virtual("url").get(function () {
  return "/catalog/item/" + this._id;
});

// Export model
module.exports = mongoose.model("Item", ItemSchema);
