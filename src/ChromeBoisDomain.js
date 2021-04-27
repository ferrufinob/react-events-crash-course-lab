import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize,
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove = (event) => {
    let xCoord = event.clientX;
    let yCoord = event.clientY;
    drawChromeBoiAtCoords(xCoord, yCoord);
  };

  handleClick = () => toggleCycling();

  handleKeyPress = (e) => {
    if (e.key === "a") {
      resize("+");
    } else if (e.key === "s") {
      resize("-");
    }
  };

  render() {
    return (
      <canvas
        onKeyPress={this.handleKeyPress}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        width="900"
        height="600"
        tabIndex="0"
      ></canvas>
    );
  }
}
