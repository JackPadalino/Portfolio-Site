import React from "react";
import "./Home.css";
import { ReactComponent as Banner } from "./banner.svg";

const Home = () => {
  return (
    <div id="home-container">
      <Banner />
      <div id="home-info">
        <h1 className="home-info" id="home-name">
          Jack Padalino
        </h1>
        <p className="home-info" id="home-title">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Home;
