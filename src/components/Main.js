import React, { Component } from "react";
import "../style.css";
import Title from "./Title";
import Clock from "./Clock";

class Main extends Component {
  render() {
    return (
      <div>
        <Title title="The Digital Clock"></Title>
        <Clock clock="Clockdata"></Clock>
      </div>
    );
  }
}

export default Main;
