import linkedIn1 from '../../../images/graphics/linkedIn1.png';
import github2 from '../../../images/graphics/github2.png';
import './Footer.css';

const Footer = () => {
  return (
    <div id="footerMainContainer">
      <p id="footerText">Copyright 2023 Jack Padalino. All rights reserverd.</p>
      {/* <div id="iconsDiv">
        <a
          href="https://www.linkedin.com/in/jack-padalino-5b743826/"
          target="_blank"
        >
          <img className="icon" src={linkedIn1} />
        </a>
        <a href="https://github.com/JackPadalino" target="_blank">
          <img className="icon" src={github2} />
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
