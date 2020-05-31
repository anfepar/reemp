import React, { Component } from "react";

import "../assets/styles/containers/NewAlliance.css";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import { ProductsAlliance } from "./ProductsAlliance";
import { ValuesAlliance } from "./ValuesAlliance";
import { CommentsAlliance } from "./CommentsAlliance";
import { SendAlliance } from "./SendAlliance";
import { DetailAlliance } from "./DetailAlliance";
import { ApproveAlliance } from "./ApproveAlliance";
import { serviceMethod } from "../api/util";
import {
  GET_METHOD,
  POST_METHOD,
  MOCKED_DATA,
  URLS,
} from "../constants/STRINGS";
import { Link } from "react-router-dom";

class NewAlliance extends Component {
  state = {
    isLoading: true,
    alliance: {},
  };
  componentDidMount() {
    console.log("selected ally", this.props);
    let callback = {
      onSuccess: (response) => {
        console.log("response,", response);
        console.log("response.data[0]", response.data[0]);

        this.setState(
          {
            isLoading: false,
            alliance: { city: response.data[0].city },
          },
          () => {
            console.log(this.state);
          }
        );
        //TODO REDIRECCCIONAR A PAGINA DE INICIO
        // this.props.loginCompany(true);
        // this.props.history.push("/allies");
        // let location = response.data.find((value) => {
        //   console.log("selected ally", this.props.selectedAlly);
        //   return value.company === this.props.selectedAlly.id;
        // });

        // console.log("LOCATION ENCONTRADA", location);
        // this.handlePostRequests(response.data.id);
      },
      onFailed: (error) => {
        console.log(error);
      },
    };
    // let company = this.props.company;
    // console.log(company);
    serviceMethod(
      GET_METHOD,
      `${URLS.BASE}company/locations/${this.props.selectedAlly.id}`,
      {},
      callback
    );
  }
  render() {
    return this.state.isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <div className="feed">
        <div className="description">
          <h1 className="title">{this.props.title}</h1>
          <div className="flex flex-row flex-start">
            <img src="" alt="Logo empresa" />
            <div className="flex flex-column">
              <h3>{this.props.selectedAlly.name}</h3>
              <p>{this.state.alliance.city}</p>
            </div>
          </div>
        </div>
        <Route exact path="/alliance/products" component={ProductsAlliance} />
        <Route exact path="/alliance/values" component={ValuesAlliance} />
        <Route exact path="/alliance/comments" component={CommentsAlliance} />
        <Route exact path="/alliance/send" component={SendAlliance} />
        <Route exact path="/alliance/detail" component={DetailAlliance} />
        <Route exact path="/alliance/approve" component={ApproveAlliance} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
    selectedAlly: state.selectedAlly,
  };
};

export default connect(mapStateToProps, null)(NewAlliance);
