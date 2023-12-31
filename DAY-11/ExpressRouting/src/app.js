const express = require("express");
const path = require("path");
const productsRouter = require("./routes/products.routes");
const usersRouter = require("./routes/users.routes");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join("src/public")));
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.sendFile("Index.html", { root: __dirname });
});

// Error Handler (should be present at the last)
app.use(function (req, res) {
  res.status(404).send("Resource Not Found !");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
