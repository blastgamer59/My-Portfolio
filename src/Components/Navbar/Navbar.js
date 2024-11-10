import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-h1">
          <h1>T PAVAN KUMAR</h1>
          <button className="navbar-toggle" onClick={toggleNavbar}>
            ☰
          </button>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`nav-link ${
              location.pathname === "/education" ? "active" : ""
            }`}
            to="/education"
          >
            Education
          </Link>
          <Link
            className={`links ${
                location.pathname === "/work" ? "active" : ""
            }`}
            to="/work"
          >
            WorkExperience
          </Link>
          <Link
            className={`nav-link ${
              location.pathname === "/projects" ? "active" : ""
            }`}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={`nav-link ${
              location.pathname === "/skills" ? "active" : ""
            }`}
            to="/skills"
          >
            Skills
          </Link>
          <Link
            className="nav-link"
            to="https://drive.google.com/file/d/1OeSnRCtVCuomPdtO69lnIx6EEgZB1PK3/view?usp=drive_link"
          >
            Resume
          </Link>
          <Link
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
