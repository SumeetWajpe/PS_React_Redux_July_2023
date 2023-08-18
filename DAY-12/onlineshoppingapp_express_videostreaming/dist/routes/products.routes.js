"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_model_1 = __importDefault(require("../models/products.model"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let listofproductfromDB = yield products_model_1.default.find({});
        res.json(listofproductfromDB);
    }
    catch (error) {
        res.status(500).json({ msg: "Something went wrong !" });
    }
}));
router.post("/newproduct", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProductFromRequest = req.body;
        const newProduct = new products_model_1.default(Object.assign({}, newProductFromRequest));
        yield newProduct.save();
        res.status(201).json({ msg: "Product added successfully !" });
    }
    catch (error) {
        res.status(500).json({ msg: "Something went wrong !" });
    }
}));
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let productId = parseInt(req.params.id);
        let result = yield products_model_1.default.deleteOne({ id: productId });
        if (result.acknowledged && result.deletedCount) {
            res.json({ msg: "Product Deleted successfully !" });
        }
        else {
            throw new Error("Something went wrong !");
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: error === null || error === void 0 ? void 0 : error.message });
    }
}));
router.get("/video/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // status code - 200 success | 201 creation | 206 success (partial content)
    // range header
    // 1st request (range bytes=0-)
    // 2nd request (range bytes=100001-200001)
    try {
        // get the id
        const productId = +req.params.id || 0;
        const product = yield products_model_1.default.findOne({ id: productId }); // can come from DB !
        const videoUrl = (product === null || product === void 0 ? void 0 : product.videoUrl) || "";
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
}));
exports.default = router;
