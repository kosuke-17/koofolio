import "../styles/globals.css";
import type { AppProps } from "next/app";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import {
  HeaderButton,
  HeaderInput,
  HeaderLaypout,
  HeaderSearch,
} from "../components/header";

const Layout = styled("div")({
  padding: "1rem",
});

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
