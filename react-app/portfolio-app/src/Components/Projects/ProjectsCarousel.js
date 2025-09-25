import React, { useEffect, useState, useRef } from "react";
import "../../SCSS/Projects/projects.scss";

const speedWheel = 0.1;
const speedDrag = -0.3;

const getZindex = (arrayLength, index) =>
  Array.from({ length: arrayLength }, (_, i) =>
    i === index ? arrayLength : arrayLength - Math.abs(index - i)
  );

const ProjectsCarousel = (props) => {
  const [projects, setProjects] = useState(props.data);
  const progress = useRef(50);
  const startX = useRef(0);
  const active = useRef(0);
  const isDown = useRef(false);

  const carouselRef = useRef(null);
  const cursorRefs = useRef([]);

  useEffect(() => {
    setProjects(props.data);
  }, [props.data]);

  const animate = () => {
    const items = carouselRef.current.querySelectorAll(".carousel-item");
    const length = items.length;

    progress.current = Math.max(0, Math.min(progress.current, 100));
    active.current = Math.floor((progress.current / 100) * (length - 1));

    const zIndices = getZindex(length, active.current);

    items.forEach((item, index) => {
      item.style.setProperty("--zIndex", zIndices[index]);
      item.style.setProperty("--active", (index - active.current) / length);
    });
  };

  const onItemClick = (i) => {
    const items = carouselRef.current.querySelectorAll(".carousel-item");
    progress.current = (i / items.length) * 100 + 10;
    animate();
  };

  const handleWheel = (e) => {
    const wheelProgress = e.deltaY * speedWheel;
    progress.current += wheelProgress;
    animate();
  };

  const handleMouseMove = (e) => {
    if (e.type === "mousemove") {
      cursorRefs.current.forEach(($cursor) => {
        if ($cursor)
          $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }
    if (!isDown.current) return;

    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX.current) * speedDrag;
    progress.current += mouseProgress;
    startX.current = x;
    animate();
  };

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  useEffect(() => {
    animate(); // initial animate

    document.addEventListener("wheel", handleWheel);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchstart", handleMouseDown);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleMouseDown);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div className="projects-container">
      <div ref={carouselRef} className="carousel">
        {projects.map((project, i) => (
          <div
            key={project.id || i}
            className="carousel-item"
            onClick={() => onItemClick(i)}
            style={{ cursor: "pointer" }}
          >
            <div className="carousel-box">
              <div className="title">{project.name}</div>
              <div className="num">{project.name}</div>
              <img
                src={
                  project.image ||
                  "https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g="
                }
                alt={project.title || "Project image"}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add cursor divs if you want them, similar to previous instructions */}
    </div>
  );
};

export default ProjectsCarousel;
