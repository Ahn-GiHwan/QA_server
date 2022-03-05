const mongoose = require("mongoose");

const QASchema = new mongoose.Schema({
  q: String,
  a: String,
  categoryId: String,
  id: String,
});

const QA = mongoose.model("QA", QASchema);

module.exports = QA;
