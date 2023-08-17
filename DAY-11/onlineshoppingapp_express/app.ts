import express from "express";
var path = require("path");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Using express with Typescript !");
});

app.listen(5555, () => console.log(`Server running @ port 5555 !`));
