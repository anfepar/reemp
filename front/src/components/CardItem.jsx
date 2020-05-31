import React, { Component } from "react";
import '../assets/styles/components/CardItem.css'

export default class CardItem extends Component {
  state = { isClicked: false };
  render() {
    return (
      <button
        className={!this.state.isClicked?"cardItemSelected" :"cardItem"}
        onClick={(e) => {
          this.props.onClick(e, this.props.object, this.state.isClicked, () => {
            this.setState({ isClicked: !this.state.isClicked });
          });
        }}
      >
        <p className="text">{this.props.object.name}</p>
      </button>
    );
  }
}
