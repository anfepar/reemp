import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigateScreenIcon from "./NavigateScreenIcon";
import "../assets/styles/containers/NewAlliance.css";

class SendAlliance extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center">        
        <p className="mesagge">{"Tu propuesta de alianza será enviada para revisión"}</p>
        <p className="mesagge">{"¡Este es el primer paso para crear grandes cosas!"}</p>
        <button className="product">Enviar</button>
      </div>
    );
  }
}

export default SendAlliance;
