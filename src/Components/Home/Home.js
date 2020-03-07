import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  let regions = [];
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
          >
            {place.country.region}
          </div>
        </Link>
      );
    }
  });
  return <div className="landing flex column">{list}</div>;
}

export default Home;
