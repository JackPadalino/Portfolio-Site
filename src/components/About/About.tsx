import "./About.css";
import halfMoon from "./halfMoon.svg";
import trapezoid from "./trapezoid.svg";
import helloSign from "../../../graphics/helloSign.png";
import me from "../../../pictures/me.jpg";

const About = () => {
  return (
    <div id="about-container">
      <div id="about-me-container">
        {/* <img src={me} /> */}
        <h1>Hey!</h1>
      </div>
      <div id="graphics-container">
        <img src={helloSign} id="helloSign" />
      </div>
    </div>
  );
};

export default About;
