import React, { Component } from "react";
import "./App.css";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import { Route, Link, Switch } from "react-router-dom";
import Region from "../Components/Region/Region";
import Country from "../Components/Country/Country";
import FourOhFour from "../Components/FourOhFour/FourOhFour";
import Create from "../Components/Create/Create";

let localUrl = "http://localhost:3000/";
let deployedUrl = "https://country-ecofootprint-api.herokuapp.com/";

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
      })
      .catch(err => {
        fetch(deployedUrl)
          .then(res => {
            return res.json();
          })
          .then(countries => {
            console.log(countries);
            this.setState({ data: countries, loading: true });
          })
          .catch(err => console.log(err));
      });
  }

  render() {
    if (!this.state.loading) {
      return (
        <div>
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
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
              <Route path="/country/new" render={() => <Create />}></Route>
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
              <Route component={FourOhFour} />
            </Switch>
          </main>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
