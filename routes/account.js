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

router.route("/signin").post((req, res) => {
  const { id, pw } = req.body;
  Account.findOne({ id, pw }, (err, account) => {
    if (err) console.log(err);
    else {
      if (account) res.json({ success: true, account: { id, pw } });
      else res.json({ success: false });
    }
  });
});

// 회원가입
router.route("/signup").post((req, res) => {
  const { id, pw } = req.body;

  Account.findOne({ id }, (err, account) => {
    if (err) console.log(err);
    else {
      if (account) {
        const newAccount = new Account({
          id,
          pw,
        });

        newAccount.save().then((account) => {
          res.json({ ...account, success: true });
        });
      } else {
        res.json({ success: false });
      }
    }
  });
});

module.exports = router;
