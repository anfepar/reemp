import React, { Component } from "react";
import "../assets/styles/containers/NewAlliance.css";
import CardProduct from "./CardProduct";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateScreenIcon from "./NavigateScreenIcon";
import { TextField } from "@material-ui/core";

class ProductsAlliance extends Component {
  state = {
    products: [
      {
        name: "PRUEBA",
      },
      {
        name: "PRUEBA",
      },
      {
        name: "PRUEBA",
      },
    ],
    startDate: "",
    endDate: "",
  };

  onchangeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
    console.log("PRESIONADO");
  };
  render() {
    return (
      <div className="flex flex-row space-between">
        <div className="flex center flex-column">
          <div className="flex space-between flex-row">
            <TextField
              id="startDate"
              label="Fecha Inicio"
              name="startDate"
              type="date"
              onChange={this.onchangeHandler}
              value={this.state.startDate}
            />
            <TextField
              id="endDate"
              label="Fecha Finalización"
              name="endDate"
              type="date"
              onChange={this.onchangeHandler}
              value={this.state.endDate}
            />
            {/* <div>
              <label for="startDate">Fecha Inicio</label>
              <input type="date" id="startDate" name="startDate" />
            </div>
            <div>
              <label for="endDate">Fecha Finalizacion</label>
              <input type="date" id="endDate" name="endDate" />
            </div> */}
          </div>
          <div className="flex flex-row space-between">
            {this.state.products.map((product) => {
              console.log(product);
              return <CardProduct name={product.name} />;
            })}
          </div>
        </div>
        <Link to="/alliance/values">
          <NavigateScreenIcon direction="Next" />
        </Link>
      </div>
    );
  }
}

export default ProductsAlliance;
