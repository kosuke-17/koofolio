import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

function createData(
  name: string,
  short: number,
  tall: number,
  grande: number,
  venti: number
) {
  return { name, short, tall, grande, venti };
}

const Coffee = () => {
  const data = [
    { name: "コーヒー", price: 500, size: "tall" },
    { name: "コーヒー", price: 500, size: "tall" },
    { name: "コーヒー", price: 500, size: "tall" },
    { name: "コーヒー", price: 500, size: "tall" },
    { name: "コーヒー", price: 500, size: "tall" },
    { name: "コーヒー", price: 500, size: "tall" },
  ];
  const row = [
    createData("ドリップ コーヒー", 280, 320, 360, 400),
    createData("カフェ ミスト", 320, 360, 400, 440),
    createData("スターバックスラテ", 330, 370, 410, 450),
    createData("カプチーノ", 330, 370, 410, 450),
    createData("カフェ アメリカーノ", 300, 340, 380, 420),
    createData("キャラメル マキアート", 330, 370, 410, 450),
    createData("カフェモカ/ホワイトモカ", 330, 370, 410, 450),
  ];
  const row2 = [
    createData("エスプレッソ アフォガート", 280, 320, 360, 400),
    createData("ダーク モカ チップ", 320, 360, 400, 440),
    createData("キャラメル", 330, 370, 410, 450),
    createData("ダーク モカ チップ クリーム", 330, 370, 410, 450),
    createData("抹茶 クリーム", 300, 340, 380, 420),
    createData("バニラ クリーム", 330, 370, 410, 450),
    createData("マンゴー パッション ティー", 330, 370, 410, 450),
  ];
  const rows = [row, row2];

  return (
    <div>
      <Carousel>
        {rows.map((rows) => {
          return (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Short</TableCell>
                    <TableCell align="right">Tall</TableCell>
                    <TableCell align="right">Grande</TableCell>
                    <TableCell align="right">Venti</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.short}</TableCell>
                      <TableCell align="right">{row.tall}</TableCell>
                      <TableCell align="right">{row.grande}</TableCell>
                      <TableCell align="right">{row.venti}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Coffee;
