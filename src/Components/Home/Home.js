import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  let regions = [];
  let counter = 0;
  let list = props.data.map(place => {
    if (!regions.includes(place.country.region)) {
      regions.push(place.country.region);
      return (
        <Link to={`/region/${place.country.region}`} className="flex column">
          <div
            key={place._id}
            className="region flex"
            id={place.country.region}
            data={props.data}
            key={place.country.region}
          >
            {place.country.region}
          </div>
        </Link>
      );
    } else if (regions.length === 5 && counter < 1) {
      counter++;
      return (
        <Link to={`/region/All`} className="flex column">
          <div
            key={place._id}
            className="region flex"
            id={place.country.region}
            data={props.data}
            key={place.country.region}
          >
            All
          </div>
        </Link>
      );
    } else {
      return null;
    }
  });
  return <div className="landing flex column">{list}</div>;
}

export default Home;
