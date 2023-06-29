import { useRef, useEffect } from "react";
import driveInSign from "../../../images/graphics/driveInSign.png";
import "./Projects.css";

const Projects = () => {
  const driveInRef = useRef<HTMLImageElement>(null);

  const observerCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("driveInStart")) {
        entry.target.classList.remove("driveInStart");
        entry.target.classList.add("driveInTranslate");
      }
      observer.unobserve(entry.target);
    }
  };

  const options = {
    root: null,
    threshold: 1,
  };

  useEffect(() => {
    const driveInObserver = new IntersectionObserver(observerCallback, options);
    if (driveInRef.current) {
      driveInObserver.observe(driveInRef.current as Element);
    }
  }, [observerCallback]);

  return (
    <div id="projectsMainContainer">
      <div id="projectsLeftContainer">
        <img
          id="driveInSign"
          className="driveInStart"
          ref={driveInRef}
          src={driveInSign}
        />
      </div>
      <div id="projectsRightContainer">
        <h1>Projects</h1>
      </div>
    </div>
  );
};

export default Projects;
