import React, { Component } from "react";
import "../assets/styles/containers/NewAlliance.css";

class CardProduct extends Component {
  render() {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default CardProduct;
