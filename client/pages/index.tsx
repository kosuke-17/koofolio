import type { NextPage } from "next";
import { styled } from "@mui/system";
import axios from "axios";
import { createElement, useEffect, useState } from "react";

// three.jsのためのdynamic import
// const BasicCanvas = dynamic(() => import("../components/BasicCanvas"), {
//   ssr: false, // <- ここで ssr を無効にするオプションを渡す
// });

const BodyLayout = styled("div")({
  backgroundColor: "aliceblue",
  height: "100vw",
});

const Home: NextPage = () => {
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    const fetch = async () => {
      const { data }: any = await axios
        .get("http://localhost:8000/archive", {
          responseType: "arraybuffer",
        })
        .catch((e) => {
          // エラー処理
          console.log("エラー発生");
          console.log(e.message);
        });

      if (data) {
        const blob = new Blob([data], { type: "application/zip" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "製品資料.zip");
        link.click();
        link.parentNode?.removeChild;
        console.log(data);
        console.log(blob);
        console.log(url);
        console.log(link);
      }
    };
    fetch();
  }, []);

  return (
    // <BodyLayout>
    <div>{data}</div>
  );
};

export default Home;
