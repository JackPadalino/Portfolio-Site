import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import me from '../../../images/pictures/me3.jpg';
import './About.css';

const About = () => {
  const meRef = useRef<HTMLImageElement>(null);
  const [aboutMe, setAboutMe] = useState(false);

  // const observerCallback = (
  //   entries: IntersectionObserverEntry[],
  //   observer: IntersectionObserver
  // ) => {
  //   const entry = entries[0];
  //   if (entry.isIntersecting) {
  //     if (entry.target.classList.contains('about_me')) {
  //       setAboutMe(true);
  //     }
  //     observer.unobserve(entry.target);
  //   }
  // };

  // const meOptions = {
  //   root: null,
  //   threshold: 0.8,
  // };

  // useEffect(() => {
  //   const meObserver = new IntersectionObserver(observerCallback, meOptions);
  //   if (meRef.current) {
  //     meObserver.observe(meRef.current as Element);
  //   }
  // }, [observerCallback]);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4, // Percentage of the image visible before triggering (0.1 = 10%)
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, scale: 1, opacity: 1 }); // Start animation when in view
    }
  }, [inView, controls]);

  return (
    <div id="aboutMainContainer">
      <motion.img
        ref={ref}
        src={me}
        id="meImg"
        initial={{ x: -300, scale: 0.8, opacity: 0 }}
        animate={controls}
        transition={{ type: 'spring', duration: 2 }}
      />

      <motion.p
        ref={ref}
        id="aboutMeText"
        initial={{ x: 300, scale: 0.8, opacity: 0 }}
        animate={controls}
        transition={{ type: 'spring', duration: 2 }}
      >
        Pleasure to meet you! I'm Jack, a full stack software engineer eager to
        take on exciting and complex projects alongside a talented and
        supportive team.
      </motion.p>
    </div>
  );
};

export default About;
