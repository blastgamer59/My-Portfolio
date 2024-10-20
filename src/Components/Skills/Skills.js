import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Skills.css";
import Pythonimage from "../../Images/pthonimage.jpg";
import HTMLimage from "../../Images/html.png";
import CSSimage from "../../Images/cssimage.png";
import Javascriptimage from "../../Images/javascriptimage.png";
import Mongodbimage from "../../Images/mongodb.webp";
import MYSQLimage from "../../Images/sql.png";
import Reactimage from "../../Images/reactimage.png";
import Nodeimage from "../../Images/nodejsimage.png";
import Pandaimage from "../../Images/pandaimage.png";
import Numpyimage from "../../Images/numpyimage.png";
import Matplotlib from "../../Images/matplotlib.jpeg";
import Expressimage from "../../Images/expressimage.png";
import Powerbi from "../../Images/powerbiimage.png";
import Excelimage from "../../Images/excelimage.png";
import Wordimage from "../../Images/wordiage.webp";
import Powerpoint from "../../Images/powerpoint.png";
import Visual from "../../Images/vscode2.png";
import Gitimage from "../../Images/gitimage.png";
const Skills = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="skill-heading">
        <h4 className="skill-h4">Skills</h4>
        <div className="skill-Line"></div>
      </div>
      <div className="skills">
        <div className="skill-landata">
          <h4 className="skills-h4">Languages & Data Base</h4>
          <div className="images">
            <div>
              <img className="pythonimage" src={Pythonimage} alt="" />
            </div>
            <div>
              <img className="htmlimage" src={HTMLimage} alt="" />
            </div>
            <div>
              <img className="cssimage" src={CSSimage} alt="" />
            </div>
            <div>
              <img className="javascriptimage" src={Javascriptimage} alt="" />
            </div>
            <div>
              <img className="javascriptimage" src={Mongodbimage} alt="" />
            </div>
            <div>
              <img className="javascriptimage" src={MYSQLimage} alt="" />
            </div>
          </div>
        </div>

        <div className="skill-frame">
          <h4 className="skills-h4">Frameworks & Server</h4>
          <div className="images">
            <div>
              <img className="reactimage" src={Reactimage} alt="" />
            </div>
            <div>
              <img className="nodeimage" src={Nodeimage} alt="" />
            </div>
            <div>
              <img className="pandaimage" src={Pandaimage} alt="" />
            </div>
            <div>
              <img className="javascriptimage" src={Numpyimage} alt="" />
            </div>
            <div>
              <img className="javascriptimage" src={Matplotlib} alt="" />
            </div>
            <div>
              <img className="javascriptimage" src={Expressimage} alt="" />
            </div>
            <div>
              <img className="javascriptimage" src={Powerbi} alt="" />
            </div>
          </div>
        </div>

        <div className="skill-others">
          <h4 className="skills-h4">Tools & Others</h4>
          <div className="images">
            <div>
              <img className="visualimage" src={Visual} alt="" />
            </div>
            <div>
              <img className="gitimage" src={Gitimage} alt="" />
            </div>
            <div>
              <img className="reactimage" src={Excelimage} alt="" />
            </div>
            <div>
              <img className="reactimage" src={Wordimage} alt="" />
            </div>
            <div>
              <img className="reactimage" src={Powerpoint} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
