import React from "react";
import "./Work.css";
import Navbar from "../Navbar/Navbar";
import { FaBriefcase } from "react-icons/fa";
const Work = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="skill-heading">
        <h4 className="skill-h4">WorkExperience</h4>
        <div className="work-Line"></div>
      </div>
      <div className="work-boxes">
        <div className="workbox-1">
          <FaBriefcase className="contactbox1-icon" />
          <h3 className="workbox1-h3">
            Web Development Intern - Null Class EDTECH Private Limited
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            September 2024 – October 2024
          </h3>
          <ul className="work-list">
            <li>
              Successfully built a Twitter-like social media platform using the
              MERN stack (MongoDB, Express.js, React.js, Node.js) at NullClass,
              showcasing expertise in full-stack development and modern web
              technologies.
            </li>
            <li>
              Integrated Firebase API to implement robust user authentication
              features, including Google and phone-based login, enhancing
              security and user experience.
            </li>
            <li>
              Developed real-time features for seamless user interactions and
              ensured responsive design for optimal performance across devices,
              adhering to best practices in Front-End and Back-End development.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Work;
