import React, { Component } from "react";
import "./Country.css";
import { Link } from "react-router-dom";

function Country(props) {
  let locale = props.data.filter(
    place => place.country.name === props.match.params.country
  );
  const background = {
    backgroundImage: `url${locale[0].country.flag}`
  };

  let color;
  function showColor(property, number) {
    if (property > number) {
      return (color = {
        color: "green"
      });
    } else {
      return (color = {
        color: "red"
      });
    }
  }

  console.log(locale);
  return (
    <div className="flex column">
      <h2>{locale[0].country.name}</h2>
      <div style={background} className="country-pic"></div>
      <li style={showColor(locale[0].hdi, 0.7)}>HDI: {locale[0].hdi}</li>
      <li style={showColor(locale[0].country.gini, 50)}>
        Gini Coefficient: {locale[0].country.gini}
      </li>
      <li style={showColor(locale[0].totalBiocapacity)}>
        Biocapacity: {locale[0].totalBiocapacity}
      </li>
      <li>Biocapacity Reserve: {locale[0].biocapacityReserve}</li>
      <Link to={`/region/${locale[0].country.region}`}>Back to Region</Link>
    </div>
  );
}

export default Country;
