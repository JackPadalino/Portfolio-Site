import { useRef, useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setNavVisible } from "../../store/navSlice";
import { ReactComponent as Banner } from "./banner.svg";
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

  useEffect(() => {
    const observer = new IntersectionObserver(stickyNavCallback, navOptions);
    if (homeRef.current) {
      observer.observe(homeRef.current as Element);
    }
  }, [stickyNavCallback]);

  return (
    <div ref={homeRef} id="home-container">
      <Banner />
      <div id="home-info">
        <p className="home-info" id="home-name">
          Jack Padalino
        </p>
        <p className="home-info" id="home-title">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Home;
