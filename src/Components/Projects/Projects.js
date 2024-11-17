import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Projects.css";
import { useState } from "react";
import Projectimage1 from "../../Images/twitterprojecimage.webp";
import Projectimage2 from "../../Images/blogimage.png";
import Projectimage3 from "../../Images/to-dolist.webp";
import Projectimage4 from "../../Images/Dahboardimage.png";
import { CiCircleInfo } from "react-icons/ci";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#010e1b",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const style1 = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#010e1b",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const style2 = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#010e1b",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const style3 = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#010e1b",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const Projects = () => {
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  const handleopen = () => {
    setopen(true);
  };
  const handleclose = () => {
    setopen(false);
  };
  const handleopen1 = () => {
    setopen1(true);
  };
  const handleclose1 = () => {
    setopen1(false);
  };
  const handleopen2 = () => {
    setopen2(true);
  };
  const handleclose2 = () => {
    setopen2(false);
  };
  const handleopen3 = () => {
    setopen3(true);
  };
  const handleclose3 = () => {
    setopen3(false);
  };
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="project-heading">
        <h4 className="project-h4">Projects</h4>
        <div className="project-Line"></div>
      </div>
      <div className="project-details">
        <div className="projectdetails-1">
          <h3 className="projectheading-1">
            Real Time Website Like Twitter-Clone
          </h3>
          <div className="projectimage-1">
            <div class="portfolio-wrap">
              <img
                src={Projectimage1}
                className="projecttwitter"
                alt="project"
              />
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <CiCircleInfo
                    onClick={handleopen}
                    className="project-icon1"
                  />
                </div>
                <Modal
                  open={open}
                  onClose={handleclose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="phone-box" sx={style}>
                    <div className="modal-header">
                      <IconButton onClick={handleclose}>
                        <Tooltip title="Close">
                          <CloseIcon className="modal-close" />
                        </Tooltip>
                      </IconButton>
                    </div>
                    <div className="modal-heading">
                      <h2>Real Time Website Like Twitter-Clone</h2>
                    </div>
                    <div>
                      <ul className="project1-list">
                        <li>
                          Tech Stack: React.js, Node.js, Express.js, MongoDB,
                          CSS
                        </li>
                        <li>
                          GitHub URL:
                          <a
                            href="https://github.com/blastgamer59/Twitter-Clone"
                            className="project-link"
                          >
                            Project Link
                          </a>
                        </li>
                      </ul>
                      <div className="modal-p">
                        <p>
                          Built a real-time social media app using the MERN
                          stack, featuring secure authentication with Firebase
                          API and Responsive design.
                        </p>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </div>

        <div className="projectdetails-1">
          <h3 className="projectheading-2">My Portfolio</h3>
          <div className="projectimage-2">
            <div class="portfolio-wrap">
              <img
                src={Projectimage2}
                className="projectportfolio"
                alt="project"
              />
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <CiCircleInfo
                    onClick={handleopen1}
                    className="project-icon1"
                  />
                </div>
                <Modal
                  open={open1}
                  onClose={handleclose1}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="phone-box" sx={style1}>
                    <div className="modal-header">
                      <IconButton onClick={handleclose1}>
                        <Tooltip title="Close">
                          <CloseIcon className="modal-close" />
                        </Tooltip>
                      </IconButton>
                    </div>
                    <div className="modal-heading">
                      <h2>My Portfolio</h2>
                    </div>
                    <div>
                      <ul className="project1-list">
                        <li>Tech Stack: React.js, CSS</li>
                        <li>
                          GitHub URL:
                          <a
                            href="https://github.com/blastgamer59?tab=repositories"
                            className="project-link"
                          >
                            Project Link
                          </a>
                        </li>
                      </ul>
                      <div className="modal-p">
                        <p>
                          The website is created using React.js, CSS. This
                          website is for sharing my portfoilo in a smart way, it
                          definetly impressive and creative way for sharing your
                          profile.
                        </p>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </div>

        <div className="projectdetails-1">
          <h3 className="projectheading-2">To-Do List Application</h3>
          <div className="projectimage-2">
            <div class="portfolio-wrap">
              <img
                src={Projectimage3}
                className="projectportfolio"
                alt="project"
              />
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <CiCircleInfo
                    onClick={handleopen2}
                    className="project-icon1"
                  />
                </div>
                <Modal
                  open={open2}
                  onClose={handleclose2}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="phone-box" sx={style2}>
                    <div className="modal-header">
                      <IconButton onClick={handleclose2}>
                        <Tooltip title="Close">
                          <CloseIcon className="modal-close" />
                        </Tooltip>
                      </IconButton>
                    </div>
                    <div className="modal-heading">
                      <h2>To-Do List Application</h2>
                    </div>
                    <div>
                      <ul className="project1-list">
                        <li>
                          Tech Stack: React.js, Node.js, Express.js, MongoDB,
                          CSS{" "}
                        </li>
                        <li>
                          GitHub URL:
                          <a
                            href="https://github.com/blastgamer59/To-Do-List"
                            className="project-link"
                          >
                            Project Link
                          </a>
                        </li>
                      </ul>
                      <div className="modal-p">
                        <p>
                          Created a task management app with CRUD operations
                          using React.js and Node.js for efficient user
                          experience. The app allows users to create, read,
                          update, and delete tasks.
                        </p>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-details">
        <div className="projectdetails-1">
          <h3 className="projectheading-1">Twitter-Analyst-Dashboard</h3>
          <div className="projectimage-1">
            <div class="portfolio-wrap">
              <img
                src={Projectimage4}
                className="projecttwitter"
                alt="project"
              />
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <CiCircleInfo
                    onClick={handleopen3}
                    className="project-icon1"
                  />
                </div>
                <Modal
                  open={open3}
                  onClose={handleclose3}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="phone-box" sx={style3}>
                    <div className="modal-header">
                      <IconButton onClick={handleclose3}>
                        <Tooltip title="Close">
                          <CloseIcon className="modal-close" />
                        </Tooltip>
                      </IconButton>
                    </div>
                    <div className="modal-heading">
                      <h2> Twitter-Analyst-Dashboard</h2>
                    </div>
                    <div>
                      <ul className="project1-list">
                        <li>
                          Tech Stack: Data Modeling, Data Visualization,
                          Microsoft Power BI, Sentiment Analysis, Data Analyst,
                          Extract, Transform, Load (ETL), Trend Analysis,
                          Microsoft Excel, Data Cleaning,Dashboard Building,
                          DAX, Microsoft Power Query
                        </li>
                        <li>
                          GitHub URL:
                          <a
                            href="https://github.com/blastgamer59/Twitter-Analyst-Dashboard"
                            className="project-link"
                          >
                            Project Link
                          </a>
                        </li>
                      </ul>
                      <div className="modal-p">
                        <p>
                          Developed a Twitter analytics dashboard using Power
                          BI, integrating the Twitter API for comprehensive data
                          analysis, with a focus on user engagement metrics and
                          trends, and a responsive design for seamless user
                          experience.
                        </p>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
