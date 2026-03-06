import React from "react";
import "../../SCSS/Banners.scss";
import { IMG_PREFIX } from "../constants";

const MobileBanner = () => {
  return (
    <div className="mobile-banner">
      <div className="banner-img-container">
        <img src={IMG_PREFIX + "/separate.png"}></img>
      </div>
      <div className="headline-container">
        <div id="text-behind">
          HARMAN
          <br />
          RAYAT
        </div>
        <div id="text-behind-blur">
          HARMAN
          <br />
          RAYAT
        </div>
        <div id="text-front">
          HARMAN
          <br />
          RAYAT
        </div>
      </div>

      <div className="headline-container second">
        <div id="text-behind">
          HARMAN
          <br />
          RAYAT
        </div>
        <div id="text-behind-blur">
          HARMAN
          <br />
          RAYAT
        </div>
        <div id="text-front">
          HARMAN
          <br />
          RAYAT
        </div>
      </div>
    </div>
  );
};

export default MobileBanner;
