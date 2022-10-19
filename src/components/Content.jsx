import React from "react";
import { getImageUrl } from "../helpers/getImage";
import "../sass/layout/content.scss";

export const Content = () => {
  return (
    <main className="content">
      <div className="content__item">
        <div className="content__item-text">
          <div className="content__title">transform your brand</div>
          <div className="content__description">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </div>
          <div className="content__info content__info-yellow">learn more</div>
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
          <img
            src={getImageUrl("desktop/image-stand-out.jpg")}
            alt=""
            className="content__img"
          />
        </div>
        <div className="content__item-text">
          <div className="content__title">stand out to the right audience</div>
          <div className="content__description">
            Using a collaborative formula of designers, researchers,
            photographers, videographers and copywriters, we'll build and extend
            your brand in digital places.
          </div>
          <div className="content__info content__info-red">learn more</div>
        </div>
      </div>

      <div className="content__item">
        <div className="content__item-imgContent">
          <img
            className="content__img"
            src={getImageUrl("desktop/image-graphic-design.jpg")}
            alt=""
          />
          <div className="content__description content__description-img">
            <div className="content__images-title1">graphic design</div>
            <div className="content__images-description1">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </div>
          </div>
        </div>
        <div className="content__item-imgContent">
          <img
            className="content__img"
            src={getImageUrl("desktop/image-photography.jpg")}
            alt="orange.jpg"
          />
          <div className="content__description content__description-img">
            <div className="content__images-title2 ">photography</div>
            <div className="content__images-description2">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
