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
      deplete: false
    };
  }

  //   setSearch = e => {
  //     e.preventDefault();
  //     this.setState({ search: e.target.value });
  //     let values = this.state.receipts;
  //     console.log(this.state.search);
  //     if (e.target.value == "") {
  //       this.setState({ receipts: [receipt1, receipt2, receipt3] });
  //     } else {
  //       values = values.filter(i => {
  //         return i.person.toLowerCase().includes(e.target.value.toLowerCase());
  //       });
  //       console.log(values);
  //       this.setState({ receipts: values });
  //     }
  //   };

  setSearch = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  render() {
    thumbNails = this.props.data.map(place => {
      if (this.props.match.params.region === place.country.region) {
        let backgroundImg = {
          backgroundImage: `url(${place.country.flag})`
        };
        return (
          <Link to={`/country/${place.country.name}`}>
            <div className="tile flex" style={backgroundImg}>
              <h3 className="country-name flex">{place.country.name}</h3>
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
    });

    return (
      <div className="region-container flex column">
        <h1 className="region-name flex">{this.props.match.params.region}</h1>
        <input type="text" onChange={this.setSearch}></input>
        <div className="countries-container">{thumbNails}</div>
      </div>
    );
  }
}

export default Region;
