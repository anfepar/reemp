import React, { Component } from "react";
import "../assets/styles/containers/NewAlliance.css";
import CardProduct from "./CardProduct";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateScreenIcon from "./NavigateScreenIcon";

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
  };
  render() {
    return (
      <div className="flex flex-row space-between">
        <div className="flex center flex-column">
          <div className="flex space-between flex-row">
            <h1>DD//MM/AAA</h1>
            <h1>Dasdadsa</h1>
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
