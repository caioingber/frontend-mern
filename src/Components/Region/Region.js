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
      excessBtn: "Reserve",
      depleteBtn: "Deficit"
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
        this.setState({ excess: false, excessBtn: "Reserve" });
      }
    }
  };

  showDeplete = e => {
    e.preventDefault();
    if (!this.state.excess) {
      if (!this.state.deplete) {
        this.setState({ deplete: true, depleteBtn: "Show All" });
      } else {
        this.setState({ deplete: false, depleteBtn: "Deficit" });
      }
    }
  };

  render() {
    if (this.props.match.params.region === "World") {
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
        result = result[0].toUpperCase() + result.substr(1);
        let word = this.state.search;
        if (word != "") {
          word = word[0].toUpperCase() + word.substr(1);
        }
        if (result.includes(word)) {
          return thumb;
        }
      }
    });
    if (this.state.excess) {
      thumbNails = thumbNails.filter(thumb => {
        let result = thumb.props.children.props.children[1].props.children;
        if (result > 0) {
          return thumb;
        }
      });
    }
    if (this.state.deplete) {
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
        <form className="flex bottom-margin">
          <button onClick={this.showExcess} className="btn btn-success">
            {this.state.excessBtn}
          </button>
          <input
            type="text"
            onChange={this.setSearch}
            placeholder="Search Country"
          ></input>
          <button onClick={this.showDeplete} className="btn btn-danger">
            {this.state.depleteBtn}
          </button>
        </form>
        <div className="countries-container bottom-margin">{thumbNails}</div>
      </div>
    );
  }
}

export default Region;
