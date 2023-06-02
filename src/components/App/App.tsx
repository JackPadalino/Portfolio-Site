import React, { useRef, useState, useEffect } from "react";
import { Nav, Router, Home, About, Projects, Resume, Contact } from "..";
import "./App.css";

const App = () => {
  // setting up variables and functions for sticky nav on scroll
  const navRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const [navVisible, setNavVisible] = useState<boolean>(false);

  const stickyNavCallback = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    setNavVisible(entry.isIntersecting);
    if (!navVisible) {
      navRef.current?.classList.add("nav-visible");
    } else {
      navRef.current?.classList.remove("nav-visible");
    }
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
  }, [navVisible]);

  return (
    <div id="app-container">
      <div ref={navRef} id="nav-container" className="nav-invisible">
        <Nav />
      </div>
      <div id="component-container">
        <div ref={homeRef} id="home-component-container">
          <Home />
        </div>
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default App;
