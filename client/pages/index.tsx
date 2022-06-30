import type { NextPage } from "next";
import { styled } from "@mui/system";
import Body from "../components/body";
import Nav from "../components/body/bodyNav";

const BodyLayout = styled("div")({
  backgroundColor: "aliceblue",
  height: "100vw",
});

const Home: NextPage = () => {
  return (
    <BodyLayout>
      <Nav />
      <Body />
    </BodyLayout>
  );
};

export default Home;
