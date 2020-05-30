import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../containers/LandingPage";
import Register from "../containers/Register";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;
