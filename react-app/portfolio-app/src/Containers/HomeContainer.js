import React, { useEffect, useState } from "react";
import "../SCSS/Homepage/Scroll1.scss";
import Banner from "../Components/Homepage/Banner";
import About from "../Components/AboutMe/About";

const HomeContainer = () => {
  return (
    <div className="home-container">
      <Banner />
      <About />
    </div>
  );
};

export default HomeContainer;
