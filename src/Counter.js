import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  state = {
    number: 0,
    color : "yellow"
  }

  increaseNumber = () => {
    if (this.state.number < 10) {
      this.setState((prevState) => ({
        number: prevState.number + 1,
        color: this.getRandomColor()
      }));
    }
  };
  decreaseNumber = () => {
    if (this.state.number > -10) {
      this.setState((prevState) => ({
        number: prevState.number - 1,
        color: this.getRandomColor()
      }))
      
    }
  }
  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  render() {
    const { number } = this.state;
    return (
      <div className="wrapper" style={{ backgroundColor: this.state.color }}>
        <div className="block decrease" onClick={this.decreaseNumber}>
          <p>-</p>
        </div>
        <p>{number}</p>
        <div className="block increase" onClick={this.increaseNumber}>
          <p>+</p>
        </div>
      </div>
    )
  }
}