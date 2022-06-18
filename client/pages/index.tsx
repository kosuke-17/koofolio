import type { NextPage } from "next";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PublicIcon from "@mui/icons-material/Public";

const HeaderLaypout = styled("div")({
  borderBottom: "1px solid gray",
  display: "flex",
  justifyContent: "space-around",
});

const BodyLayout = styled("div")({
  backgroundColor: "aliceblue",
});

const Home: NextPage = () => {
  return (
    <>
      <HeaderLaypout>
        <div>Header1</div>
        <div>Header1</div>
        <div>
          <div>ホストになる</div>
          <div>
            <PublicIcon />
          </div>
          <div></div>
        </div>
      </HeaderLaypout>
      <BodyLayout>
        <Box component="span" sx={{ border: "1px dashed grey" }}>
          <Button>Save</Button>
        </Box>
      </BodyLayout>
    </>
  );
};

export default Home;
