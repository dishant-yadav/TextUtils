import React from "react";
import DarkModeButton from "./DarkModeButton";
import "./stylesheets/header.css";
import PropTypes from "prop-types";

const Header = (props) => {
  const headerStyle = {
    backgroundColor: props.bgColor,
    color: "white",
  };
  return (
    <header className="bg-primary" style={headerStyle}>
      <h1>{props.title}</h1>
      <DarkModeButton />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  mode: PropTypes.string,
};
Header.defaultProps = {
  title: "Enter your text here",
  bgColor: "red",
  mode: "light",
};

export default Header;
