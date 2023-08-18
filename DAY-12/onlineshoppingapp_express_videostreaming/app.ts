import express, { Request, Response } from "express";
import productsRouter from "./routes/products.routes";
import path from "path";
import cors from "cors";

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
// adding routes
app.use("/products", productsRouter);

app.listen(5555, () => console.log(`Server running @ port 5555 !`));
