import React from "react";
import { Nav, Router, Home, About, Projects, Resume, Contact } from "..";
import "./style.css";

const App = () => {
  return (
    <>
      <Nav />
      {/* <Router /> */}
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default App;
