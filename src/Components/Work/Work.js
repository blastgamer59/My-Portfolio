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
              Developed key features for a real-time Twitter-Clone web
              application using the MERN stack, including authentication (Google
              and phone), password reset functionality, and subscription systems
              with Stripe integration.
            </li>
            <li>
              Implemented responsive design, enhancing user experience across
              mobile and desktop platforms.
            </li>
            <li>
              Focused on security and scalability by managing user data with
              MongoDB and utilizing Firebase for authentication, and post the
              tweets with photos, and you can edit the profile like Profile
              image and Cover image and Name, Bio, Location and you can add your
              or any Website Links.{" "}
            </li>
            <li>
              Delivered tasks independently, including payment gateway
              integration, user authentication, and mobile responsiveness.{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Work;
