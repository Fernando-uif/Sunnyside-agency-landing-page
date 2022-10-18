import React from "react";
import { getImageUrl } from "../helpers/getImage";
import "../sass/layout/testimonial.scss";
export const Testimonial = () => {
  return (
    <>
      <section className="testimonial">
        <div className="testimonial__title">client testimonial</div>
        <div className="testimonial__container">
          <div className="testimonial__card">
            <div className="testimonial__img">
              <img
                src={getImageUrl("people/image-emily.jpg")}
                alt="image-emily.jpg"
              />
            </div>
            <div className="testimonial__description">
              we put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </div>
            <div className="testimonial__name">emily r.</div>
            <div className="testimonial__role">marketing director</div>
          </div>
          <div className="testimonial__card">
            <div className="testimonial__img">
              <img
                src={getImageUrl("people/image-thomas.jpg")}
                alt="image-thomas.jpg"
              />
            </div>
            <div className="testimonial__description">
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </div>
            <div className="testimonial__name">thomas S.</div>
            <div className="testimonial__role">chief operating officer</div>
          </div>
          <div className="testimonial__card">
            <div className="testimonial__img">
              <img
                src={getImageUrl("people/image-jennie.jpg")}
                alt="image-jennie.jpg"
              />
            </div>
            <div className="testimonial__description">
              Incredible end result! Our sales increaded over 400% when we
              worked with Sunnyside. Highly recommended!
            </div>
            <div className="testimonial__name">jennie f.</div>
            <div className="testimonial__role">business owner</div>
          </div>
        </div>
      </section>
    </>
  );
};
