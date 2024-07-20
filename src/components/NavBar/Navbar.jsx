import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="framer">
      <div className="nav ">
        <div className="hamburger_wrap">
          <div className="ham_wrapper">
            <div
              className={`hamburger ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={`nav_item ${isOpen ? "active" : ""}`}>
          <div className="menu_item" style={{ backgroundColor: "#eaeaea" }}>
            <a href="#ABOUTME">INFO</a>
          </div>
          <div className="menu_item" style={{ backgroundColor: "#cdedff" }}>
            <a href="#PROJECT">PROJECT</a>
          </div>
          <div className="menu_item" style={{ backgroundColor: "#fecdff" }}>
            <a href="#SKILLS">SKILLS</a>
          </div>
          <div className="menu_item" style={{ backgroundColor: "#ccff9c" }}>
            <a href="#CONTACT">CONTACT ME</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
