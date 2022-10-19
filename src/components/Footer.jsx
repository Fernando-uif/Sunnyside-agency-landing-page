import React from "react";
import { getImageUrl } from "../helpers/getImage";

import "../sass/layout/footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item-logo">
          <img
            className="footer__item-img"
            src={getImageUrl("logos/logoFooter.svg")}
            alt="logo.svg"
          />
        </div>
        <div className="footer__item-info">
          <div className="footer__info">about</div>
          <div className="footer__info">service</div>
          <div className="footer__info">projects</div>
        </div>
        <div className="footer__social-container">
          <div className="footer__item-social">
            <div className="footer__social">
              <img
                src={getImageUrl("icon/icon-facebook.svg")}
                alt="facebook.svg"
                className="footer__social-img"
              />
            </div>
            <div className="footer__social">
              <img
                src={getImageUrl("icon/icon-instagram.svg")}
                alt="icon-instagram.svg"
                className="footer__social-img"
              />
            </div>
            <div className="footer__social">
              <img
                src={getImageUrl("icon/icon-twitter.svg")}
                alt="icon-twitter.svg"
                className="footer__social-img"
              />
            </div>
            <div className="footer__social">
              <img
                src={getImageUrl("icon/icon-pinterest.svg")}
                alt="icon-pinterest.svg"
                className="footer__social-img"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
