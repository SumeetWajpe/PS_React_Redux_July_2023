"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_model_1 = require("../models/products.model");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.json(products_model_1.data.products);
});
router.post("/newproduct", (req, res) => {
    const { id, title, price, rating, imageUrl, likes, description } = req.body;
    const newProduct = new products_model_1.ProductModel(id, title, price, rating, likes, imageUrl, description);
    products_model_1.data.products.push(newProduct);
    res.json({ msg: "Product added successfully !" });
});
router.delete("/delete/:id", (req, res) => {
    const id = +req.params.id;
    products_model_1.data.products = products_model_1.data.products.filter((p) => p.id !== id);
    res.json({ msg: "Product deleted successfully !", success: true });
});
router.get("/video/:id", (req, res) => {
    // status code - 200 success | 201 creation | 206 success (partial content)
    // range header
    // 1st request (range bytes=0-)
    // 2nd request (range bytes=100001-200001)
    try {
        // get the id
        const productId = +req.params.id || 0;
        const product = products_model_1.data.products.find(p => p.id == productId) || new products_model_1.ProductModel(); // can come from DB !
        const videoUrl = product.videoUrl;
        let videoPath = path_1.default.resolve(videoUrl);
        const videoSize = fs_1.default.statSync(videoPath).size;
        // console.log(videoSize);
        const range = req.headers.range;
        // console.log(range);
        const chunk_size = Math.pow(10, 6); // 1 MB
        const start = Number(range === null || range === void 0 ? void 0 : range.replace(/\D/g, ""));
        const end = Math.min(start + chunk_size, videoSize - 1);
        const contentLength = end - start + 1;
        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Type": "video/mp4",
            "Content-length": contentLength,
        };
        const videoStream = fs_1.default.createReadStream(videoPath, { start, end });
        res.writeHead(206, headers);
        videoStream.pipe(res);
    }
    catch (error) { }
});
exports.default = router;
