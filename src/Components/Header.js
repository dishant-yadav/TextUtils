import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./stylesheets/header.css";

const Header = (props) => {
  const handleClick = () => {
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    body.style.backgroundColor = "white";
    header.style.backgroundColor = "wheat";
    console.log("Clicked dark mode btn");
  };
  const headerStyle = {
    backgroundColor: props.bgColor,
    color: "white",
  };
  return (
    <header style={headerStyle}>
      <h1>{props.title}</h1>
      <button className="btn btn-primary" onClick={handleClick}>Enable Dark Mode</button>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};
Header.defaultProps = {
  title: "Enter your text here",
  bgColor: "red",
};

export default Header;
