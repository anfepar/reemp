import React, { Component } from "react";
import "../assets/styles/containers/NewAlliance.css";
import CardProduct from "./CardProduct";
import {TextField} from '@material-ui/core'
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateScreenIcon from "./NavigateScreenIcon";

class ProductsAlliance extends Component {
  state = {
    products: [
      {
        name: "Product1",
      },
      {
        name: "Product2",
      },
      {
        name: "Product3",
      },
    ],
  };
  render() {
    return (
      <div className="flex flex-row space-between justify-center h-full">
        <div className="flex center flex-column">
          <div className="flex space-between flex-row ">
            <div className="input">
            <h1>Fecha Inicio</h1>
            <div >
              <TextField
              style={{backgroundColor:"white", borderRadius:"10px"}}
                id="date"
                type="date"
                defaultValue="2017-05-24"                
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            </div>
            <div className="input">
            <h1>Fecha Finalización</h1>
            <div>
              <TextField
                style={{backgroundColor:"white",borderRadius:"10px"}}
                id="date"
                type="date"
                defaultValue="2017-05-24"                
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            </div>
            
          </div>
          <div className="flex flex-row space-between">
            {this.state.products.map((product) => {
              return <CardProduct name={product.name} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsAlliance;
