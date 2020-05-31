import React, { Component } from "react";

export default class AllyDetail extends Component {
  state = { isLoading: true };
  componentDidMount() {
    //TODO Fetch ally detail data from id
    let id = this.props.match.params.allyId;
    console.log("id ally", id);
    let ally = {
      name: "Nombre Emprendimiento",
      city: "Bogotá D.C",
      description: "Lorem itsum dolor sit amet, Sic Mundus Creatus Est",
    };
  }
  render() {
    return <h1>en Construccion</h1>;
  }
}
