import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

export const HeaderLaypout = styled("div")({
  borderBottom: "2px solid rgb(192,192,192, 0.5)",
  display: "flex",
  justifyContent: "space-around",
  backgroundClip: "padding-box",
  paddingTop: "2px",
  paddingBottom: "2px",
});

// formに変える
export const HeaderSearch = styled("div")({
  paddingTop: "5px",
});

export const HeaderButton = styled(Button)({
  marginLeft: 3,
  borderRadius: 50,
});
export const HeaderInput = styled(Input)({
  borderRadius: 50,
  padding: "1px 1rem",
  boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.5)",
});
