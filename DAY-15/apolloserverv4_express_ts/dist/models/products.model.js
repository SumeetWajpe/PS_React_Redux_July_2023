import mongoose from "mongoose";
const { Schema } = mongoose;
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
const Product = mongoose.model("products", ProductSchema);
export default Product;
