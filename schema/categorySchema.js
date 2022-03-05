const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  id: String,
  memo: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
