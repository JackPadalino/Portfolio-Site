import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import "./Nav.css";

const Nav = () => {
  const navVisible = useAppSelector((state) => state.nav.navVisible);

  return (
    <div id="nav-container" className={navVisible ? "" : "nav-invisible"}>
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
    </div>
  );
};

export default Nav;
