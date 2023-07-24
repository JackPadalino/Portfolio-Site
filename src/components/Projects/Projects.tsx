import { useRef, useState, useEffect } from "react";
import driveInSign1 from "../../../images/graphics/driveInSign.png";
import driveInSign2 from "../../../images/graphics/driveInSign3.png";
import projectsCurtain from "../../../images/graphics/projectsCurtain2.png";
import Carousel from "./Carousel";
import "./Projects.css";

const Projects = () => {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const driveInRef1 = useRef<HTMLImageElement>(null);
  const driveInRef2 = useRef<HTMLImageElement>(null);
  const carouselRef = useRef<HTMLImageElement>(null);
  const curtainRef = useRef<HTMLImageElement>(null);

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
      if (entry.target.classList.contains("curtain__panel")) {
        setCurtainOpen(true);
      }
      observer.unobserve(entry.target);
    }
  };

  const driveInOptions = {
    root: null,
    threshold: 0.5,
  };

  const carouselOptions = {
    root: null,
    threshold: 1,
  };

  const curtainOptions = {
    root: null,
    threshold: 0.5,
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
    const curtainObserver = new IntersectionObserver(
      observerCallback,
      curtainOptions
    );
    if (driveInRef1.current) {
      driveInObserver.observe(driveInRef1.current as Element);
    }
    if (driveInRef2.current) {
      driveInObserver.observe(driveInRef2.current as Element);
    }
    if (carouselRef.current) {
      carouselObserver.observe(carouselRef.current as Element);
    }
    if (curtainRef.current) {
      curtainObserver.observe(curtainRef.current as Element);
    }
  }, [observerCallback]);

  return (
    <div id="projectsMainContainer">
      <div id="projectsSignContainer">
        <img
          id="driveInSign2"
          className="driveInStart"
          ref={driveInRef2}
          src={driveInSign2}
        />
        <img
          id="driveInSign1"
          className="driveInStart"
          ref={driveInRef1}
          src={driveInSign1}
        />
      </div>
      <div id="projectsCurtainCarouselContainer">
        <div className="curtain">
          <img
            ref={curtainRef}
            className={
              curtainOpen
                ? "curtain__panel curtain__panel--left"
                : "curtain__panel"
            }
            src={projectsCurtain}
          />

          <Carousel />
          <img
            className={
              curtainOpen
                ? "curtain__panel curtain__panel--right"
                : "curtain__panel"
            }
            src={projectsCurtain}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
