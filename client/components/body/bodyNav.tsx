import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PetsIcon from "@mui/icons-material/Pets";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import Link from "next/link";

const Nav: React.FC = () => {
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
      refKey: "/history",
    },
    {
      label: "Me",
      icon: <InsertEmoticonIcon fontSize="large" />,
      refKey: "/me",
    },
    {
      label: "Coffee",
      icon: <CoffeeMakerIcon fontSize="large" />,
      refKey: "/coffee",
    },
    {
      label: "Product",
      icon: <PetsIcon fontSize="large" />,
      refKey: "/product",
    },
  ];
  return (
    <BottomNavigation showLabels style={navStyle.root}>
      {BtnNavActions &&
        BtnNavActions.map((e, idx) => {
          return (
            <Link href={e.refKey} key={idx}>
              <BottomNavigationAction
                style={navActionStyle.root}
                label={e.label}
                icon={e.icon}
              />
            </Link>
          );
        })}
    </BottomNavigation>
  );
};

export default Nav;
