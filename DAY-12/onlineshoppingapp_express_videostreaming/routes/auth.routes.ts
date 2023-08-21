import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
var router = express.Router();

router.post("/", (req: Request, res: Response) => {
  // get username + pwd from req.body
  // verify the user from db
  // sign / create the token
  let saltRounds = 10;
  let userInfo = req.body;
  bcrypt.hash(userInfo.password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    console.log(hash); // store this in db !
  });
  const payload = { name: userInfo.name, lastlogin: "Monday 21st" };
  jwt.sign(
    payload,
    process.env.SECRET_KEY || "",
    { expiresIn: "2 Days" },
    (err, token) => {
      if (err) console.log(err);
      else return res.json({ token });
    },
  ); // secret shud be from .env
});

export default router;
