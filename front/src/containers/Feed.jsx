import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

import Place from "@material-ui/icons/Place";
import { serviceMethod } from "../api/util";
import { GET_METHOD } from "../constants/STRINGS";
import "../assets/styles/containers/Feed.css";

export default class Feed extends Component {
  state = {
    isLoading: true,
    allies: [
      { id: 1, name: "aliado1", location: { city: { name: "Bogota" } } },
      { id: 2, name: "aliado2", location: { city: { name: "Bogota" } } },
      { id: 3, name: "aliado3", location: { city: { name: "Bogota" } } },
      { id: 4, name: "aliado4", location: { city: { name: "Bogota" } } },
      { id: 6, name: "aliado1", location: { city: { name: "Bogota" } } },
      { id: 7, name: "aliado2", location: { city: { name: "Bogota" } } },
      { id: 8, name: "aliado3", location: { city: { name: "Bogota" } } },
      { id: 9, name: "aliado4", location: { city: { name: "Bogota" } } },
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
    serviceMethod(
      GET_METHOD,
      "http://ec2-18-218-69-56.us-east-2.compute.amazonaws.com:8080/allies",
      {},
      callback
    );
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
            <Card className="card" key={allied.id}>
              <CardActionArea>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUn2cL///8A177n+fai69/K8+w428Ua2MD4/fzZ9vFF3Mfr+vfP9O0A1r3C8emt7eK78Ofz/Ppe38yB5dWZ6dxw4tDi+fSI5tfX9vCw7eNu4tC+8OiQ59lP3cmc6d1t4dDT+thqAAAJ1UlEQVR4nO1d65qqOgyFqgRRvID3PTjv/5anVYReEoozjq3fyfo12+lgVps2q2nKThIGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDD+d4AWxs8Q2qqX4EYlq+rrdHO+XneZ/ORrcz5vptf6UiQd60+FNL+oz6dt2qGSHx76f06W67pIxKeyFHA5a2xuuEguC+uzyepYfCBJKKvNNnXwBZDl7sfpfJeJT+IoB2Rnj9Qda+m36C/S9FR/zpyEZkOwSGcC9tTv0u01+wSKIJp/JIf0APBF/zbN1/GHEMjI8VNYJLAe+n26/YqcovjC1hENhZgNN0gPjQjNggY0E9TovA+JlZg/flxOiN5YxzqMADvE3MmmbqDsXLcWHVlRQlOfDwjNQxMlR8iWjqnzXXNXoNPHJ1fRDWyp/ghEUa+cwJnXEXoqVLad+bp5BDioHx9usm6gWhKqB/Yrx1Ojoyhqy8TJUY/f1ePjZffTTOMgm04tb11GpnHE1bTvUJsGdiM3OT5+OpsM5Cw2OZ7eSsAHOBvGbY+2/ip713385AQ+SMxQenib+X6AadrZFV+iCyPdcrR3GgFUxl7kEI3AKQ2Ztq0QAS06Yp0rYhEBTGc4RbLcCGMhnKEbBMuNFfDxEXt9Ns6ioGgKzR1uk6u3t4QHQqHromkEfmrYnruTq23l7JkOlO2QzbVmdXCKhulbUm25+94ZaTqARnEbfMuo5ySGrAGb4XmgrU7xFJih0CbNohgwBuysxtA+0KAYdsMo1iMJJrrNN1Az9o5M67kX2/wUoNJMHiSYgK2thzdI5bFveQ4YMjLd9U6DCsRJXgx2iDCCS7jdIhTG5KJX0kTfP7U+PfRcSwUeQ87Ek2HK0L61MlrS4dAOiPc8eTCANb1oCWIHRFqPQTXeM94Ba37NyIaZmQIgw6GojW3iYXgB+0tkbXgXR8PyCRX14d9cw4FSY6W5lW57LES6X8rR1X2bBJXR6XlFURQ6KJNNr1+Xt7/Mvhart4eM2yng4ah6FxpTr/xchNhrzJdQHVNtZBfm2SutH4N2adyuC+EYtvmhU1npOrlRkajnv+23n0Hb0S4vpb2kzn9kjZWu2zZCJNPt7575c4De24tjUq4t6562B6xV+SBEZRxxVH/Bg4YVv/NzYS6pP9i5mic2/5Iv64R8YLv1B0COyGZrM+BNn3ugdaazWjuZ/iGd93oIuwLhNpCmQc91uekUOXYq9VY3dXbsiD3PMUSScTbe6aZw8ZqDnQFCD+ShSOWGiUX558R6U6c+aybIXxUakGcefc/07LFfij6DneJFJZiPilPeA5lTTp6jRb9Bu76PYdnH4RI9uMdO/wxVgA1Hg/FbVv2XvS/Jr+31rnJOXR2OEzSxr52B51gD4S42y6bUI9P7xrBf2i/JTY1YHNF1VM8dT9DRAGuxWVbC/LbvvyRlWNILyLvih8LgiNdSgOaFS5yhIUxnXT91z37bKUa/lD50BuiFQlQKRguiG7wJ9CvYsveDvlzzbUdRPcNe8GscqViv5cd3RJPHMK905d6f3uHO/QfoGS41Q0AUN1PIKgptMaV0+T2HviqMR/RyJwBD021ANLN0QSfRep3QkG22cvysFEe/CAdnqH51IY3XFxI66XhxfbxXOyEYulJxINPbh9GnFGYfZgIwzK/PpGTKH1kK+0VAhjJe1OM5dospHg7Rr4JKOzgIwlBGjGpsfVZXWjp6pweFUcgSiKFc3bNx39wpTCoc2u3BKnYLxlDGwFHVS91iOnz++2gNtb0pDshQlWePsPohWcbkGuHi5oJCMpRqdMzAtG39GXponIrT4AzVZs5nANwX0633CxI8LxWaof/Aot07DJz/3lrheYMoGMpVcky5wvAmCC5E7icOhsMKoFWYQ+VQonHr4eNimKanAQVwT0jQB2WeGzeRMFQKgKJQLE+n0/xCPRdJagVnSOQ4p5Srqnw3ZabY42nvQxcYQzB0dccdbi2775lQ4b2V78ru3C0EQ+mPxF20w/dTW6SCuNK3yUCEZgjU6jcrxhoECTGz56rcIzhDtUclzo3O4wS5IFw9P95W5QgYShup1XWEIIcKv9Inw2ZbkxQBQzWPiIuTk+EDfcAltsSp8/E4GMph3GMn3+mwAqAktpJGXaNIGKrhoO4w/yMUgPwLIsJP9QkcDUOluahb3KgCgD0xAZdmj0TEUNWgEa66tQW5nIAnvOnk2/LqmBgqw4+E482NUl8oCImd75zhjouhclWqbmTW5QBoiY2J9tgY0grz9lYM1aKkFMIBu9gXH0OJkhApaS4VAFBzNT/ixxkxMkxIPZ5O9tR6u6EkXpQME1qPEzihDnpDpAxVhttbx9VhO6TtomWojh1GEhw+FIiXoYocvheZKCw9+8iYGSo9TiizDpPadzgXNcPEfVWChRGHyJEzVK5K7AAlZmNu+UbPkNbjk6ock+WIjWGNrYviy40c+Q6bgJDtnT+Oi6E4LbBbiK4e32DDr/bEq8j3Fqp8+IQcJFp6HNXYINS5r1PVFyFDIo3Y3yzEX5LUvobpMxjiWf3HxZ8zmtPIWrH+IQyJMhulx9HDcDkBH2vRxzAk1hKBVZ/eJ+DnMSTigQthyNdPYpimixE3ze3d8mcxVPW+Hm0OR0sMfBrDNF8PlS4gZwEfx1Bt4KmCWYG8iDCNXdM47zBROKGFbPa92Jag22lxMUzw/aArcrQIqOGAbDdiY0jUxOSWyMFKD4kKx+gYUocu86q3T11bQAYa323GxzChMomr1lUBvRI7b4hFN0qGbgHzHepgCT+eohfcSBlS6ZnJXmATMB0KmrEyVHIaO4PC+M2GXxoVK0NMkaGYXD45I+y/Zu/fgIRlWPm+UxTDZ1D/vGVTUAStTfTftJDTkU7sz709BIl2QTpMBe1i7/MySIiyGX+JJohvvXtC1Qj7U/P2O5BHDr/8vSl9wlVBuxUiNkRjRw7fmVqCvMWevp/6YthvCJRB7uLNyIja8De/byMlU+97uwlSiThiTezLZPPhaxm31u7hqn9ZeiGQDt4evd8P98ve3tyNWmGcXaZTN/bXQP6rh7n3StrtnO3gvZEpmzkO+tR13BcB8aMh/dxCfHtvOSOanb7B8acAd5uw+P3LqZFj8fH3cF8OQ3C0vf3bZzq99vYJaMJZVX/7zjFhz0Dy+s27AKW5KvyaoTmEgSagCXPivJQhllsMAv1KzwsZPn136g8B/a2Q1zGcRvP/d9wgRchrGY6qJXov2h3Saxj6dU8QCFVP8gqGMU1AE6rex3vX3gMZD6P+HwIhW//2CetwL/Aehd+7V6wOymAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMxkvwH55mcssiy3gpAAAAAElFTkSuQmCC"
                  alt="muvo"
                />
                <CardContent>
                  <p className="allied">{allied.name}</p>
                  <div className="city-location">
                    <Place style={{ color: "#7C7C7C" }} />
                    <p className="city">{allied.location.city.name}</p>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions className="detail">
                <button
                  className="detail-button"
                >
                  Conoce más
                </button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
