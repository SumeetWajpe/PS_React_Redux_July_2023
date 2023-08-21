"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
var router = express_1.default.Router();
router.post("/", (req, res) => {
    // get username + pwd from req.body
    // verify the user from db
    // sign / create the token
    let saltRounds = 10;
    let userInfo = req.body;
    bcrypt_1.default.hash(userInfo.password, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        console.log(hash); // store this in db !
    });
    const payload = { name: userInfo.name, lastlogin: "Monday 21st" };
    jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY || "", { expiresIn: "2 Days" }, (err, token) => {
        if (err)
            console.log(err);
        else
            return res.json({ token });
    }); // secret shud be from .env
});
exports.default = router;
