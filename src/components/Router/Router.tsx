import { Routes, Route } from "react-router-dom";
import { Home, Projects, Resume, Contact } from "..";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
