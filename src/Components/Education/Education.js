import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Education.css";
import Btechimage from "../../Images/btechimage.png";
import Interimage from "../../Images/interimage.png";
import Schoolimage from "../../Images/schoolimage.jpg";
import Awsimage from "../../Images/awsacademy.jpg";
import Geeksterimage from "../../Images/geeksterimage.jpg";
import Greatlearning from "../../Images/greatlearning.jpg";
import Prayugimage from "../../Images/prayug.jpg"
import { IoIosLink } from "react-icons/io";
const Education = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="education">
        <div className="education-heading">
          <h4 className="education-h4">Education</h4>
          <div className="education-Line"></div>
        </div>
      </div>
      <div className="education-details">
        <div className="education-btech">
          <div className="btech-image">
            <img className="btechimage" src={Btechimage} alt="education" />
          </div>
          <div className="btech-details">
            <p className="education-degree">B.Tech. in Data Science</p>
            <p className="education-date">June 2020 - May 2024</p>
            <p className="coursework-title">Relevant Coursework</p>
            <ul className="coursework-list">
              <li>Data Science</li>
              <li>Python Development</li>
              <li>Data Analyst</li>
              <li>Web Development</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>
        </div>
        <div className="education-inter">
          <div className="inter-image">
            <img className="interimage" src={Interimage} alt="education" />
          </div>
          <div className="inter-details">
            <p className="inter-degree">Intermediate in MPC Course</p>
            <p className="inter-date">June 2018 - March 2020</p>
            <p className="inter-title">Relevant Coursework</p>
            <ul className="courseworkinter-list">
              <li>Mathematics</li>
              <li>English (first language)</li>
              <li>EAMCET Traning</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="education-details1">
        <div className="education-btech">
          <div className="btech-image">
            <img className="schoolimage" src={Schoolimage} alt="education" />
          </div>
          <div className="btech-details">
            <p className="education-degree">Primary Studies</p>
            <p className="education-date">April 2018</p>
            <p className="coursework-title">Relevant Coursework</p>
            <ul className="coursework-list">
              <li>Mathematics</li>
              <li>English (first language)</li>
              <li>Remaining Standard Subjects</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="certifications">
        <div className="certifications-heading">
          <h4 className="certifications-h4">Online Cerfications</h4>
          <div className="certifications-Line"></div>
        </div>
        <div className="certificates">
          <div className="certificate-1">
            <div class="portfolio-wrap">
              <img src={Awsimage} className="awsimage" alt="" />
              <div class="portfolio-info">
                <h4>Data Analyst</h4>
                <div class="portfolio-links">
                  <a href="https://drive.google.com/file/d/1Ijn-kenFhs-syLSyoC7fYs9A2rNMkpYG/view?usp=drive_link">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="certificate-2">
            <div class="portfolio-wrap">
              <img src={Geeksterimage} className="geeksterimage" alt="" />
              <div class="portfolio-info">
                <h4>SQL</h4>
                <div class="portfolio-links">
                  <a href="https://drive.google.com/file/d/1DDLxs5bE8dIgg8uccwsnVpup7GJXbEqt/view?usp=drive_link">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="certificate-3">
            <div class="portfolio-wrap">
              <img src={Geeksterimage} className="geeksterimage" alt="" />
              <div class="portfolio-info">
                <h4>HTML & CSS</h4>
                <div class="portfolio-links">
                  <a href="https://drive.google.com/file/d/1a-KdWc9bZZfZQvHsXwAVpuHJyjj_3KtG/view?usp=drive_link">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="certificates">
        <div className="certificate-4">
          <div class="portfolio-wrap">
            <img src={Greatlearning} className="geeksterimage" alt="" />
            <div class="portfolio-info">
              <h4>Python For Data Science</h4>
              <div class="portfolio-links">
                <a href="https://drive.google.com/file/d/1jOvfFIa4eZMGKUcYLT5g1DC3WF3Xl_qa/view?usp=drive_link">
                  <IoIosLink />
                </a>
              </div>
            </div>  
          </div>
        </div>
        <div className="certificate-4">
          <div class="portfolio-wrap">
            <img src={Prayugimage} className="geeksterimage" alt="" />
            <div class="portfolio-info">
              <h4>Data Analyst</h4>
              <div class="portfolio-links">
                <a href="https://drive.google.com/file/d/1rzLB1u9phfz_-dvktqn97FwDHwiKBwaO/view?usp=drive_link">
                  <IoIosLink />
                </a>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
};
export default Education;
