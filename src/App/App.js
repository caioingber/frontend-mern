import React, { Component } from "react";
import "./App.css";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
