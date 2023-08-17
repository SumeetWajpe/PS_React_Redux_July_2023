import express, { Request, Response } from "express";
const router = express.Router();
import { products } from "../models/products.model";

router.get("/", (req: Request, res: Response) => {
  res.json(products);
});

export default router;
