import { useRef, useEffect } from "react";
import driveInSign from "../../../images/graphics/driveInSign.png";
import driveInSignOnly from "../../../images/graphics/driveInSignOnly.png";
import marqueeSign from "../../../images/graphics/marqueeSign.png";

import Carousel from "./Carousel";
import "./Projects.css";

const Projects = () => {
  const driveInRef = useRef<HTMLImageElement>(null);
  const carouselRef = useRef<HTMLImageElement>(null);

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
      if (entry.target.classList.contains("carouselStart")) {
        entry.target.classList.remove("carouselStart");
        entry.target.classList.add("carouselTranslate");
      }
      observer.unobserve(entry.target);
    }
  };

  const driveInOptions = {
    root: null,
    threshold: 0.8,
  };

  const carouselOptions = {
    root: null,
    threshold: 1,
  };

  useEffect(() => {
    const driveInObserver = new IntersectionObserver(
      observerCallback,
      driveInOptions
    );
    const carouselObserver = new IntersectionObserver(
      observerCallback,
      carouselOptions
    );
    if (driveInRef.current) {
      driveInObserver.observe(driveInRef.current as Element);
    }
    if (carouselRef.current) {
      carouselObserver.observe(carouselRef.current as Element);
    }
  }, [observerCallback]);

  return (
    <div id="projectsMainContainer">
      <div id="projectsSignContainer">
        <img
          id="driveInSign"
          className="driveInStart"
          ref={driveInRef}
          src={driveInSign}
        />
      </div>
      <div id="projectsCarouselContainer">
        <Carousel />
      </div>
    </div>
  );
};

export default Projects;
