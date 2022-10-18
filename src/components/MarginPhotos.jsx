import React from "react";
import { getImageUrl } from "../helpers/getImage";
import "../sass/layout/marginPhotos.scss";

export const MarginPhotos = () => {
  return (
    <section className="marginPhotos">
      <div className="marginPhotos__item">
        <img
          src={getImageUrl("desktop/image-gallery-cone.jpg")}
          alt="image-gallery-cone.jpg"
          className="marginPhotos__img"
        />
      </div>
      <div className="marginPhotos__item">
        <img
          src={getImageUrl("desktop/image-gallery-milkbottles.jpg")}
          alt="image-gallery-milkbottles.jpg"
          className="marginPhotos__img"
        />
      </div>
      <div className="marginPhotos__item">
        <img
          src={getImageUrl("desktop/image-gallery-orange.jpg")}
          alt="image-gallery-orange.jpg"
          className="marginPhotos__img"
        />
      </div>
      <div className="marginPhotos__item">
        <img
          src={getImageUrl("desktop/image-gallery-sugarcubes.jpg")}
          alt="image-gallery-sugarcubes.jpg"
          className="marginPhotos__img"
        />
      </div>
    </section>
  );
};
