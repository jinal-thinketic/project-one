import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  // switch (props.mode) {
  //   case 1:
  // }
  return (
    <div id="container">
      <nav className={`navbar navbar-expand-lg navbar ${props.mode} `}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/"> */}
          <a className="navbar-brand" href="#">
            Home
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/about"> */}
                <a className="nav-link active" aria-current="page" href="#">
                  {props.title1}
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/"> */}
                <a className="nav-link" href="#">
                  {props.title2}
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <button
              type="button"
              className="btn btn-primary changeColor"
              onClick={() => props.handleChangeColor("blue")}
            ></button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-success changeColor"
              onClick={() => props.handleChangeColor("green")}
            ></button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-warning changeColor"
              onClick={() => props.handleChangeColor("yellow")}
            ></button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger changeColor"
              onClick={() => props.handleChangeColor("red")}
            ></button>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "white" ? "black" : props.mode
            } mx-2`}
          >
            <input
              className="form-check-input"
              onClick={(event) =>
                props.handleChangeColor(
                  event.target.checked ? "black" : "white"
                )
              }
              type="checkbox"
              role="switch"
              id="colorMode"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              enable darkmode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title1: PropTypes.string.isRequired, // props
  title2: PropTypes.string,
};

Navbar.defaultProps = {
  title1: "format", // default props
  title2: "view",
};
