import React from "react";
import { Link } from "react-router-dom";
import "./FourOhFour.css";

function FourOhFour() {
  let backgroundImg = {
    backgroundImage: `url('../../Images/404.jpeg')`
  };
  return (
    <div className="cover fill four">
      <Link to="/">
        <h3>Go Back to Home</h3>
      </Link>
    </div>
  );
}

export default FourOhFour;
