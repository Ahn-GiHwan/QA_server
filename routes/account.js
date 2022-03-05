const express = require("express");
const router = express.Router();
const Account = require("../schema/accountSchema");

router.route("/isId").post((req, res) => {
  const { id } = req.body;
  Account.findOne({ id }, (err, account) => {
    if (err) console.log(err);
    else res.send(account);
  });
});

router.route("/login").post((req, res) => {
  const { id, pw } = req.body;
  Account.findOne({ id, pw }, (err, account) => {
    if (err) console.log(err);
    else res.send(account);
  });
});

// 회원가입
router.route("/signup").post((req, res) => {
  const { id, pw } = req.body;

  const newAccount = new Account({
    id,
    pw,
  });

  newAccount.save().then((set) => {
    res.json(set);
  });
});

module.exports = router;
