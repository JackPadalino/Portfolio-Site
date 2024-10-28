import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 }); // start animation when in view
    }
  }, [inView, controls]);

  return (
    <div id="contactMainContainer">
      <motion.p
        ref={ref}
        id="contactMeText"
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        transition={{ type: 'string', duration: 1 }}
      >
        Let's connect to explore how I can bring my passion for innovation and
        tackling complex problems to your team.
      </motion.p>
    </div>
  );
};

export default Contact;
