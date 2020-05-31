import React, { Component } from "react";

export default class CardItem extends Component {
  state = { isClicked: false };
  render() {
    return (
      <button
        onClick={(e) => {
          this.props.onClick(e, this.props.object, this.state.isClicked, () => {
            this.setState({ isClicked: !this.state.isClicked });
          });
        }}
      >
        {this.props.object.name}
      </button>
    );
  }
}
