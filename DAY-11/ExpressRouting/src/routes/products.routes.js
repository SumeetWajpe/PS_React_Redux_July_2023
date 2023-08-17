const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let products = [
    { id: 1, title: "Macbook" },
    { id: 2, title: "Shoes" },
  ];
  res.json(products);
});

module.exports = router;
