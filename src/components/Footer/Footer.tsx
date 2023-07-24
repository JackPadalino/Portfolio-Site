import linkedIn1 from "../../../images/graphics/linkedIn1.png";
import linkedIn2 from "../../../images/graphics/linkedIn2.png";
import linkedIn3 from "../../../images/graphics/linkedIn3.png";
import linkedIn4 from "../../../images/graphics/linkedIn4.png";
import github1 from "../../../images/graphics/github1.png";
import github2 from "../../../images/graphics/github2.png";
import email from "../../../images/graphics/email.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footerMainContainer">
      <p id="footerText">Copyright 2023 Jack Padalino. All rights reserverd.</p>
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
        {/* <a href="mailto: pada0867@gmail.com">
            <img className="icon" src={email} />
          </a> */}
      </div>
    </div>
  );
};

export default Footer;
