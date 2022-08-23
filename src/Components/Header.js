import React from "react";
import PropTypes from "prop-types";
import "./stylesheets/header.css";

const Header = (props) => {
  return (
    <header>
      <h2>&nsbp</h2>
      <h1>{props.title}</h1>
      <button
        id="darkBtn"
        className="btn btn-primary text"
        onClick={props.btnFunction}
      >
        Enable Dark Mode
      </button>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnFunction: PropTypes.func,
};
Header.defaultProps = {
  title: "Enter your text here",
};

export default Header;
