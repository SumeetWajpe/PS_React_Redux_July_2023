"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const ProductSchema = new Schema({
    id: Number,
    title: String,
    price: Number,
    rating: Number,
    likes: Number,
    imageUrl: String,
    videoUrl: String,
    description: String,
});
const Product = mongoose_1.default.model("products", ProductSchema);
exports.default = Product;
