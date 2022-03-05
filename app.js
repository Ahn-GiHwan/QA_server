const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const accountRouter = require("./routes/account");
const categoryRouter = require("./routes/category");
const QA = require("./routes/QA");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/account", accountRouter);
app.use("/category", categoryRouter);
app.use("/QA", QA);

app.listen(process.env.PORT || 5555, () => {
  console.log("start server port - 5555");
});
