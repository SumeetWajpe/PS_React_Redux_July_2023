"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const users_1 = __importDefault(require("./routes/users"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
var app = (0, express_1.default)();
dotenv_1.default.config();
mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING || "", {});
mongoose_1.default.connection.on("open", () => {
    console.log("OnlineshoppingDB connected successfully ");
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// adding routes
app.use("/users", users_1.default);
app.listen(process.env.PORT, () => console.log(`Server running @ port 5500 !`));
