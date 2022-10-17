import React from "react";
import { getImageUrl } from "../helpers/getImage";
import "../sass/layout/content.scss";

export const Content = () => {
  return (
    <div className="content">
      <div className="content__item">
        <div className="content__item-text">
          <div className="content__title">transform your brand</div>
          <div className="content__description">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </div>
          <div className="content__info">learn more</div>
        </div>
        <div className="content__item-img">
          <img
            src={getImageUrl("desktop/image-transform.jpg")}
            alt="image-transform.jpg"
            className="content__img"
          />
        </div>
      </div>

      <div className="content__item">
        <div className="content__item-img">
          <img src={getImageUrl('desktop/image-stand-out.jpg')} alt='' className="content__img"/>
        </div>
        <div className="content__item-text">
          <div className="content__title">stand out to the right audience</div>
          <div className="content__description">
            Using a collaborative formula of designers, researchers,
            photographers, videographers and copywriters, we'll build and extend
            your brand in digital places.
          </div>
          <div className="content__info">learn more</div>
        </div>
      </div>

      <div className="content__item">
        <div className="content__item-imgContent"></div>
        <div className="content__item-imgContent"></div>
      </div>
    </div>
  );
};
