import React, { Component } from "react";
import "./Create.css";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      capital: "",
      region: "",
      population: 0,
      gini: 0,
      hdi: 0,
      gdpPerCapita: 0,
      totalBiocapacity: 0,
      biocapacityReserve: 0
    };
  }

  setInput = e => {
    let place = e.target.placeholder;
    e.preventDefault();
    if (e.target.type === "number") {
      let number = e.target.value;
      number = Number(number);
      this.setState({ [place]: number });
    } else {
      this.setState({ [place]: e.target.value });
    }
    console.log(e.target.value);
  };

  setSelect = e => {
    e.preventDefault();
    this.setState({ region: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="">
        <form className="create flex column">
          <input
            type="text"
            placeholder="name"
            onChange={this.setInput}
          ></input>
          <input
            type="text"
            placeholder="capital"
            onChange={this.setInput}
          ></input>
          <select placeholder="region" onChange={this.setSelect} type="text">
            <option value="" disabled selected hidden>
              Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Europe"> Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
          </select>
          <input
            type="number"
            placeholder="population"
            onChange={this.setInput}
          ></input>
          <input
            type="number"
            placeholder="gini"
            onChange={this.setInput}
          ></input>
          <input
            type="number"
            placeholder="hdi"
            onChange={this.setInput}
          ></input>
          <input
            type="number"
            placeholder="gdpPerCapita"
            onChange={this.setInput}
          ></input>
          <input
            type="number"
            placeholder="totalBiocapacity"
            onChange={this.setInput}
          ></input>
          <input
            type="number"
            placeholder="biocapacityReserve"
            onChange={this.setInput}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Create;
