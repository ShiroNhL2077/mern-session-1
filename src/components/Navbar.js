import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid px-5 py-1">
        <Link className="navbar-brand col-md-4" to="/#home">
          Team_Mates
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse col-md-6" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
            <li className="nav-item">
              <Link className="nav-link" to="/#home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin#admin">
                AdminDashBoard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
