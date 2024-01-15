console.log(
  "This script populates some test items, categories, and vendors to your database."
);

const Item = require("./models/Item");
const Category = require("./models/Category");
const Vendor = require("./models/Vendor");

const mongoose = require("mongoose");
require("dotenv").config();

const items = [];
const categories = [];
const vendors = [];

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to Connect to the DB");
  await mongoose.connect(mongoDB);
  console.log("Debug: Connected to the DB");
  await createCategories();
  await createVendors();
  await createItems();
  console.log("Debug: Closing connection");
  await mongoose.connection.close();
}

async function itemCreate(
  index,
  name,
  description,
  category,
  price,
  stock,
  vendor
) {
  const itemDetail = {
    name,
    description,
    category,
    price,
    stock,
    vendor,
  };

  const item = new Item(itemDetail);
  try {
    await item.save();
    items[index] = item;
    console.log("New Item: " + item);
  } catch (err) {
    console.log("Error saving item: " + item);
  }
}

async function categoryCreate(index, name, description) {
  const categoryDetail = {
    name,
    description,
  };

  const category = new Category(categoryDetail);
  try {
    await category.save();
    categories[index] = category;
    console.log("New Category: " + category);
  } catch (err) {
    console.log("Error saving category: " + category);
  }
}

async function vendorCreate(index, name, description) {
  const vendorDetail = {
    name,
    description,
  };

  const vendor = new Vendor(vendorDetail);
  try {
    await vendor.save();
    vendors[index] = vendor;
    console.log("New Vendor: " + vendor);
  } catch (err) {
    console.log("Error saving vendor: " + vendor);
  }
}

async function createCategories() {
  console.log("Debug: Creating Categories");
  await Promise.all([
    categoryCreate(0, "Category 1", "Description 1"),
    categoryCreate(1, "Category 2", "Description 2"),
    categoryCreate(2, "Category 3", "Description 3"),
    categoryCreate(3, "Category 4", "Description 4"),
    categoryCreate(4, "Category 5", "Description 5"),
  ]);
}

async function createVendors() {
  console.log("Debug: Creating Vendors");
  await Promise.all([
    vendorCreate(0, "Vendor 1", "Description 1"),
    vendorCreate(1, "Vendor 2", "Description 2"),
    vendorCreate(2, "Vendor 3", "Description 3"),
    vendorCreate(3, "Vendor 4", "Description 4"),
    vendorCreate(4, "Vendor 5", "Description 5"),
  ]);
}

async function createItems() {
  console.log("Debug: Creating Items");
  await Promise.all([
    itemCreate(0, "Item 1", "Description 1", categories[0], 1.0, 1, vendors[0]),
    itemCreate(1, "Item 2", "Description 2", categories[1], 2.0, 2, vendors[1]),
    itemCreate(2, "Item 3", "Description 3", categories[2], 3.0, 3, vendors[2]),
    itemCreate(3, "Item 4", "Description 4", categories[3], 4.0, 4, vendors[3]),
    itemCreate(4, "Item 5", "Description 5", categories[4], 5.0, 5, vendors[4]),
    itemCreate(5, "Item 6", "Description 6", categories[0], 6.0, 6, vendors[1]),
    itemCreate(6, "Item 7", "Description 7", categories[1], 7.0, 7, vendors[2]),
    itemCreate(7, "Item 8", "Description 8", categories[2], 8.0, 8, vendors[3]),
    itemCreate(8, "Item 9", "Description 9", categories[3], 9.0, 9, vendors[4]),
    itemCreate(
      9,
      "Item 10",
      "Description 10",
      categories[4],
      10.0,
      10,
      vendors[0]
    ),
  ]);
}
