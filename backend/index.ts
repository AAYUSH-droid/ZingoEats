require("dotenv").config();
import express, { Express, Request, Response } from "express";
const app = express();
const port = process.env.PORT;

const db = require("./db/index");

//importing routers
import productRouter from "./routes/productRouter";
import userRouter from "./routes/userRouter";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", productRouter);
app.use("/api/", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () =>
  console.log(`Server is working on http://localhost:${port}`)
);
