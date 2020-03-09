import React, { Component } from "react";
import "./App.css";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import { Route, Link, Switch } from "react-router-dom";
import Region from "../Components/Region/Region";
import Country from "../Components/Country/Country";

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
        console.log(countries);
        this.setState({ data: countries, loading: true });
        this.state.data.forEach(place => {
          if (!this.state.regions.includes(place.country.region)) {
            this.state.regions.push(place.country.region);
          }
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.loading) {
      return <div>Loading!</div>;
    } else {
      return (
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <Home data={this.state.data} regions={this.state.regions} />
                )}
              />
              <Route
                path="/region/:region"
                render={routerProps => (
                  <Region data={this.state.data} {...routerProps} />
                )}
              />
              <Route
                path="/country/:country"
                render={routerProps => (
                  <Country data={this.state.data} {...routerProps} />
                )}
              />

              {/* <Route component={FourOhFour} /> */}
            </Switch>
          </main>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
