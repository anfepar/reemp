import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigateScreenIcon from "./NavigateScreenIcon";
import { TextField } from "@material-ui/core";
import "../assets/styles/containers/NewAlliance.css";

class CommentsAlliance extends Component {
  render() {
    return (
        <div className="flex space-between flex-col ">
            <div className="input">
              <h1>Descripción de alianza</h1>
              <div>
                <TextField
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                  id="date"
                />
              </div>
            </div>
            <div className="input">
              <h1>Comentarios</h1>
              <div>
                <TextField
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                  id="date"
                />          
            </div>
          </div> 
      </div>
    );
  }
}

export default CommentsAlliance;
