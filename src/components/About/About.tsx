import { useRef, useEffect } from "react";
import me from "../../../images/pictures/me2.jpg";
import helloSign from "../../../images/graphics/helloSign2.png";
import background from "../../../images/graphics/background2.jpg";
import "./About.css";

const About = () => {
  const signRef = useRef<HTMLImageElement>(null);
  const meRef = useRef<HTMLImageElement>(null);

  const observerCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("startLeft")) {
        entry.target.classList.remove("startLeft");
        entry.target.classList.add("slideRight");
      }
      if (entry.target.classList.contains("startRight")) {
        entry.target.classList.remove("startRight");
        entry.target.classList.add("slideLeft");
      }
      observer.unobserve(entry.target);
    }
  };

  const signOptions = {
    root: null,
    threshold: 0.5,
  };

  const meOptions = {
    root: null,
    threshold: 0.5,
  };

  useEffect(() => {
    const signObserver = new IntersectionObserver(
      observerCallback,
      signOptions
    );
    const meObserver = new IntersectionObserver(observerCallback, meOptions);
    if (signRef.current) {
      signObserver.observe(signRef.current as Element);
    }
    if (meRef.current) {
      meObserver.observe(meRef.current as Element);
    }
  }, [observerCallback]);

  return (
    <div id="aboutMainContainer">
      <div className="aboutContainer" id="leftContainer">
        <img
          ref={signRef}
          src={helloSign}
          className="startLeft"
          id="helloSign"
        />
        <img src={background} id="aboutBackground" />
      </div>
      <div className="aboutContainer" id="rightContainer">
        <img ref={meRef} src={me} className="startRight" id="me" />
        <img src={background} id="aboutBackground" />
      </div>
    </div>
  );
};

export default About;
