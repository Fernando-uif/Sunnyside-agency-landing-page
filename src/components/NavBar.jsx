import React from "react";
import { getImageUrl } from "../helpers/getImage";
import "../sass/layout/navBar.scss";

export const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <img className="navBar__logo" src={getImageUrl("logos/logo.svg")} alt="logo.svg" />
        <div className="navBar__items">
          <div className="navBar__item navBar__item-1">about</div>
          <div className="navBar__item navBar__item-2">services</div>
          <div className="navBar__item navBar__item-3">projects</div>
          <div className="navBar__item navBar__item-4">contact</div>
        </div>
      </nav>
    </>
  );
};
