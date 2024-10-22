import { motion } from 'framer-motion';
import { ReactComponent as Banner } from '../../../images/graphics/banner.svg';
import linkedIn1 from '../../../images/graphics/linkedIn1.png';
import github2 from '../../../images/graphics/github2.png';
import './Home.css';

const Home = () => {
  return (
    <div id="homeMainContainer">
      <Banner />
      <motion.div
        id="homeInfoContainer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="homeInfoText" id="homeName">
          Jack Padalino
        </p>
        <motion.p
          className="homeInfoText"
          id="homeTitle"
          animate={{
            rotate: [0, -45, 360],
          }}
          transition={{ delay: 0.75, duration: 0.75 }}
        >
          Full-Stack Developer
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
              transition={{ delay: 1.75, duration: 0.75 }}
            />
          </a>
          <a href="https://github.com/JackPadalino" target="_blank">
            <motion.img
              className="icon"
              src={github2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.25, duration: 0.75 }}
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
