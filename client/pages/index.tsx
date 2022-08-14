import type { NextPage } from "next";
import { styled } from "@mui/system";

const BodyLayout = styled("div")({
  backgroundColor: "aliceblue",
  height: "100vw",
});

const Home: NextPage = () => {
  return (
    <BodyLayout>
      <div>index</div>
    </BodyLayout>
  );
};

export default Home;
