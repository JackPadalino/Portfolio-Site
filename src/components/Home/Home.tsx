import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as Banner } from '../../../images/graphics/banner.svg';
import { useInView } from 'react-intersection-observer';
import { AppContext, AppContextType } from '../../context';
import linkedIn1 from '../../../images/graphics/linkedIn1.png';
import github2 from '../../../images/graphics/github2.png';
import './Home.css';

const Home = () => {
  const { setShowNav } = useContext(AppContext) as AppContextType;
  const nameArr = [
    'J',
    'a',
    'c',
    'k',
    ' ',
    'P',
    'a',
    'd',
    'a',
    'l',
    'i',
    'n',
    'o',
  ];

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const letterVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // generate an array of random delays for the homeName text
  const randomDelays = Array.from(
    { length: nameArr.length },
    () => Math.random() * 3
  );

  // prevent scrolling until opening animations are complete
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    if (isAnimating) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }
  }, [isAnimating]);

  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.1, // Percentage of the image visible before triggering (0.1 = 10%)
  });

  useEffect(() => {
    setShowNav(!inView);
  }, [inView, setShowNav]);

  randomDelays.splice(5, 1, 4);
  return (
    <div id="homeMainContainer" ref={ref}>
      {/* <Banner /> */}
      <div id="homeInfoContainer">
        <motion.div
          id="homeNameContainer"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          {nameArr.map((letter, index) => (
            <motion.p
              className="homeName"
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: randomDelays[index] }} // choose a random delay to apply to each letter
            >
              {letter === ' ' ? '\u00A0' : letter}{' '}
            </motion.p>
          ))}
        </motion.div>
        <motion.p
          className="homeInfoText"
          id="homeTitle"
          animate={{
            rotate: [0, -45, 360],
          }}
          transition={{ delay: 4.1, duration: 1 }}
        >
          Software Engineer
        </motion.p>

        <div id="iconsDiv">
          <a
            href="https://www.linkedin.com/in/jack-padalino-5b743826/"
            target="_blank"
          >
            <motion.img
              className="icon"
              src={linkedIn1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 0.75 }}
            />
          </a>
          <a href="https://github.com/JackPadalino" target="_blank">
            <motion.img
              className="icon"
              src={github2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.75, duration: 0.75 }}
              onAnimationComplete={handleAnimationComplete}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
