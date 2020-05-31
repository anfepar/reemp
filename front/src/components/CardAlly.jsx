import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CardAlly extends Component {
  render() {
    let {
      id,
      name,
      city,
      img = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
    } = this.props.ally;
    return (
      <div>
        <img
          alt="Ally's portrait"
          src={img}
          style={{ width: 50, height: 50 }}
        />
        <h3>{name}</h3>
        <p>{city}</p>
        <p>Descripción oferta / producto</p>
        <Link to={`/allies/${id}`}>Conoce más</Link>
      </div>
    );
  }
}
