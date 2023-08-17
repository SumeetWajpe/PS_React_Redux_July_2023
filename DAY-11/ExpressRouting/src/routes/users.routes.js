const express = require("express");
const router = express.Router();
const users = [{ name: "Jim" }, { name: "Kim" }];
router.get("/", (req, res) => {
  res.json({ users });
});

router.post("/newuser", (req, res) => {
  //console.log(req.body); // express.json() middleware populates the req.body
  let newUser = req.body;
  users.push(newUser);
  res.send("New User added !");
});
module.exports = router;
