import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import { CiLocationOn } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="skill-heading">
        <h4 className="skill-h4">Contact</h4>
        <div className="contact-Line"></div>
      </div>
      <div className="contact-boxes">
        <div className="contactbox-1">
          <CiLocationOn className="contactbox1-icon" />
          <h3 className="contactbox1-h3">My Address</h3>
          <p className="contactbox1-p"> Pandurangapet</p>
          <p className="contactbox1-p">Tenali-522202</p>
          <p className="contactbox1-p">AndhraPradesh</p>
        </div>

        <div className="contactbox-2">
          <IoShareSocial className="contactbox2-icon" />
          <h3 className="contactbox2-h3">Social Profiles</h3>
          <div className="contactsocial-links">
            <Link
              className="contactsocial-link"
              to="https://www.linkedin.com/in/pavankumar59/"
            >
              <LinkedInIcon />
            </Link>
            <Link
              className="contactsocial-link"
              to="https://github.com/blastgamer59?tab=repositories"
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className="contact-boxes">
        <div className="contactbox-1">
          <MdOutlineMail className="contactbox1-icon" />
          <h3 className="contactbox1-h3">Email</h3>
          <p className="contactbox1-p">talluripavankumar88@gmail.com</p>
        </div>

        <div className="contactbox-2">
          <FaPhoneAlt className="contactbox2-icon" />
          <h3 className="contactbox2-h3">Phone number</h3>
          <p className="contactbox1-p">+91 7793931658</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
