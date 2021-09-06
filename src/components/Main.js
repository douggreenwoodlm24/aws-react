import React, { Component } from "react";
import HotelInfo from "./HotelInfo";
import Welcome from "./Welcome";

class Main extends Component {
  render() {
    return (
      <main id="wrapper">
        <Welcome />
        <HotelInfo />
      </main>
    );
  }
}

export default Main;
