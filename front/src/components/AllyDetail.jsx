import React, { Component } from "react";
import { connect } from "react-redux";
import { serviceMethod } from "../api/util";
import { GET_METHOD, URLS } from "../constants/STRINGS";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";

class AllyDetail extends Component {
  state = { isLoading: true, ally: this.props.ally, products: [] };
  componentDidMount() {
    console.log(this.props.match.params.id);
    if (!this.state.ally) {
      let callback = {
        onSuccess: (response) => {
          this.setState(
            { ...this.state, isLoading: false, products: response.data },
            () => {}
          );
        },
        onFailed: (error) => {
          console.log(error);
        },
      };
      serviceMethod(
        GET_METHOD,
        `${URLS.BASE}products/${this.props.params.id}`,
        {},
        callback
      );
    }
  }
  render() {
    return (
      <>
        <Link to="/alliance">ALLIANCE</Link>
        {this.state.products.map((product, index) => (
          <div>
            <Card>
              <CardMedia
                image="/static/images/cards/live-from-space.jpg"
                title={product.name}
              />
              <CardContent>
                {product.name}
                {product.description}
              </CardContent>
            </Card>
            <button>Ofertar</button>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ally: state.selectedAlly,
  };
};

export default connect(mapStateToProps, null)(AllyDetail);
