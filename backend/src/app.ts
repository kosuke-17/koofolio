import express from "express";
import cors from "cors";

const start = async () => {
  const app = express();

  const PORT = 8000;

  // CORS対策
  app.use(cors());

  // apollo起動
  app.listen(PORT);
};

start();
