import express, { Request, Response } from "express";
import path from "path";
import usersRouter from "./routes/users";
import mongoose from "mongoose";
import dotenv from "dotenv";
var app = express();
dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "", {});
mongoose.connection.on("open", () => {
  console.log("OnlineshoppingDB connected successfully ");
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
// adding routes
app.use("/users", usersRouter);

app.listen(process.env.PORT, () => console.log(`Server running @ port 5500 !`));
