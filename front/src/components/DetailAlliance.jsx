import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigateScreenIcon from "./NavigateScreenIcon";

class DetailAlliance extends Component {
  render() {
    return (
      <div>
        <h1>5</h1>
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
        <Link to="/alliance/approve">
          <NavigateScreenIcon direction="Next" />
        </Link>
      </div>
    );
  }
}

export default DetailAlliance;
