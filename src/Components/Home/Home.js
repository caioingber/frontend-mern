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
            className="region flex cover"
            id={place.country.region}
            data={props.data}
            key={place.country.region}
          >
            <h1>{place.country.region}</h1>
          </div>
        </Link>
      );
    } else if (regions.length === 5 && counter < 1) {
      counter++;
      return (
        <Link to={`/region/World`} className="flex column">
          <div
            key={place._id}
            className="region flex cover"
            id="All"
            data={props.data}
            key={place.country.region}
          >
            <h1>All</h1>
          </div>
        </Link>
      );
    } else {
      return null;
    }
  });
  return <div className="landing">{list}</div>;
}

export default Home;
