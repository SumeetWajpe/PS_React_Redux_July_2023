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
var router = express_1.default.Router();
const users_model_1 = __importDefault(require("../models/users.model"));
/* GET users listing. */
router.get("/", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let users = yield users_model_1.default.find({}); // select * from
        console.log(users.length);
        res.json({ users });
    });
});
router.post("/newuser", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let { name, age } = req.body;
        let newUser = new users_model_1.default({ name, age });
        yield newUser.save(); // inserts the new user
        res.json({ msg: "user addedd successfully !" });
    });
});
exports.default = router;
