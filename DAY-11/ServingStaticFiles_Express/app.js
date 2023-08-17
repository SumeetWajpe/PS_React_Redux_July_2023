const express = require("express");
// OR
// import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  // console.log(__dirname);
  res.sendFile("Index.html", { root: __dirname });
});

app.get("/styles.css", (req, res) => {
  res.sendFile("styles.css", { root: __dirname });
});
app.get("/script.js", (req, res) => {
  res.sendFile("script.js", { root: __dirname });
});
app.get("/products", (req, res) => {
  let products = [
    { id: 1, title: "Macbook" },
    { id: 2, title: "Shoes" },
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
