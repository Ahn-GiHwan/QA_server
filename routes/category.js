const express = require("express");
const router = express.Router();
const Category = require("../schema/categorySchema");

router.route("/getCategory").post((req, res) => {
  const { id } = req.body;
  Category.findOne({ id }, (err, category) => {
    if (err) console.log(err);
    else res.json(category);
  });
});

router.route("/addCategory").post((req, res) => {
  const { name, id } = req.body;

  Category.findOne({ name, id }, (err, account) => {
    if (err) console.log(err);
    else {
      if (account) {
        res.json({ success: false });
      } else {
        const newCategory = new Category({
          name,
          id,
        });

        newCategory.save().then(() => {
          res.json({ success: true });
        });
      }
    }
  });
});

module.exports = router;
