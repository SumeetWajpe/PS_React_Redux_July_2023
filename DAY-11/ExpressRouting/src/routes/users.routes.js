const express = require("express");
const router = express.Router();
const users = [{ name: "jim" }, { name: "kim" }]; // database
router.get("/", (req, res) => {
  res.json({ users });
});
router.get("/:name", (req, res) => {
  let name = req.params.name; // get the value from url
  let user = users.find(u => u.name == name); // find the user from db !
  res.json(user);
});

router.post("/newuser", (req, res) => {
  //console.log(req.body); // express.json() middleware populates the req.body
  let newUser = req.body;
  users.push(newUser);
  res.send("New User added !");
});
module.exports = router;
