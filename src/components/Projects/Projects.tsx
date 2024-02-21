import { useRef, useState, useEffect } from "react";
import projectsCurtain from "../../../images/graphics/projectsCurtain2.png";
import Carousel from "./Carousel";
import "./Projects.css";

const Projects = () => {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const carouselRef = useRef<HTMLImageElement>(null);
  const curtainRef = useRef<HTMLImageElement>(null);

  const observerCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
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

  const carouselOptions = {
    root: null,
    threshold: 1,
  };

  const curtainOptions = {
    root: null,
    threshold: 0.5,
  };

  useEffect(() => {
    const carouselObserver = new IntersectionObserver(
      observerCallback,
      carouselOptions
    );
    const curtainObserver = new IntersectionObserver(
      observerCallback,
      curtainOptions
    );

    if (carouselRef.current) {
      carouselObserver.observe(carouselRef.current as Element);
    }
    if (curtainRef.current) {
      curtainObserver.observe(curtainRef.current as Element);
    }
  }, [observerCallback]);

  return (
    <div id="projectsMainContainer">
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
