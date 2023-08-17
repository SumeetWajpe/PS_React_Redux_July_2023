const express = require("express");
const router = express.Router();
const users = [{ name: "jim" }, { name: "kim" }]; // database
router.get("/", (req, res) => {
  res.render("users", { users });
});

module.exports = router;
