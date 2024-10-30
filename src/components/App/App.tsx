import { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Home,
  About,
  DriveIn,
  Projects,
  Resume,
  Contact,
  Footer,
  Nav,
} from '..';
import { ReactComponent as Banner } from '../../../images/graphics/banner.svg';
import { AppContext, AppContextType } from '../../context';
import './App.css';

const App = () => {
  const { showNav } = useContext(AppContext) as AppContextType;

  return (
    <>
      <Banner id="appBackground" />
      <AnimatePresence>{showNav && <Nav />}</AnimatePresence>
      <div id="componentContainer">
        <Home />
        <About />
        <Contact />
        {/* <DriveIn /> */}
        {/* <Projects /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
