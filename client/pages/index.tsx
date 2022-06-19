import type { NextPage } from "next";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import {
  HeaderButton,
  HeaderInput,
  HeaderLaypout,
  HeaderSearch,
} from "../components/header";
import Body from "../components/body";

const Layout = styled("div")({
  padding: "1rem",
});

const BodyLayout = styled("div")({
  backgroundColor: "aliceblue",
  height: "100vw",
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
      <BodyLayout>
        <Body />
      </BodyLayout>
    </Layout>
  );
};

export default Home;
