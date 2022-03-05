const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  id: String,
  pw: String,
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
