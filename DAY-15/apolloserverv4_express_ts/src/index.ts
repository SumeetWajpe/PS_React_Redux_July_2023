import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;
import express from "express";
import { resolvers } from "../schema/resolvers.js";
import { typeDefs } from "../schema/typedefs.js";
import mongoose from "mongoose";
const app = express();
mongoose.connect("mongodb://localhost:27017/onlineshoppingdb" || "", {});

mongoose.connection.on("open", () => {
  console.log("OnlineshoppingDB connected successfully ");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();

// Specify the path where we'd like to mount our server
//highlight-start
app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  json(),
  expressMiddleware(server),
);
//highlight-end
app.listen(4000, () =>
  console.log("Apollo Server running @ http://localhost:4000/graphql"),
);
