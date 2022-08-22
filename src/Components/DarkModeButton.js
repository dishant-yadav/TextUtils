import React from "react";
import "./stylesheets/DarkMode.css";
import PropTypes from "prop-types";

const DarkModeButton = (props) => {
  const btn = document.getElementById("dark-mode");
  const body = document.querySelector("body");
  function handleMode() {
    if (btn.checked) {
      body.style.background = "white";
    } else {
      body.style.background = "black";
    }
  }
  return (
    <div className="switch">
      <input type="checkbox" id="dark-mode" className="btn" />
      <label htmlFor="dark-mode" className="label" onClick={handleMode}>
        <div className="circle"></div>
      </label>
    </div>
  );
};

DarkModeButton.propTypes = {};

DarkModeButton.defaultProps = {};

export default DarkModeButton;
