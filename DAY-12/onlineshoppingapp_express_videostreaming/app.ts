import express, { Request, Response } from "express";
import productsRouter from "./routes/products.routes";
import mongoose from "mongoose";

import path from "path";
import cors from "cors";
import dotenv from "dotenv";
var app = express();
dotenv.config();

// mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "", {});
mongoose.connect(process.env.MONGODB_CONNECTION_STRING_ATLAS || "", {});

mongoose.connection.on("open", () => {
  console.log("OnlineshoppingDB connected successfully ");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
// adding routes
app.use("/products", productsRouter);

app.listen(5555, () => console.log(`Server running @ port 5555 !`));
