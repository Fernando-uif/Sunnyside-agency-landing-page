import React from "react";
import { getImageUrl } from "../helpers/getImage";

export const NavBarResponsive = () => {
  return (
    <div className="navBar__icon">
      <img
        src={getImageUrl("icon/icon-hamburger.svg")}
        alt="icon-hamburger.svg"
      />
    </div>
  );
};
