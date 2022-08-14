import React from "react";

import { styled } from "@mui/system";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

const SeparateBar = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "10px",
});
const SeparateName = styled("div")({
  fontSize: 20,
  opacity: 0.7,
  paddingLeft: "8px",
  paddingRight: "8px",
});
const BorderBar = styled("span")({
  opacity: 0.3,
  border: "3px solid #000",
  width: "90%",
});

const Separate = ({ name }: { name: string }) => {
  return (
    <SeparateBar>
      <ElectricBoltIcon
        fontSize="large"
        sx={{ border: "3px solid #000", borderRadius: "30px", opacity: 0.3 }}
      />
      <SeparateName>{name}</SeparateName>
      <BorderBar />
    </SeparateBar>
  );
};

export default Separate;
