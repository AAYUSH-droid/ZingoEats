"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT;
const db = require("./db/index");
//importing routers
const productRouter_1 = __importDefault(require("./routes/productRouter"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/", productRouter_1.default);
app.use("/api/", userRouter_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => console.log(`Server is working on http://localhost:${port}`));
