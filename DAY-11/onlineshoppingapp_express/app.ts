import express, { Request, Response } from "express";
import productsRouter from "./routes/products.routes";
var path = require("path");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
// adding routes
app.use("/products", productsRouter);

app.listen(5555, () => console.log(`Server running @ port 5555 !`));
