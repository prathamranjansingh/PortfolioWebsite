import React from "react";
import mySvg from "../../assets/svgexport-2.svg";
import profileGIF from "../../assets/coder.gif";
import projectGIF from "../../assets/coder2.gif";
import "./HeroSection.css";
import arrow from "../../assets/arrow.svg";
import ContactMe from "../ContactMe/ContactMe";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_wrap">
          <div id="ABOUTME" className="hero_left">
            <div className="name_container">
              <div className="svg_container">
                <img src={mySvg} />
              </div>
              <div className="name">
                <h3>Pratham</h3>
              </div>
            </div>
            <div className="about_container">
              <div className="about_text">
                <p>Hello!</p>
                <p>
                  Over the years of designing, I have honed my skills as a
                  well-rounded designer, confidently navigating every aspect of
                  the digital product creation process, from start to finish.
                </p>
                <p>
                  Over the years of designing, I have honed my skills as a
                  well-rounded designer, confidently navigating every aspect of
                  the digital product creation process, from start to finish.
                </p>
              </div>
              <div className="about_img">
                <img src={profileGIF} />
              </div>
            </div>
          </div>

          <div id="SKILLS" className="hero_right">
            <div className="skills_container">
              <div className="skill_title">
                <h3>Skills</h3>
              </div>
              <div className="skill_box">
                <div className="skill_nos">
                  <div className="skills_heading">
                    <div className="programming_lang">
                      <h2>Languages</h2>
                    </div>
                  </div>
                  <div className="skills_ik">
                    <div className="cpp">
                      <p>C++</p>
                    </div>
                    <div className="cpp">
                      <p>Java</p>
                    </div>
                    <div className="cpp">
                      <p>C</p>
                    </div>
                    <div className="cpp">
                      <p>JavaScript</p>
                    </div>
                  </div>
                </div>
                <div className="skill_nos">
                  <div className="skills_heading">
                    <div className="programming_lang">
                      <h2>Frontend</h2>
                    </div>
                  </div>
                  <div className="skills_ik">
                    <div className="cpp">
                      <p>ReactJS</p>
                    </div>
                    <div className="cpp">
                      <p>HTML</p>
                    </div>
                    <div className="cpp">
                      <p>CSS</p>
                    </div>
                    <div className="cpp">
                      <p>Tailwind</p>
                    </div>
                  </div>
                </div>
                <div className="skill_nos">
                  <div className="skills_heading">
                    <div className="programming_lang">
                      <h2>Backend</h2>
                    </div>
                  </div>
                  <div className="skills_ik">
                    <div className="cpp">
                      <p>Node.js</p>
                    </div>
                    <div className="cpp">
                      <p>Express.js</p>
                    </div>
                    <div className="cpp">
                      <p>MongoDB</p>
                    </div>
                    <div className="cpp">
                      <p>SQL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="showcase">
        <div className="showcase_wrap">
          <div className="showcase_text">
            <h3>Minor Projects Gallery 📸</h3>
          </div>
          <div className="showcase_img"></div>
        </div>
      </div>

      <div id="PROJECT" className="project_title">
        <div className="project_heading">
          <h3>Personal projects</h3>
        </div>
        <div className="project_description">
          <div className="project_image">
            <img src={projectGIF} alt="" />
          </div>
          <div className="project_para">
            <p>
              Here are some of my personal projects that showcase my curiosity
              and enthusiasm. Each project reflects my passion for learning and
              creativity. I’m excited to share them with you and hope you find
              them interesting and inspiring!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
