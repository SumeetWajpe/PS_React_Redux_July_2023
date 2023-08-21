import express from "express";
import jwt from "jsonwebtoken";
const SECRET_KEY = "MySecretKey";
const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  // get username + pwd from req.body
  // verify the user from db
  // sign / create the token
  const payload = { name: req.body.name, lastlogin: "Monday 21st" };
  jwt.sign(payload, SECRET_KEY, { expiresIn: "2 Days" }, (err, token) => {
    if (err) console.log(err);
    else return res.json({ token });
  }); // secret shud be from .env
});

app.post("/verify", (req, res) => {
  const header = req.headers.authorization;
  const token = header.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
    if (err) {
      return res.status(500).json({ err: "Invalid Token" });
    } else {
      res.json({ msg: "success" });
    }
  });
});

app.listen(5001, () => console.log("Server running @ 5001 !"));
