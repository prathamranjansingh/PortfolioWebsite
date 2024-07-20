import React from "react";
import "./ProjectGallery.css";
import arrow from "../../assets/arrow.svg";
const ProjectGallery = () => {
  return (
    <div className="projects_gallery">
      <div className="project_gallery_wrap">
        <div className="project1">
          <div className="project1_sno">
            <div className="psno">
              <h3>01</h3>
            </div>
            <div className="arrowLink">
              <a className="arrowWrap" href="">
                <img src={arrow} alt="" />
              </a>
            </div>
          </div>
          <div className="project_name">
            <h4>SecureQuiz WebApp</h4>
          </div>
          <div className="about_project">
            <p>
              I developed a web app that encrypts quizzes and provides teachers
              with an encryption key to securely share the encrypted text. On
              the exam day, the key generates a paper code available for 2
              hours, allowing students to access and answer questions. The app
              uses Auth0 for authentication, MongoDB, React.js, Node.js,
              Express, Tailwind CSS, and various libraries for encryption and
              decryption.
            </p>
          </div>
          <div className="project_ss">
            <img src="src\assets\project1.png" alt="" />
          </div>
        </div>
        <div className="project1 no2">
          <div className="project1_sno">
            <div className="psno">
              <h3>02</h3>
            </div>
            <div className="arrowLink">
              <a className="arrowWrap" href="">
                <img src={arrow} alt="" />
              </a>
            </div>
          </div>
          <div className="project_name">
            <h4> Grocery Delivery WebApp</h4>
          </div>
          <div className="about_project">
            <p>
              I developed a grocery delivery app featuring a dedicated admin
              page where administrators can efficiently manage products and
              update delivery statuses. The app is built with React.js for the
              frontend, providing a responsive user experience, while Node.js
              and Express.js handle backend operations. MongoDB is used for data
              storage, and JWT tokens ensure secure authentication. For payment
              processing, the app integrates with the Stripe API, offering a
              seamless and secure transaction experience.
            </p>
          </div>
          <div className="project_ss">
            <img src="src\assets\project2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
