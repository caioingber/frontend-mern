import React from "react";
import "./Country.css";
import { Link } from "react-router-dom";

function Country(props) {
  let locale = props.data.filter(
    place => place.country.name === props.match.params.country
  );
  console.log(locale);
  return <div>{locale[0].country.name}</div>;
}

export default Country;
