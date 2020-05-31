import React, { Component } from "react";

import "../assets/styles/containers/NewAlliance.css";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import ProductsAlliance from "./ProductsAlliance";
import ValuesAlliance from "./ValuesAlliance";
import CommentsAlliance from "./CommentsAlliance";
import SendAlliance from "./SendAlliance";
import DetailAlliance from "./DetailAlliance";
import ApproveAlliance from "./ApproveAlliance";

class NewAlliance extends Component {
  render() {
    return (
      <div className="feed">
        <div className="description">
          <h1 className="title">{this.props.title}</h1>
          <div className="flex flex-row flex-start">
            <img src="" alt="Logo empresa" />
            <div className="flex flex-column">
              <h3>Nombre emprendimiento</h3>
              <p>Bogotá D.C</p>
            </div>
          </div>
          {/* <p className="intro">
            Bienvenido, es hora de que explores las grandes posibilidades que
            emprendedores como tu te pueden ofrecer. Conocelos e inicia las
            mejores alianzas.
          </p> */}
        </div>
        <Route exact path="/alliance/products" component={ProductsAlliance} />
        <Route exact path="/alliance/values" component={ValuesAlliance} />
        <Route exact path="/alliance/comments" component={CommentsAlliance} />
        <Route exact path="/alliance/send" component={SendAlliance} />
        <Route exact path="/alliance/detail" component={DetailAlliance} />
        <Route exact path="/alliance/approve" component={ApproveAlliance} />

        {/* <Redirect from="/alliance" to="/alliance/products" exact /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};

export default connect(mapStateToProps, null)(NewAlliance);
