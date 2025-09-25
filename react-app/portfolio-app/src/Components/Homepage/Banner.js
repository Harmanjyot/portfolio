import React, { useEffect, useState } from "react";
import "../../SCSS/Homepage/Scroll1.scss";
import "../../SCSS/Banners.scss";
import ComputerContainer from "./ComputerBanner";

const Banner = () => {
  const [imgHover, setimgHover] = useState(false);
  const [leftActive, setleftActive] = useState(false);

  return (
    <div className="banner-container">
      <div className={imgHover ? "banner-wrapper hover" : "banner-wrapper"}>
        <div
          className={
            imgHover ? "headline-container hover" : "headline-container"
          }
        >
          <div id="text-behind">
            TECH
            <br />
            STACK
          </div>
          <div id="text-behind-blur">
            TECH
            <br />
            STACK
          </div>
          <div id="text-front">
            TECH
            <br />
            STACK
          </div>
        </div>

        <div
          className={
            imgHover
              ? "headline-container hover second"
              : "headline-container second"
          }
        >
          <div id="text-behind">
            TECH
            <br />
            STACK
          </div>
          <div id="text-behind-blur">
            TECH
            <br />
            STACK
          </div>
          <div id="text-front">
            TECH
            <br />
            STACK
          </div>
        </div>
        <div className="banner-left-container">
          {imgHover ? <ComputerContainer /> : ""}
          <img
            onMouseEnter={() => {
              setimgHover(true);
              const elements = document.querySelectorAll(".nav-button-main");
              elements.forEach((element) => {
                element.classList.add("left-banner-active");
              });
            }}
            className={
              imgHover ? "banner-default-img active" : "banner-default-img"
            }
            src="/img/20250109_122902.jpg"
          ></img>
          <img
            onMouseEnter={() => {
              setimgHover(true);
              const elements = document.querySelectorAll(".nav-button-main");
              elements.forEach((element) => {
                element.classList.add("left-banner-active");
              });
            }}
            className={
              imgHover ? "banner-hover-img active" : "banner-hover-img"
            }
            src="/img/separate.png"
          ></img>
        </div>
        <div
          onMouseEnter={() => {
            setimgHover(false);
            const elements = document.querySelectorAll(".left-banner-active");
            elements.forEach((element) => {
              element.classList.remove("left-banner-active");
            });
          }}
          className={
            imgHover
              ? "banner-right-container active"
              : "banner-right-container"
          }
        >
          <div className="dark-text">
            {/* <div
              className={
                imgHover ? "headline-container hover" : "headline-container"
              }
            >
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
              HARMAN RAYAT
            </div> */}
            <div className="dark-text-head">HARMAN RAYAT</div>A Software
            Engineer passionate about crafting not just applications, but
            immersive user experiences
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
