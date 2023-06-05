import "./About.css";
import halfMoon from "../../../graphics/50satomic-08.svg";
import starBurst from "../../../graphics/50satomic-04.svg";

const About = () => {
  return (
    <div id="about-container">
      {/* <h1>About</h1> */}
      <div id="graphics-container">
        <img src={starBurst} id="starburst1" />
        <img src={halfMoon} id="halfMoon" />
        <img src={starBurst} id="starburst2" />
      </div>
    </div>
  );
};

export default About;
