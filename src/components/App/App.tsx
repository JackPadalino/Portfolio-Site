import { Home, About, DriveIn, Projects, Resume, Contact, Footer } from '..';
import { ReactComponent as Banner } from '../../../images/graphics/banner.svg';
import './App.css';

const App = () => {
  return (
    <div id="appContainer">
      <img
        src="../../../images/graphics/background3.jpg"
        id="appContainerImg"
      />
      <Home />
      <About />
      <DriveIn />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
