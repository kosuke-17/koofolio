import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

const PORT = 8000;

// CORS対策
app.use(cors());

// server起動
app.listen(PORT);

// pdf作成するためのパス
app.get("/archive", (req: Request, res: Response) => {
  console.log("api届いた");

  res.json("hello world");
});
