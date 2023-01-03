import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg p-0 text-white">
    <div className="container-fluid bg-dark text-white">
      <a className="navbar-brand text-white" href="#">
        Start Bootstrap
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-white nav-container" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
