import type { NextPage } from "next";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Input from "@mui/material/Input";

const Layout = styled("div")({
  padding: "1rem",
});

const HeaderLaypout = styled("div")({
  borderBottom: "2px solid rgb(192,192,192, 0.5)",
  display: "flex",
  justifyContent: "space-around",
  backgroundClip: "padding-box",
  paddingTop: "2px",
  paddingBottom: "2px",
});

// formに変える
const HeaderSearch = styled("div")({
  paddingTop: "5px",
});

const HeaderButton = styled(Button)({
  marginLeft: 3,
  borderRadius: 50,
});
const HeaderInput = styled(Input)({
  borderRadius: 50,
  padding: "1px 1rem",
  boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.5)",
});

const BodyLayout = styled("div")({
  backgroundColor: "aliceblue",
});

const Home: NextPage = () => {
  return (
    <Layout>
      <HeaderLaypout>
        <div>
          <Image src="/koofolio240.png" width={120} height={50} />
        </div>
        <HeaderSearch>
          <HeaderInput disableUnderline={true} />
          <HeaderButton variant="contained">
            <SearchIcon />
          </HeaderButton>
        </HeaderSearch>
        <div>
          <div>
            <Image src="/avatar.jpg" width={50} height={50} />
          </div>
        </div>
      </HeaderLaypout>
      <BodyLayout></BodyLayout>
    </Layout>
  );
};

export default Home;
