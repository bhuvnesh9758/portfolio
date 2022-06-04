import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h2>
        <a href="#">Home</a>
      </h2>
      <div className="navbar-item">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
