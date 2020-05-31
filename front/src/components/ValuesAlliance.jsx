import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigateScreenIcon from "./NavigateScreenIcon";
import { TextField } from "@material-ui/core";

class ValuesAlliance extends Component {
  state = {
    porcentajeGanancia: 0,
    porcentajeAliado: 0,
    cantidadLimite: 0,
    descuento: 0,
  };

  onchangeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  };
  render() {
    return (
      <div>
        <Link to="/alliance/products">
          <NavigateScreenIcon direction="Before" />
        </Link>
        <div className="flex flex-column">
          <div className="flex flex-row">
            <TextField
              id="porcentajeGanancia"
              label="Porcentaje ganancia"
              name="porcentajeGanancia"
              type="number"
              onChange={this.onchangeHandler}
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              value={this.state.startDate}
            />
            <TextField
              id="porcentajeAliado"
              label="Porcentaje aliado"
              name="porcentajeAliado"
              type="number"
              onChange={this.onchangeHandler}
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              value={this.state.startDate}
            />
          </div>
          <div className="flex flex-row">
            <TextField
              id="cantidadLimite"
              label="Cantidad limite"
              name="cantidadLimite"
              type="number"
              onChange={this.onchangeHandler}
              value={this.state.startDate}
            />
            <TextField
              id="descuento"
              label="Descuento"
              name="descuento"
              type="number"
              onChange={this.onchangeHandler}
              value={this.state.startDate}
            />
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
