import { useRef, useEffect } from "react";
import driveInSign from "../../../images/graphics/driveInSign.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projectsMainContainer">
      <div id="projectsLeftContainer">
        <img id="driveInSign" src={driveInSign} />
      </div>
      <div id="projectsRightContainer">
        <h1>Projects</h1>
      </div>
    </div>
  );
};

export default Projects;
