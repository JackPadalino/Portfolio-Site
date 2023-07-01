import { Routes, Route, Navigate } from "react-router-dom";
import { App, Home, Projects, Resume, Contact, Error } from "..";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
