import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header flex">
      <div className="new-country-container">
        <Link to="/country/new" className="new-country-text">
          Create New
        </Link>
      </div>
      <h1>Ecological Footprint Report Card</h1>
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
