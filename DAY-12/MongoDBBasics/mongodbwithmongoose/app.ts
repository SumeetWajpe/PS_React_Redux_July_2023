import express, { Request, Response } from "express";
import path from "path";
import usersRouter from "./routes/users";
import mongoose from "mongoose";

var app = express();

mongoose.connect("mongodb://localhost:27017/onlineshoppingdb");
mongoose.connection.on("open", () => {
  console.log("OnlineshoppingDB connected successfully ");
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
// adding routes
app.use("/users", usersRouter);

app.listen(5500, () => console.log(`Server running @ port 5500 !`));
