import React, { useEffect, useState } from "react";
import "../../SCSS/NavBar/Nav.scss";
import { Link } from "react-router-dom";

const NavComponent = () => {
  const [hoveredButton, setHoveredButton] = useState(false);
  const [canHoverButton, setCanHoveredButton] = useState(true);

  const handleMouseEnter = () => {
    if (canHoverButton) {
      setHoveredButton(true);
    }
  };

  const handMouseLeave = () => {
    setHoveredButton(false);
    setCanHoveredButton(false);
    setTimeout(() => {
      setCanHoveredButton(true);
    }, 1000);
  };

  const handleAboutMeClick = () => {
    const aboutElement = document.querySelector(".about-container");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#about";
      handMouseLeave();
    }
  };
  return (
    <div className="nav-component">
      <div
        className={hoveredButton ? "active nav-overlay" : "nav-overlay"}
      ></div>
      <div
        className={hoveredButton ? "active close-nav" : "close-nav"}
        onClick={handMouseLeave.bind(this)}
      ></div>
      <div className="nav-component-wrapper">
        <div className="nav-button-wrapper">
          <div
            className={
              hoveredButton ? "hovered nav-button-main" : "nav-button-main"
            }
            onMouseEnter={handleMouseEnter.bind(this)}
            // onMouseLeave={handMouseLeave.bind(this)}
            onClick={() => (window.location.href = "/")}
          >
            Home
          </div>
          <div
            className={
              hoveredButton ? "hovered nav-button-main" : "nav-button-main"
            }
            onMouseEnter={handleMouseEnter.bind(this)}
            onClick={handleAboutMeClick}
          >
            About Me
          </div>
          <div
            className={
              hoveredButton ? "hovered nav-button-main" : "nav-button-main"
            }
            onMouseEnter={handleMouseEnter.bind(this)}
            // onMouseLeave={handMouseLeave.bind(this)}
            onClick={() => (window.location.href = "/experience")}
          >
            Experience
          </div>
          <div
            className={
              hoveredButton ? "hovered nav-button-main" : "nav-button-main"
            }
            onMouseEnter={handleMouseEnter.bind(this)}
            onClick={() => (window.location.href = "/projects")}
          >
            Projects
          </div>
          <div
            className={
              hoveredButton
                ? "hovered nav-button-main lets-chat"
                : "nav-button-main lets-chat"
            }
            onMouseEnter={handleMouseEnter.bind(this)}
            onClick={() => (window.location.href = "/contact")}
            // onMouseLeave={handMouseLeave.bind(this)}
          >
            Let's Chat!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
