import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigateScreenIcon from "./NavigateScreenIcon";
import { TextField } from "@material-ui/core";
import "../assets/styles/containers/NewAlliance.css";

class ValuesAlliance extends Component {
  render() {
    return (
      <div>
        <div className="flex center flex-column">
          <div className="flex space-between flex-row ">
            <div className="input">
              <h1>Porcentaje ganancia</h1>
              <div>
                <TextField
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                  id="date"
                />
              </div>
            </div>
            <div className="input">
              <h1>Porcentaje aliado</h1>
              <div>
                <TextField
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                  id="date"
                />
              </div>
            </div>
            <div className="flex space-between flex-row ">
            <div className="input">
              <h1>Cantidad limite</h1>
              <div>
                <TextField
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                  id="date"
                />
              </div>
            </div>
            <div className="input">
              <h1>Descuento</h1>
              <div>
                <TextField
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                  id="date"
                />
              </div>
            </div>
          </div>     
          </div>     
        </div>
      </div>
    );
  }
}

export default ValuesAlliance;
