import type { NextPage } from "next";
import { styled } from "@mui/system";
import Body from "../components/body";
import dynamic from "next/dynamic";

// three.jsのためのdynamic import
const BasicCanvas = dynamic(() => import("../components/BasicCanvas"), {
  ssr: false, // <- ここで ssr を無効にするオプションを渡す
});
const Canvas = dynamic(() => import("../components/Canvas"), {
  ssr: false, // <- ここで ssr を無効にするオプションを渡す
});
const BufferCanvas = dynamic(() => import("../components/BufferCanvas"), {
  ssr: false, // <- ここで ssr を無効にするオプションを渡す
});

const BodyLayout = styled("div")({
  backgroundColor: "aliceblue",
  height: "100vw",
});

const Home: NextPage = () => {
  return (
    // <BodyLayout>
    // <BasicCanvas />
    <Canvas />
    // <BufferCanvas />
    // {/* <Body /> */}
    // </BodyLayout>
  );
};

export default Home;
