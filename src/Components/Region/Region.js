import React from "react";
import "./Region.css";
import { Link } from "react-router-dom";

function Region(props) {
  let thumbNails = props.data.map(place => {
    if (props.match.params.region === place.country.region) {
      return (
        <div className="tile">
          <img src={place.country.flag} className="flag"></img>
          <h2 className="park-name-tile">{place.country.name}</h2>
        </div>
      );
    }
  });

  return (
    <div className="region-container flex column">
      <h1>{props.match.params.region}</h1>
      <div className="countries-container">{thumbNails}</div>
    </div>
  );
}

export default Region;
