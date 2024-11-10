import React, { useState } from "react";
import Type from "./Type";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <button className="home-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      <div className="header">
        <h1 className="header-h1">T PAVAN KUMAR</h1>
        <h2 className="header-h2">
          I'm
          <Type />
        </h2>
        <div className={`menu-links ${isOpen ? "open" : ""}`}>
          <Link
            className={`links ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`links ${
                location.pathname === "/about" ? "active" : ""
            }`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`links ${
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
            className={`links ${
                location.pathname === "/projects" ? "active" : ""
            }`}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={`links ${
                location.pathname === "/skills" ? "active" : ""
            }`}
            to="/skills"
          >
            Skills
          </Link>
          <Link
            className="links"
            to="https://drive.google.com/file/d/1OeSnRCtVCuomPdtO69lnIx6EEgZB1PK3/view?usp=drive_link"
          >
            Resume
          </Link>
          <Link
            className={`links ${
                location.pathname === "/contact" ? "active" : ""
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="social-links">
          <Link
            className="social-link"
            to="https://www.linkedin.com/in/pavankumar59/"
          >
            <LinkedInIcon />
          </Link>
          <Link
            className="social-link"
            to="https://github.com/blastgamer59?tab=repositories"
          >
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
