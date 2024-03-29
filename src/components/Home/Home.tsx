import { useRef, useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setNavVisible } from "../../store/navSlice";
import { ReactComponent as Banner } from "../../../images/graphics/banner.svg";
import linkedIn1 from "../../../images/graphics/linkedIn1.png";
import github2 from "../../../images/graphics/github2.png";
import "./Home.css";

const Home = () => {
  // Set up for intersection observer and making nav visible on user scroll.
  // If this component is no longer in view, nav will be set to visible using
  // Redux store.
  const dispatch = useAppDispatch();
  const homeRef = useRef<HTMLDivElement>(null);

  const stickyNavCallback = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    dispatch(setNavVisible(!entry.isIntersecting));
  };

  const navOptions = {
    root: null,
    threshold: 0,
  };

  return (
    <div ref={homeRef} id="homeMainContainer">
      <Banner />
      <div id="homeInfoContainer">
        <p className="homeInfoText" id="homeName">
          Jack Padalino
        </p>
        <p className="homeInfoText" id="homeTitle">
          Full-Stack Developer
        </p>
        <div id="iconsDiv">
          <a
            href="https://www.linkedin.com/in/jack-padalino-5b743826/"
            target="_blank"
          >
            <img className="icon" src={linkedIn1} />
          </a>
          <a href="https://github.com/JackPadalino" target="_blank">
            <img className="icon" src={github2} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
