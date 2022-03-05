const express = require("express");
const router = express.Router();
const Category = require("../schema/categorySchema");

router.route("/getCategory/:_id").get((req, res) => {
  const { _id } = req.params;
  Category.find({ _id }, (err, category) => {
    if (err) console.log(err);
    else res.send(category);
  });
});

router.route("/getCategory").post((req, res) => {
  const { id } = req.body;
  Category.find({ id }, (err, category) => {
    if (err) console.log(err);
    else res.send(category);
  });
});

router.route("/setCategory").patch((req, res) => {
  const { _id, name, memo } = req.body;
  Category.updateOne({ _id }, { name, memo }, (err, category) => {
    if (err) {
      console.log(err);
    } else res.json({ success: true });
  });
});

router.route("/addCategory").post((req, res) => {
  const { name, id, memo } = req.body;

  Category.findOne({ name, id }, (err, account) => {
    if (err) console.log(err);
    else {
      if (account) {
        res.json({ success: false });
      } else {
        const newCategory = new Category({
          name,
          id,
          memo,
        });

        newCategory.save().then(() => {
          res.json({ success: true });
        });
      }
    }
  });
});

router.route("/deletteCategory/_id").delete((req, res) => {
  const { _id } = req.params;
  Category.deleteOne({ _id }, (err, category) => {
    if (err) {
      console.log(err);
      res.json({ success: false });
    } else res.json({ success: true });
  });
});

module.exports = router;
