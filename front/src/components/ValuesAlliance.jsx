import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigateScreenIcon from "./NavigateScreenIcon";

class ValuesAlliance extends Component {
  render() {
    return (
      <div>
        <Link to="/alliance/products">
          <NavigateScreenIcon direction="Before" />
        </Link>
        <div className="flex flex-column">
          <div className="flex flex-row">
            <h1>PRUEBA</h1>
            <h1>PRUEBA</h1>
          </div>
          <div className="flex flex-row">
            <h1>prueba2</h1>
            <h1>prueba2</h1>
          </div>
        </div>
        <Link to="/alliance/comments">
          <NavigateScreenIcon direction="Next" />
        </Link>
      </div>
    );
  }
}

export default ValuesAlliance;
