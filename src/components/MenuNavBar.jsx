import React from "react";

export const MenuNavBar = () => {
  return (
    <>
      <div className="navBar__container">
        <span className="navBar__container-arrow"></span>
        <div className="navBar__menu">
          <div className="navBar__menu-item">about</div>
          <div className="navBar__menu-item">services</div>
          <div className="navBar__menu-item">projects</div>
          <div className="navBar__menu-item navBar__menu-4">contact</div>
        </div>
      </div>
    </>
  );
};
