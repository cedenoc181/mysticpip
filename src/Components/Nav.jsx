import React from "react";
import "./Nav.css";
import logo from "./images/MajesticPips-logo-2.png";
import "bootstrap/js/src/collapse.js";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    // BS navbar
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <div className="navbar-brand">
            <img
              src={logo}
              className="logo"
              alt="logo"
              onClick={() => {
                navigate("/home");
              }}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-dark"></span>
          </button>
          <div
            className="nav-links collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav m-auto">
              <a className="nav-link active" aria-current="page" href="#home" onClick={() => {
                navigate("/home");
              }}>
                Home
              </a>
              <a className="nav-link" href="#resources" onClick={() => {
                navigate("/resources");
              }}>
                Resources
              </a>
              <a className="nav-link" href="#mission" onClick={() => {
                navigate("/mission");
              }}>
                Mission
              </a>
            </div>
            <button type="button" className="discord-btn btn">
              <a className="discord-link" href="#about" onClick={() => {
                navigate("/about");
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
