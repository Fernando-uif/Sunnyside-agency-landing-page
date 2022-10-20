import { useEffect, useState } from "react";
import { getImageUrl } from "../helpers/getImage";
import "../sass/layout/navBar.scss";
import { NavBarResponsive } from "./NavBarResponsive";
import { NavBarText } from "./NavBarText";

export const NavBar = () => {
  // width of the screeen
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      <nav className="navBar">
        <img
          className="navBar__logo"
          src={getImageUrl("logos/logo.svg")}
          alt="logo.svg"
        />
        {
          width > 770
          ? 
            <NavBarText /> 
          : 
            <NavBarResponsive />
        }
      </nav>
    </>
  );
};
