import React from "react";
import "./Home.css";
import { ReactComponent as Banner } from "./banner.svg";

const Home = () => {
  return (
    <div id="home-container">
      <Banner />
      <h1 id="home-name">Jack Padalino</h1>
    </div>
  );
};

export default Home;
