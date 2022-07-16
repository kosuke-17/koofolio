import type { NextPage } from "next";
import { styled } from "@mui/system";
import Body from "../components/body";

const BodyLayout = styled("div")({
  backgroundColor: "aliceblue",
  height: "100vw",
});

const Home: NextPage = () => {
  return (
    <BodyLayout>
      <Body />
    </BodyLayout>
  );
};

export default Home;
