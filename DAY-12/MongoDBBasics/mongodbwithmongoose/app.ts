import express, { Request, Response } from "express";
import path from "path";
import usersRouter from "./routes/users";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
// adding routes
app.use("/users", usersRouter);

app.listen(5500, () => console.log(`Server running @ port 5500 !`));
