import React, { Component } from "react";
import "./App.css";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import { Route, Link } from "react-router-dom";

let localUrl = "http://localhost:3000/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      regions: []
    };
  }

  componentDidMount() {
    fetch(localUrl)
      .then(res => {
        return res.json();
      })
      .then(countries => {
        this.setState({ data: countries, loading: true });
        this.state.data.forEach(place => {
          if (!this.state.regions.includes(place.country.region)) {
            this.state.regions.push(place.country.region);
          }
        });
      });
  }

  render() {
    if (!this.state.loading) {
      return <div>Loading!</div>;
    } else {
      return (
        <div className="App">
          <Header />
          <Route
            path="/"
            render={() => (
              <Home data={this.state.data} regions={this.state.regions} />
            )}
          />
          {/* <Route
            path="/region/:region"
            render={() => (
              <Region data={this.state.data} regions={this.state.regions} />
            )}
          /> */}

          <Footer />
        </div>
      );
    }
  }
}

export default App;
