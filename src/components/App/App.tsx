import { Nav, Home, About, Projects, Resume, Contact } from "..";
import "./App.css";

const App = () => {
  return (
    <div id="component-container">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
