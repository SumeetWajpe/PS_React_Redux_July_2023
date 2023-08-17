const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ users: ["Jim", "Kim"] });
});
module.exports = router;
