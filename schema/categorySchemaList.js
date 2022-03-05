const mongoose = require("mongoose");

const categoryListSchema = new mongoose.Schema({
  q: String,
  a: String,
  categoryName: String,
  id: String,
});

const CategoryList = mongoose.model("Category", categoryListSchema);

module.exports = CategoryList;
