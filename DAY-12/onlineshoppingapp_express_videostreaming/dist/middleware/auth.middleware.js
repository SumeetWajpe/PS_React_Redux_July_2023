"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isAuthenticated = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        const token = header === null || header === void 0 ? void 0 : header.split(" ")[1];
        if (token) {
            jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "", (err, decodedToken) => {
                if (err) {
                    return res.status(500).json({ err: "Invalid Token" });
                }
                else {
                    if (decodedToken) {
                        next();
                    }
                }
            });
        }
        else {
            return res.status(401).json({ err: "Token not found !" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ err: "Something went wrong !" });
    }
};
exports.isAuthenticated = isAuthenticated;
