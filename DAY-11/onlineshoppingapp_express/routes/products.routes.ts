import express, { Request, Response } from "express";
const router = express.Router();
import { ProductModel, data } from "../models/products.model";

router.get("/", (req: Request, res: Response) => {
  res.json(data.products);
});

router.post("/newproduct", (req: Request, res: Response) => {
  const { id, title, price, rating, imageUrl, likes, description } = req.body;
  const newProduct: ProductModel = new ProductModel(
    id,
    title,
    price,
    rating,
    likes,
    imageUrl,
    description,
  );
  data.products.push(newProduct);
  res.json({ msg: "Product added successfully !" });
});

router.delete("/delete/:id", (req: Request, res: Response) => {
  const id = +req.params.id;
  data.products = data.products.filter((p: ProductModel) => p.id !== id);
  res.json({ msg: "Product deleted successfully !", success: true });
});

export default router;
