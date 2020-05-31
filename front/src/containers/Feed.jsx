import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Place from "@material-ui/icons/Place";
import { serviceMethod } from "../api/util";
import { GET_METHOD, URLS } from "../constants/STRINGS";
import "../assets/styles/containers/Feed.css";

export default class Feed extends Component {
  state = {
    isLoading: true,
    allies: [
      { id: 1, name: "Aliado1", location: { city: { name: "Bogota" } } },
      { id: 2, name: "Aliado2", location: { city: { name: "Bogota" } } },
      { id: 3, name: "Aliado3", location: { city: { name: "Bogota" } } },
      { id: 4, name: "Aliado4", location: { city: { name: "Bogota" } } },
      { id: 6, name: "Aliado1", location: { city: { name: "Bogota" } } },
      { id: 7, name: "Aliado2", location: { city: { name: "Bogota" } } },
      { id: 8, name: "Aliado3", location: { city: { name: "Bogota" } } },
      { id: 9, name: "Aliado4", location: { city: { name: "Bogota" } } },
    ],
  };
  componentDidMount() {
    let callback = {
      onSuccess: (response) => {
        this.setState({ isLoading: false, allies: response.data }, () => {});
      },
      onFailed: (error) => {
        console.log(error);
      },
    };
    serviceMethod(GET_METHOD, `${URLS.BASE}allies`, {}, callback);
  }
  render() {
    return (
      <div className="feed">
        <div className="description">
          <p className="title">¡Encuentra tu aliado ideal!</p>
          <p className="intro">
            Bienvenido, es hora de que explores las grandes posibilidades que
            emprendedores como tu te pueden ofrecer. Conocelos e inicia las
            mejores alianzas.
          </p>
        </div>
        <div className="feed-body">
          {this.state.allies.map((allied, index) => (
            <Card style={{borderRadius: "10px"}}className="card" key={allied.id}>
              <id className="image">
                <img
                  src="data:image/png;base64,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"
                  alt="muvo"
                />
              </id>

              <CardContent>
                <p className="allied">{allied.name}</p>
                <div className="city-location">
                  <Place style={{ color: "#7C7C7C" }} />
                  <p className="city">{allied.location.city.name}</p>
                </div>
              </CardContent>
              <CardActions className="detail">
                <Link className="link" to={`/allies/${allied.id}`}>
                  <button className="detail-button">Conoce más</button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
