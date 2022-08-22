import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer
      style={{
        position: "relative",
        top: "300px",
      }}
    >
      <p
        style={{
          fontWeight: 600,
          fontSize: "20px",
        }}
      >
        Copyright &copy; {today.getFullYear()}
      </p>
      <p>{[1, 2, 3, 4]}</p>
    </footer>
  );
};

export default Footer;
