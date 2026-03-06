import React, { useEffect, useState, lazy, Suspense } from "react";
import "../SCSS/Homepage/Scroll1.scss";

// Lazy load desktop components
const Banner = lazy(() => import("../Components/Homepage/Banner"));
const About = lazy(() => import("../Components/AboutMe/About"));
const LetsChat = lazy(() => import("../Components/Forms/LetsChat"));

// Lazy load mobile components
const MobileBanner = lazy(() => import("../Components/Homepage/MobileBanner"));
const MobileAbout = lazy(() => import("../Components/AboutMe/MobileAbout"));
const MobileLetsChat = lazy(() => import("../Components/Forms/MobileLetsChat"));

const HomeContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());
  }, []);

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
      <Suspense fallback={<div>Loading...</div>}>
        {isMobile ? <MobileBanner /> : <Banner />}
        {isMobile ? <MobileAbout /> : <About />}
        {isMobile ? <MobileLetsChat /> : <LetsChat />}
      </Suspense>
    </div>
  );
};

export default HomeContainer;
