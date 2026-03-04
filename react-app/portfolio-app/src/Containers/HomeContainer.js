import React, { useEffect, useState } from "react";
import "../SCSS/Homepage/Scroll1.scss";
import Banner from "../Components/Homepage/Banner";
import About from "../Components/AboutMe/About";
import LetsChat from "../Components/Forms/LetsChat";

const HomeContainer = () => {
  useEffect(() => {
    if (window.location.hash === "#about" || window.location.hash === "#chat") {
      setTimeout(() => {
        const selector =
          window.location.hash === "#about"
            ? ".about-container"
            : ".lets-chat-container";
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Remove the hash from the URL
          window.history.replaceState(null, null, window.location.pathname);
        }
      }, 100);
    }
  }, []);

  return (
    <div className="home-container">
      <Banner />
      <About />
      <LetsChat />
    </div>
  );
};

export default HomeContainer;
