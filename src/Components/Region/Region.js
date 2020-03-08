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
      excess: false,
      deplete: false,
      subs: [],
      excessBtn: "Excess",
      depleteBtn: "Deplete"
    };
  }

  setSearch = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  showExcess = e => {
    if (!this.state.deplete) {
      e.preventDefault();
      if (!this.state.excess) {
        this.setState({ excess: true, excessBtn: "Show All" });
      } else {
        this.setState({ excess: false, excessBtn: "Excess" });
      }
    }
  };

  showDeplete = e => {
    e.preventDefault();
    if (!this.state.excess) {
      if (!this.state.deplete) {
        this.setState({ deplete: true, depleteBtn: "Show All" });
      } else {
        this.setState({ deplete: false, depleteBtn: "Deplete" });
      }
    }
  };

  render() {
    if (this.props.match.params.region === "All") {
      thumbNails = this.state.countries.data.map(place => {
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
      });
    } else {
      thumbNails = this.state.countries.data.map(place => {
        let backgroundImg = {
          backgroundImage: `url(${place.country.flag})`
        };
        if (this.props.match.params.region === place.country.region) {
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
    }

    thumbNails = thumbNails.filter(thumb => {
      if (thumb) {
        let result = thumb.props.children.props.children[0].props.children;
        if (result.startsWith(this.state.search)) {
          return thumb;
        }
      }
    });
    if (this.state.excess === true) {
      thumbNails = thumbNails.filter(thumb => {
        let result = thumb.props.children.props.children[1].props.children;
        if (result > 0) {
          return thumb;
        }
      });
    }
    if (this.state.deplete === true) {
      thumbNails = thumbNails.filter(thumb => {
        let result = thumb.props.children.props.children[1].props.children;
        if (result < 0) {
          return thumb;
        }
      });
    }

    return (
      <div className="region-container flex column">
        <h1 className="region-name flex">{this.props.match.params.region}</h1>
        <div className="results">{thumbNails.length} Results</div>
        <button onClick={this.showExcess}>{this.state.excessBtn}</button>
        <input type="text" onChange={this.setSearch}></input>
        <button onClick={this.showDeplete}>{this.state.depleteBtn}</button>
        <div className="countries-container">{thumbNails}</div>
      </div>
    );
  }
}

export default Region;
