import React, { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setNinetiesMode } from "../../store/viewSlice";
import "./style.css";

const Nav = () => {
  const dispatch = useAppDispatch();
  const ninetiesMode = useAppSelector((state) => state.view.ninetiesMode);

  const handleViewChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setNinetiesMode(true));
  };

  return (
    <>
      <div id="Nav-div">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={handleViewChange}>Go 90's</button>
      </div>
    </>
  );
};

export default Nav;
