import express, { Request, Response } from "express";
import products from "../models/products.model";
import { isAuthenticated } from "../middleware/auth.middleware";
import path from "path";
import fs from "fs";

const router = express.Router();

router.get("/", isAuthenticated, async (req: Request, res: Response) => {
  try {
    let listofproductfromDB = await products.find({});
    res.json(listofproductfromDB);
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong !" });
  }
});

router.post(
  "/newproduct",
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      const newProductFromRequest = req.body;
      const newProduct = new products({ ...newProductFromRequest });
      await newProduct.save();
      res.status(201).json({ msg: "Product added successfully !" });
    } catch (error) {
      res.status(500).json({ msg: "Something went wrong !" });
    }
  },
);

router.delete(
  "/delete/:id",
  isAuthenticated,
  async (req: Request, res: Response) => {
    try {
      let productId: number = parseInt(req.params.id);

      let result = await products.deleteOne({ id: productId });
      if (result.acknowledged && result.deletedCount) {
        res.json({ msg: "Product Deleted successfully !" });
      } else {
        throw new Error("Something went wrong !");
      }
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ msg: error?.message as string });
    }
  },
);

router.get("/video/:id", async (req: Request, res: Response) => {
  // status code - 200 success | 201 creation | 206 success (partial content)
  // range header
  // 1st request (range bytes=0-)
  // 2nd request (range bytes=100001-200001)

  try {
    // get the id
    const productId: number = +req.params.id || 0;
    const product = await products.findOne({ id: productId }); // can come from DB !
    const videoUrl: string = product?.videoUrl || "";
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
