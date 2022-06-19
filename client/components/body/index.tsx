import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PetsIcon from "@mui/icons-material/Pets";
import { useState } from "react";

const Nav = () => {
  const navStyle = {
    root: {
      marginTop: "2rem",
    },
  };
  const navActionStyle = {
    root: {
      color: "#000000",
    },
  };
  const BtnNavActions = [
    {
      label: "History",
      icon: <RocketLaunchIcon fontSize="large" />,
      onClick: () => alert("This is History"),
    },
    {
      label: "Me",
      icon: <InsertEmoticonIcon fontSize="large" />,
      onClick: () => alert("This is Me"),
    },
    {
      label: "Product",
      icon: <PetsIcon fontSize="large" />,
      onClick: () => alert("This is Product"),
    },
  ];
  return (
    <BottomNavigation showLabels style={navStyle.root}>
      {BtnNavActions &&
        BtnNavActions.map((e, idx) => {
          return (
            <BottomNavigationAction
              key={idx}
              style={navActionStyle.root}
              label={e.label}
              icon={e.icon}
              onClick={() => e.onClick()}
            />
          );
        })}
    </BottomNavigation>
  );
};
export default Nav;
