import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import linkedIn1 from '../../../images/graphics/linkedIn1.png';
import github2 from '../../../images/graphics/github2.png';
import './nav.css';

const Nav = () => {
  return (
    <motion.div
      id="navMainContainer"
      initial={{ opacity: 0 }}
      exit={{
        opacity: 0,
        x: -100,
        rotate: [0, -45],
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <p id="navTitle">Jack Padalino</p>
      <a
        href="https://www.linkedin.com/in/jack-padalino-5b743826/"
        target="_blank"
      >
        <img className="navIcon" src={linkedIn1} />
      </a>
      <a href="https://github.com/JackPadalino" target="_blank">
        <img className="navIcon" src={github2} />
      </a>
    </motion.div>
  );
};

export default Nav;
