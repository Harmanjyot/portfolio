import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomeContainer from "./Containers/HomeContainer";
import reportWebVitals from "./reportWebVitals";
import NavComponent from "./Components/NavBar/NavComponent";
import MobileNavComponent from "./Components/NavBar/MobileNavComponent";
import Projects from "./Containers/Projects";
import NotFound from "./Containers/NotFound";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      {isMobile ? <MobileNavComponent /> : <NavComponent />}

      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/projects" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
