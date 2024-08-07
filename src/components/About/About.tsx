import { useRef, useState, useEffect } from "react";
import me from "../../../images/pictures/me3.jpg";
import "./About.css";

const About = () => {
  const meRef = useRef<HTMLImageElement>(null);
  const [aboutMe, setAboutMe] = useState(false);

  const observerCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("about_me")) {
        setAboutMe(true);
      }
      observer.unobserve(entry.target);
    }
  };

  const meOptions = {
    root: null,
    threshold: 0.8,
  };

  useEffect(() => {
    const meObserver = new IntersectionObserver(observerCallback, meOptions);
    if (meRef.current) {
      meObserver.observe(meRef.current as Element);
    }
  }, [observerCallback]);

  return (
    <div id="aboutMainContainer">
      <img
        ref={meRef}
        src={me}
        id="meImg"
        className={
          aboutMe ? "about_me about_me-left" : "about_me about_me-left-start"
        }
      />

      <p
        id="aboutMeText"
        className={
          aboutMe ? "about_me about_me-right" : "about_me about_me-right-start"
        }
      >
        Pleasure to meet you! I'm Jack, a full stack software engineer eager to
        take on exciting and complex projects alongside a talented and
        supportive team.
      </p>
    </div>
  );
};

export default About;
