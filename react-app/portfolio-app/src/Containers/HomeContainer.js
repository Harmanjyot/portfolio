import React, { useEffect, useState } from "react";
import "../SCSS/Homepage/Scroll1.scss";
import Banner from "../Components/Homepage/Banner";
import About from "../Components/AboutMe/About";

const HomeContainer = () => {
  useEffect(() => {
    if (window.location.hash === '#about') {
      setTimeout(() => {
        const aboutElement = document.querySelector('.about-container');
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: 'smooth' });
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
    </div>
  );
};

export default HomeContainer;
