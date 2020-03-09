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
      <h2 className="margin title">{locale[0].country.name}</h2>
      <div className="country-pic bottom-margin cover" style={backgroundImg}>
        {" "}
      </div>
      <div className="bottom-margin flex report">
        <div className="flex column">
          <div className="bottom-margin stat">
            Population: {locale[0].country.population}
          </div>
          <div style={showColor(gdp, 17300)} className="bottom-margin stat">
            GDP Per Capita(USD): ${gdp}
          </div>
          <div
            style={showColor(locale[0].hdi, 0.7)}
            className="bottom-margin stat"
          >
            HDI: {locale[0].hdi}
          </div>
        </div>
        <div className="flex column">
          {" "}
          <div
            style={showColor(locale[0].country.gini, 50)}
            className="bottom-margin stat"
          >
            Gini Coefficient: {locale[0].country.gini}
          </div>
          <div className="bottom-margin stat">
            Biocapacity: {locale[0].totalBiocapacity}
          </div>
          <div
            style={showColor(locale[0].biocapacityReserve, 0)}
            className="bottom-margin stat"
          >
            {" "}
            Biocapacity Deficit/Reserve: {locale[0].biocapacityReserve}
          </div>
        </div>
      </div>

      <Link
        to={`/region/${locale[0].country.region}`}
        className="btn btn-outline-primary back"
      >
        Back to Region
      </Link>
    </div>
  );
}

export default Country;
