import express, { Request, Response } from "express";
import cors from "cors";
import archiver from "archiver";
import * as fs from "fs";

import { PassThrough } from "stream";

const app = express();

const PORT = 8000;

// CORS対策
app.use(cors());

// server起動
app.listen(PORT);

// pdf作成するためのパス
app.get("/archive", (req: Request, res) => {
  // create a file to stream archive data to.
  // const output = fs.createWriteStream("/example.zip");
  const output = new PassThrough();
  const archive = archiver("zip");

  // listen for all archive data to be written
  // 'close' event is fired only when a file descriptor is involved
  output.on("close", function () {
    console.log(archive.pointer() + " total bytes");
    console.log(
      "archiver has been finalized and the output file descriptor has closed."
    );
  });

  // This event is fired when the data source is drained no matter what was the data source.
  // It is not part of this library but rather from the NodeJS Stream API.
  // @see: https://nodejs.org/api/stream.html#stream_event_end
  output.on("end", function () {
    console.log("データを徐々に排出しました");
  });

  // pipe archive data to the file
  archive.pipe(output);

  // append a file from stream
  // const file1 = "/file1.txt";
  // archive.append(fs.createStream(file1), { name: "file1.txt" });

  // append a file from string
  archive.append("string cheese!", { name: "file2.txt" });

  // append a file from buffer
  const buffer3 = Buffer.from("buff it!");
  archive.append(buffer3, { name: "file3.txt" });

  // append a file
  archive.file("file1.txt", { name: "file4.txt" });

  // append files from a sub-directory and naming it `new-subdir` within the archive
  archive.directory("subdir/", "new-subdir");

  // append files from a sub-directory, putting its contents at the root of archive
  archive.directory("subdir/", false);

  // append files from a glob pattern
  // archive.glob("file*.txt", { cwd: __dirname });

  // finalize the archive (ie we are done appending files but streams have to finish yet)
  // 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
  archive.finalize();

  // console.log(output);

  output.pipe(res);

  return res.header("Content-Type", "application/zip");
});
