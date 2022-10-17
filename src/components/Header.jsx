import React from "react";
import { getImageUrl } from "../helpers/getImage";
import "../sass/layout/header.scss";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <img
            src={getImageUrl("desktop/image-header.jpg")}
            alt="image-header.jpg"
            className="header__image"
          />
          <div className="header__text">we are creatives</div>
          <img src={getImageUrl("icon/icon-arrow-down.svg")} alt="arrow" className="header__arrowDown" />
        </div>
      </div>
    </>
  );
};
