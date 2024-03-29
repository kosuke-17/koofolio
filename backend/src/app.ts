import express, { Request } from "express";
import cors from "cors";
import archiver from "archiver";
import * as fs from "fs";

const app = express();

const PORT = 8000;

// CORS対策
app.use(cors());

// server起動
app.listen(PORT);

// pdf作成するためのパス
app.get("/archive", async (req: Request, res) => {
  const outputDirPath = "pdfs/archiveTest1.pdf";
  const stream = fs.createReadStream(outputDirPath);
  // S3の場合
  // const stream = S3.getObject({ key }).createReadStream()
  var archive = archiver("zip");
  archive.pipe(res);
  archive
    .append("Some text to go in file 1.", { name: "1.txt" })
    .append(stream, {
      name: "somefolder1/2.pdf",
    })
    .append(stream, {
      name: "somefolder2/4.pdf",
    })
    .finalize();
});
