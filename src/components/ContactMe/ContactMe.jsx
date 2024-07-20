import React from "react";
import "./ContactMe.css";
import { contactGif } from "../../assets/contact_me.gif";
const ContactMe = () => {
  return (
    <div id="CONTACT" className="contact_me">
      <div className="contact_me_wrap">
        <div className="contact_me_text">
          <h3>👋 LET'S GET IN TOUCH!</h3>
        </div>
        <div className="contact_me_details">
          <div className="contact_me_gif">
            <img src={contactGif} alt="" />
          </div>
          <div className="contact_me_email">
            <h3>
              Connect with me for job opportunities at
              <a href="mailto:prathamranjan3@gmail.com">
                prathamranjan3@gmail.com
              </a>
              or on
              <a href="https://www.linkedin.com/in/pratham-ranjan-singh-1068611b8/">
                LinkedIn
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
