"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const usersSchema = new Schema({
    name: String,
    age: Number,
});
// mongoose.model(nameofcollectioninDB,Schema)
const User = mongoose_1.default.model("users", usersSchema);
exports.default = User;
