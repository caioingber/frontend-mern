import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header flex">
      <p>Header Text Here</p>
      <div className="home-btn">
        <Link to="/">
          {" "}
          <div className="home-img"></div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
