//import { MouseEvent } from "react";
import { Link } from "react-router-dom";
//import { useAppSelector, useAppDispatch } from "../../store/hooks";
//import { setNinetiesMode } from "../../store/viewSlice";
import "./Nav.css";

const Nav = () => {
  //const dispatch = useAppDispatch();
  //const ninetiesMode = useAppSelector((state) => state.view.ninetiesMode);

  // setting up intersection observer API for sticky nav

  //   const handleViewChange = (e: MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     dispatch(setNinetiesMode(true));
  //   };

  return (
    <div>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/projects">
        Projects
      </Link>
      <Link className="nav-link" to="/resume">
        Resume
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
      {/* <button onClick={handleViewChange}>Go 90's</button> */}
    </div>
  );
};

export default Nav;
