import React, { Component } from "react";
import "./Country.css";
import { Link } from "react-router-dom";

function Country(props) {
  let locale = props.data.filter(
    place => place.country.name === props.match.params.country
  );
  let backgroundImg = {
    backgroundImage: `url(${locale[0].country.flag})`
  };

  let gdp = locale[0].gdpPerCapita;
  gdp = gdp.substring(1);
  gdp = gdp.split(",");
  gdp = gdp.join("");
  gdp = parseFloat(gdp);
  console.log(gdp);

  let color;
  function showColor(property, number) {
    if (property >= number) {
      return (color = {
        color: "green"
      });
    } else {
      return (color = {
        color: "red"
      });
    }
  }

  return (
    <div className="flex column">
      <h2 className="margin">{locale[0].country.name}</h2>
      <div className="country-pic bottom-margin cover" style={backgroundImg}>
        {" "}
        {/* <img src={locale[0].country.flag} className="fill"></img> */}
      </div>
      <div>Population: {locale[0].country.population}</div>
      <div style={showColor(gdp, 17300)}>GDP Per Capita(USD): ${gdp}</div>
      <div style={showColor(locale[0].hdi, 0.7)}>HDI: {locale[0].hdi}</div>
      <div style={showColor(locale[0].country.gini, 50)}>
        Gini Coefficient: {locale[0].country.gini}
      </div>
      <div>Biocapacity: {locale[0].totalBiocapacity}</div>
      <div style={showColor(locale[0].biocapacityReserve, 0)}>
        {" "}
        Biocapacity Deficit/Reserve: {locale[0].biocapacityReserve}
      </div>
      <Link to={`/region/${locale[0].country.region}`} className="back-btn">
        Back to Region
      </Link>
    </div>
  );
}

export default Country;
