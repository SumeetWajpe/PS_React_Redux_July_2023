import express from "express";
var router = express.Router();
import User from "../models/users.model";
/* GET users listing. */
router.get("/", async function (req, res, next) {
  let users = await User.find({}); // select * from
  console.log(users.length);
  res.json({ users });
});
router.post("/newuser", async function (req, res, next) {
  let { name, age } = req.body;
  let newUser = new User({ name, age });
  await newUser.save(); // inserts the new user
  res.json({ msg: "user addedd successfully !" });
});

export default router;
