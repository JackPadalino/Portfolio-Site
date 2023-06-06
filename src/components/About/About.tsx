import "./About.css";
import helloSign from "../../../images/graphics/helloSign.svg";

const About = () => {
  return (
    <div id="about-container">
      <div id="about-me-container"></div>
      <div id="graphics-container">
        <img src={helloSign} id="helloSign" />
      </div>
    </div>
  );
};

export default About;
