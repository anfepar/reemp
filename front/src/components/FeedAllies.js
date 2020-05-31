import React, { Component } from "react";
import CardAlly from "./CardAlly";

export default class FeedAllies extends Component {
  state = { isLoading: true, allies: [] };

  componentDidMount() {
    //TODO Get feed allies
    let allies = [
      { id: 1, name: "Nombre Emprendimiento", city: "Bogotá D.C" },
      { id: 2, name: "Nombre Emprendimiento", city: "Bogotá D.C" },
      { id: 3, name: "Nombre Emprendimiento", city: "Bogotá D.C" },
      { id: 4, name: "Nombre Emprendimiento", city: "Bogotá D.C" },
      { id: 5, name: "Nombre Emprendimiento", city: "Bogotá D.C" },
      { id: 6, name: "Nombre Emprendimiento", city: "Bogotá D.C" },
    ];
    this.setState({ isLoading: false, allies });
  }
  render() {
    return this.state.isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <section>
        <h1>Encuentra tu aliado ideal</h1>
        <p>Lorem ipsum</p>
        <article>
          {this.state.allies.map((ally) => {
            console.log("ALLY", ally);
            return <CardAlly ally={ally} />;
          })}
        </article>
      </section>
    );
  }
}
