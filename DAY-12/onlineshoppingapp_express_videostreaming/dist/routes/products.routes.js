"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const products_model_1 = require("../models/products.model");
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
    // get the id
    const productId = +req.params.id;
    const product = products_model_1.data.products.find(p => p.id == productId); // can come from DB !
    const videoPath = product === null || product === void 0 ? void 0 : product.videoUrl;
});
exports.default = router;
