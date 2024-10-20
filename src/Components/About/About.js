import React from "react";
import Navbar from "../Navbar/Navbar";
import Aboutimage from "../../Images/about.jpg";
import "./About.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { RiGlobalLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { RiBarChartBoxLine } from "react-icons/ri";
import { RiFileList3Line } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
const About = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="about">
        <div className="about-image">
          <img className="image" src={Aboutimage} alt="about" />
        </div>
        <div className="about-content">
          <div className="about-me">
            <h4>ABOUT</h4>
            <div className="Line"></div>
            <p>
              Focused and enthusiastic developer with a keen interest in
              software development, web development, artificial intelligence and
              data analyst. By comprehensive exposure to the underlying concepts
              and applying them vividly to various projects, my love for these
              domains came into being. I am a passionate individual who thrives
              to build and apply algorithms to solve real-world industry
              problems.
            </p>
            <div className="details-1">
              <ChevronRightIcon className="details1-icon" />
              <strong className="strong-1">Birthday:</strong> 2 August 2003
              <ChevronRightIcon className="details2-icon" />
              <strong className="strong-2">Address:</strong>Tenali, Andhra
              Pradesh, 522202
            </div>
            <div className="details-2">
              <ChevronRightIcon className="details3-icon" />
              <strong className="strong-3">Phone:</strong>+91 7793931658
              <ChevronRightIcon className="details4-icon" />
              <strong className="strong-4">Email:</strong>
              talluripavankumar88@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="interests-h4">INTERESTS</h4>
        <div className="Line1"></div>
      </div>
      <div className="interests">
        <div className="interests-1">
          <RiGlobalLine className="interestsicon-1" />
          <p>Software Development</p>
        </div>
        <div className="interests-2">
          <FaDatabase className="interestsicon-2" />
          <p>Machine Learning</p>
        </div>
        <div className="interests-3">
          <FaCamera className="interestsicon-3" />
          <p>Computer Vision</p>
        </div>
        <div className="interests-4">
          <RiEnglishInput className="interestsicon-4" />
          <p>Web Development</p>
        </div>
        <div className="interests-5">
          <FaCode className="interestsicon-5" />
          <p>Software Engineering</p>
        </div>
      </div>
      <div className="interests1">
        <div className="interests-6">
          <RiBarChartBoxLine className="interestsicon-6" />
          <p>Data Structures</p>
        </div>
        <div className="interests-7">
          <RiFileList3Line className="interestsicon-7" />
          <p>Alogorthims</p>
        </div>
        <div className="interests-8">
          <GiArtificialIntelligence className="interestsicon-8" />
          <p>Artificial Intelligence</p>
        </div>
      </div>
    </>
  );
};

export default About;
