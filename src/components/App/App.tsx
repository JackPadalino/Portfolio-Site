import {
  Nav,
  Home,
  About,
  DriveIn,
  Projects,
  Resume,
  Contact,
  Footer,
} from "..";
import "./App.css";

const App = () => {
  return (
    <div id="component-container">
      <Nav />
      <Home />
      <About />
      <DriveIn />
      <Projects />
      {/* <Resume />
      <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
