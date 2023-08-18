import express, { Request, Response } from "express";
import { ProductModel, data } from "../models/products.model";
import path from "path";
import fs from "fs";

const router = express.Router();

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

router.get("/video/:id", (req: Request, res: Response) => {
  // status code - 200 success | 201 creation | 206 success (partial content)
  // range header
  // 1st request (range bytes=0-)
  // 2nd request (range bytes=100001-200001)

  try {
    // get the id
    const productId: number = +req.params.id || 0;
    const product =
      data.products.find(p => p.id == productId) || new ProductModel(); // can come from DB !
    const videoUrl: string = product.videoUrl;
    let videoPath = path.resolve(videoUrl);
    const videoSize = fs.statSync(videoPath).size;
    // console.log(videoSize);
    const range = req.headers.range;
    // console.log(range);
    const chunk_size = 10 ** 6; // 1 MB
    const start = Number(range?.replace(/\D/g, ""));
    const end = Math.min(start + chunk_size, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Type": "video/mp4",
      "Content-length": contentLength,
    };

    const videoStream = fs.createReadStream(videoPath, { start, end });
    res.writeHead(206, headers);
    videoStream.pipe(res);
  } catch (error) {}
});
export default router;
