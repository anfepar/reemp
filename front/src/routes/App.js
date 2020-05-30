import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../containers/LandingPage";
import NotFound from "../containers/NotFound";
import Register from "../containers/Register";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="/empresa" component={FormCompany} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
