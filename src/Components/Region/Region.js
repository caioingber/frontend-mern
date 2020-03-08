import React, { Component } from "react";
import "./Region.css";
import { Link } from "react-router-dom";

let thumbNails;

class Region extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: this.props,
      search: "",
      countriesExcess: this.props,
      excess: false,
      deplete: false
    };
  }

  setSearch = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  showExcess = e => {
    e.preventDefault();
    this.setState({ excess: true });
  };

  render() {
    thumbNails = this.state.countries.data.map(place => {
      if (this.props.match.params.region === place.country.region) {
        let backgroundImg = {
          backgroundImage: `url(${place.country.flag})`
        };
        return (
          <Link to={`/country/${place.country.name}`}>
            <div className="tile flex" style={backgroundImg}>
              <h3 className="country-name flex">{place.country.name}</h3>
              <div className="reserve">{place.biocapacityReserve}</div>
              <div className="country-overlay fill"></div>
            </div>
          </Link>
        );
      } else {
        return null;
      }
    });

    thumbNails = thumbNails.filter(thumb => {
      if (thumb) {
        let result = thumb.props.children.props.children[0].props.children;
        if (result.startsWith(this.state.search)) {
          return thumb;
        }
      }
      console.log(this.state.excess);
    });
    if (this.state.excess === true) {
      thumbNails = thumbNails.filter(thumb => {
        let result = thumb.props.children.props.children[1].props.children;
        if (result > 0) {
          return thumb;
        }
      });
    }

    return (
      <div className="region-container flex column">
        <h1 className="region-name flex">{this.props.match.params.region}</h1>
        <button onClick={this.showExcess}>Excess</button>
        <input type="text" onChange={this.setSearch}></input>
        <button>Deplete</button>
        <div className="countries-container">{thumbNails}</div>
      </div>
    );
  }
}

export default Region;
