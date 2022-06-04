import React from "react";

const LeftSideBar = ({ position }) => {
  return (
    <div className={`sidebar ${position == "right" ? "sidebar1" : ""}`}>
      {position == "right" ? (
        <div className="email">
          <a href="mailto:bhuvneshsharma9758@gmail.com">
            bhuvneshsharma9758@gmail.com
          </a>
        </div>
      ) : (
        <ul>
          <li>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      )}
      <div
        style={{ width: 2, height: "6rem", background: "var(--slate)" }}
      ></div>
    </div>
  );
};

export default LeftSideBar;
