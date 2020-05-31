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

class NewAlliance extends Component {
  steps = ["products", "values", "comments", "send", "detail"];
  state = {
    step: 0,
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

  render() {
    return (
      <div className="feed">
        <div className="description">
          <h1 className="title">{this.props.title}</h1>
          <div className="flex flex-row flex-start ">
            <img src="" alt="Logo empresa" />
            <div className="my-1 bl-1 mx-2"></div>
            <div className=" flex flex-column">
              <h3 className="m-0">Nombre emprendimiento</h3>
              <div className="flex align-baseline ">
                <Place style={{ color: "#7C7C7C", alignSelf: "center" }} />
                <p className="ubication m-0">Bogotá D.C</p>
              </div>
            </div>
          </div>
        </div>
        <div className="alianza-form">
          <button onClick={(e) => this.handleChangeStep("prev")}>{"<"}</button>
          <div className="flex justify-center">{this.selectLabel(this.state.label)}</div>
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
  };
};

export default connect(mapStateToProps, null)(NewAlliance);
