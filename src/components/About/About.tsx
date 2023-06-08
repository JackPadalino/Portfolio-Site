import { useRef, useEffect } from "react";
import helloSign from "../../../images/graphics/helloSign2.png";
import background from "../../../images/graphics/background2.jpg";
import "./About.css";

const About = () => {
  const signRef = useRef<HTMLImageElement>(null);

  const signCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      entry.target.classList.remove("startLeft");
      entry.target.classList.add("slideRight");
      observer.unobserve(entry.target);
    }
  };

  const signOptions = {
    root: null,
    threshold: 0.25,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(signCallback, signOptions);
    if (signRef.current) {
      observer.observe(signRef.current as Element);
    }
  }, [signCallback]);

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
        <img src={background} id="aboutBackground" />
      </div>
    </div>
  );
};

export default About;
