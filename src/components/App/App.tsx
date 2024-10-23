import { Home, About, DriveIn, Projects, Resume, Contact, Footer } from '..';
import { ReactComponent as Banner } from '../../../images/graphics/banner.svg';
import './App.css';

const App = () => {
  return (
    <>
      <Banner id="appBackground" />
      <div id="componentContainer">
        <Home />
        <About />
        {/* <DriveIn /> */}
        {/* <Projects /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
