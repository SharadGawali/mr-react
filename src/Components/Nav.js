import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            WC-APP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.title}
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dlmode">
                  DL-Mode
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Services
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  title: PropTypes.string,
};

Nav.defaultProps = {
  title: "Set title here",
};
