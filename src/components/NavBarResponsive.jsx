import React, { useState } from "react";
import { getImageUrl } from "../helpers/getImage";
import { MenuNavBar } from "./MenuNavBar";

export const NavBarResponsive = () => {
  const [isNav, setIsNav] = useState(false);
  const handleOpenNav = () => {
    setIsNav(!isNav);
  };
  console.log(isNav, "Tenemos el valor del nav");
  return (
    <div className="navBar__icon" onClick={() => handleOpenNav()}>
      <img
        src={getImageUrl("icon/icon-hamburger.svg")}
        alt="icon-hamburger.svg"
      />
      {isNav && <MenuNavBar />}
    </div>
  );
};
