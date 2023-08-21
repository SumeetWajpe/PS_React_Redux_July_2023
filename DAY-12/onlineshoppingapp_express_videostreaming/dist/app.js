"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
var app = (0, express_1.default)();
dotenv_1.default.config();
// mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "", {});
mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING || "", {});
mongoose_1.default.connection.on("open", () => {
    console.log("OnlineshoppingDB connected successfully ");
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// adding routes
app.use("/login", auth_routes_1.default);
app.use("/products", products_routes_1.default);
app.listen(5555, () => console.log(`Server running @ port 5555 !`));
