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
import Place from "@material-ui/icons/Place";
import { serviceMethod } from "../api/util";
import {
  GET_METHOD,
  POST_METHOD,
  MOCKED_DATA,
  URLS,
} from "../constants/STRINGS";
import { Link } from "react-router-dom";
class NewAlliance extends Component {
  steps = ["products", "values", "comments", "send", "detail"];
  state = {
    step: 0,
    alliance: {},
    isLoading: true,
  };

  selectLabel() {
    switch (this.steps[this.state.step]) {
      case "products":
        return <ProductsAlliance />;
      case "values":
        return <ValuesAlliance />;
      case "comments":
        return <CommentsAlliance />;
      case "send":
        return <SendAlliance />;
      case "detail":
        return <DetailAlliance />;
      case "approve":
        return <ApproveAlliance />;
      default:
        return <ProductsAlliance />;
    }
  }

  handleChangeStep(direction) {
    let step = this.state.step;
    switch (direction) {
      case "next":
        if (this.state.step + 1 < this.steps.length) step += 1;
        break;
      case "prev":
        if (this.state.step - 1 >= 0) step -= 1;
        break;
      default:
        step = 0;
        break;
    }
    this.setState({ step });
  }

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
      `${URLS.BASE}company/locations/${this.props.selectedAlly.pk}`,
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
          <div className="flex flex-row flex-start ">
            <img src="" alt="Logo empresa" />
            <div className="my-1 bl-1 mx-2"></div>
            <div className=" flex flex-column">
              <h3 className="m-0">{this.props.selectedAlly.fields.name}</h3>
              <div className="flex align-baseline ">
                <Place style={{ color: "#7C7C7C", alignSelf: "center" }} />
                <p className="ubication m-0">Bogotá D.C</p>
              </div>
            </div>
          </div>
        </div>
        <div className="alianza-form">
          <button onClick={(e) => this.handleChangeStep("prev")}>{"<"}</button>
          <div className="flex justify-center">
            {this.selectLabel(this.state.label)}
          </div>
          <button onClick={(e) => this.handleChangeStep("next")}>{">"}</button>
        </div>

        {/* <Redirect from="/alliance" to="/alliance/products" exact /> */}
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
