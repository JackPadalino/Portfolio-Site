import "./About.css";
import helloSign from "../../../images/graphics/helloSign2.png";
import background from "../../../images/graphics/background2.jpg";

const About = () => {
  return (
    <div id="about-main-container">
      <div className="about-container" id="left-container">
        <img src={helloSign} id="helloSign" />
        <img src={background} id="about-background" />
      </div>
      <div className="about-container" id="right-container">
        <img src={background} id="about-background" />
      </div>
    </div>
  );
};

export default About;
