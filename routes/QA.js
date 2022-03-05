const express = require("express");
const router = express.Router();
const QA = require("../schema/QASchema");

router.route("/getQAList/:_id").get((req, res) => {
  const { _id: categoryId } = req.params;
  QA.find({ categoryId }, (err, qa) => {
    if (err) console.log(err);
    else res.send(qa);
  });
});

router.route("/getQA/:_id").post((req, res) => {
  const { _id } = req.params;
  QA.find({ _id }, (err, qa) => {
    if (err) console.log(err);
    else res.send(qa);
  });
});

router.route("/setQA").patch((req, res) => {
  const { _id, q, a } = req.body;
  QA.updateOne({ _id }, { q, a }, (err, qa) => {
    if (err) {
      console.log(err);
    } else res.json({ success: true });
  });
});

router.route("/addQA").post((req, res) => {
  const { q, a, categoryId, id } = req.body;

  const newQA = new QA({
    q,
    a,
    categoryId,
    id,
  });

  newQA.save().then(() => {
    res.json({ success: true });
  });
});

router.route("/deleteQA/:_id").delete((req, res) => {
  const { _id } = req.params;
  QA.deleteOne({ _id }, (err, category) => {
    if (err) {
      console.log(err);
      res.json({ success: false });
    } else res.json({ success: true });
  });
});

module.exports = router;
