import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer fill flex">
      <span>A Site By </span>{" "}
      <a
        href="https://caioingber.github.io/"
        target="_blank"
        className="author"
      >
        Caio Ingber
      </a>
    </div>
  );
}

export default Footer;
