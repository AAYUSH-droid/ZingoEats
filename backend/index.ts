require("dotenv").config();
import express, { Express, Request, Response } from "express";
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./db/index");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () =>
  console.log(`Server is working on http://localhost:${port}`)
);
