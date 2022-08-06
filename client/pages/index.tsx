import type { NextPage } from "next";
import { styled } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

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
  console.log("data");
  console.log(data);

  useEffect(() => {
    axios
      .get("http://localhost:8000/archive")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        // エラー処理
        console.log(e.message);
      });
  }, []);

  return (
    // <BodyLayout>
    <div>{data}</div>
  );
};

export default Home;
