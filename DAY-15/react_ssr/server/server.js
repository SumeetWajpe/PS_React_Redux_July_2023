import React from "react";
import App from "../src/App";
var express = require("express");
var path = require("path");
var app = express();
var ReactDOMServer = require("react-dom/server");

var fs = require("fs");
app.get("/", (req, res) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(<App />)} </div>`,
        ),
      );
    }
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(2500, () => console.log("Server running at port 5000 !"));
