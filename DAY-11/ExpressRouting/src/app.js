const express = require("express");
const productsRouter = require("./routes/products.routes");
const usersRouter = require("./routes/users.routes");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
