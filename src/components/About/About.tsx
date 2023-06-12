import { useRef, useEffect } from "react";
import me from "../../../images/pictures/me2.jpg";
import helloSign from "../../../images/graphics/helloSign3.png";
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
      if (entry.target.classList.contains("signStart")) {
        entry.target.classList.remove("signStart");
        entry.target.classList.add("signTranslate");
      }
      if (entry.target.classList.contains("picStart")) {
        entry.target.classList.remove("picStart");
        entry.target.classList.add("picTranslate");
      }
      observer.unobserve(entry.target);
    }
  };

  const options = {
    root: null,
    threshold: 0.5,
  };

  useEffect(() => {
    const signObserver = new IntersectionObserver(observerCallback, options);
    const meObserver = new IntersectionObserver(observerCallback, options);
    if (signRef.current) {
      signObserver.observe(signRef.current as Element);
    }
    if (meRef.current) {
      meObserver.observe(meRef.current as Element);
    }
  }, [observerCallback]);

  return (
    <div id="aboutMainContainer">
      <div id="leftContainer">
        <img
          ref={signRef}
          src={helloSign}
          className="signStart"
          id="helloSign"
        />
      </div>
      <div id="rightContainer">
        <div ref={meRef} className="picStart" id="profileContainer">
          <img src={me} id="me" />
          <p id="aboutMe">
            Pleasure to meet you! I'm Jack. I'm a full stack software engineer
            eager to take on exciting and complex projects alongside a talented
            and supportive team. My enthusiasm for learning, teamwork, and
            creative problem-solving stems from my time as a Computer Science
            teacher, and continues as I embark on a new journey to shift from
            public education into software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
