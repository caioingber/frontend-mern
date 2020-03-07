import React from "react";
import "./Region.css";
import { Link } from "react-router-dom";

function Region(props) {
  let thumbNails = props.data.map(place => {
    if (props.match.params.region === place.country.region) {
      let backgroundImg = {
        backgroundImage: `url(${place.country.flag})`
      };
      return (
        <Link to={`/country/${place.country.name}`}>
          <div className="tile flex" style={backgroundImg}>
            <h3 className="country-name flex">{place.country.name}</h3>
            <div className="country-overlay fill"></div>
          </div>
        </Link>
      );
    }
  });

  return (
    <div className="region-container flex column">
      <h1 className="region-name flex">{props.match.params.region}</h1>
      <div className="countries-container">{thumbNails}</div>
    </div>
  );
}

export default Region;