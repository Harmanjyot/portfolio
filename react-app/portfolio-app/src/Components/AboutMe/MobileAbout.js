import React from "react";
import { IMG_ILLUSTRATION, IMG_PREFIX, IMG_ICONS } from "../constants";
import "../../SCSS/About/about.scss";

const MobileAbout = () => {
  return (
    <div className="about-container mobile">
      <div className="content mobile">
        {/* Text section on top */}
        <div className="about-text">
          <h1>ABOUT</h1>
          <h1>ME !</h1>
          <p>
            Hey there! I'm Harman, a software engineer, game developer,
            procrastitating crocheter, and a fulltime gamer! My history with
            software can be traced back to my younger years with my father and I
            playing games on our PS2. One day, he suggested that I should try
            making games like the ones we used to play. That was the moment I
            got hooked on programming. Whether it's developing software,
            crafting games, or even crocheting, I love diving into new projects
            and challenges. I'm always eager to connect with fellow enthusiasts
            and explore new opportunities in the world of software and game
            development.
          </p>
        </div>

        {/* Image + floating circles below */}
        <div className="about-image">
          <div className="circles-container">
            <div className="circle">
              <img
                src={`${IMG_PREFIX}${IMG_ICONS}/crochet.png`}
                alt="Circle Icon"
              />
            </div>
            <div className="circle">
              <img
                src={`${IMG_PREFIX}${IMG_ICONS}/controller.png`}
                alt="Circle Icon"
              />
            </div>
            <div className="circle">
              <img
                src={`${IMG_PREFIX}${IMG_ICONS}/software.png`}
                alt="Circle Icon"
              />
            </div>
            <div className="circle">
              <img src={`${IMG_PREFIX}${IMG_ICONS}/vr.png`} alt="Circle Icon" />
            </div>
            <div className="circle">
              <img
                src={`${IMG_PREFIX}${IMG_ICONS}/basketball.png`}
                alt="Circle Icon"
              />
            </div>
          </div>
          <img
            src={`${IMG_PREFIX}${IMG_ILLUSTRATION}/green_lady.png`}
            alt="About Me Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAbout;
