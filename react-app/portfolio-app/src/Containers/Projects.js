import React, { useEffect, useState } from "react";
import SimpleBanner from "../Components/SimpleBanner";
import "../SCSS/Projects/projects.scss";
import {
  IMG_PREFIX,
  GET_ALL_PROJECTS,
  SPRING_CONFIG,
  GET_TECH_PROJECTS,
} from "../Components/constants";
import ProjectsCarousel from "../Components/Projects/ProjectsCarousel";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [techSelected, setTech] = useState("All");

  useEffect(() => {
    // Fetch latest projects from backend API
    fetch(SPRING_CONFIG + GET_TECH_PROJECTS + "?tech=" + techSelected) // Adjust path based on your setup
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="projects-container">
      <div className="projects-banner-container">
        <div className="projects-main"></div>
        {/* <SimpleBanner image={IMG_PREFIX + "projects/banner.png"} /> */}
      </div>
      <div className="projects-nav">
        <ul>
          <li>
            <button className="links">All</button>
          </li>
          <li>Full Stack</li> <li>ReactJS</li> <li>Game Dev</li>
        </ul>
      </div>
      <ProjectsCarousel data={projects} />
    </div>
  );
};

export default Projects;
