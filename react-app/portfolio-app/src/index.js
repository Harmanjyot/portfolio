import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomeContainer from "./Containers/HomeContainer";
import reportWebVitals from "./reportWebVitals";
import NavComponent from "./Components/NavBar/NavComponent";
import Projects from "./Containers/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavComponent />

      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
