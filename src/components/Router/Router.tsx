import { Routes, Route, Navigate } from "react-router-dom";
import { App, Home, Projects, Resume, Contact, Error, Carousel } from "..";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/carousel" element={<Carousel />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
