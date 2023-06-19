import { useRef, useEffect } from "react";
import me from "../../../images/pictures/me2.jpg";
import helloSign from "../../../images/graphics/helloSign3.png";
import "./About.css";

const About = () => {
  const meRef = useRef<HTMLImageElement>(null);
  const aboutMeRef = useRef<HTMLImageElement>(null);

  const observerCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("meStart")) {
        entry.target.classList.remove("meStart");
        entry.target.classList.add("meTranslate");
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
    const meObserver = new IntersectionObserver(observerCallback, options);
    const aboutMeObserver = new IntersectionObserver(observerCallback, options);
    if (meRef.current) {
      meObserver.observe(meRef.current as Element);
    }
    if (aboutMeRef.current) {
      aboutMeObserver.observe(aboutMeRef.current as Element);
    }
  }, [observerCallback]);

  return (
    <div id="aboutMainContainer">
      <div id="aboutLeftContainer">
        <img ref={meRef} src={me} className="meStart" id="me" />
      </div>
      <div id="aboutRightContainer">
        <div ref={aboutMeRef} className="picStart" id="profileContainer">
          {/* <img src={me} id="me" /> */}
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
