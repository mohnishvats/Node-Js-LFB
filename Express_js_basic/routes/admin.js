const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
  //res.sendFile(path.join(__dirname, "../", "Views", "add-product.html"));
  //Better-way to do that
  res.sendFile(path.join(rootDir, "../", "Views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
