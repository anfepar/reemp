import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../containers/LandingPage";
import Register from "../containers/Register";
import Feed from "../containers/Feed";
import Header from "../components/Header";
import PreferencesForm from "../components/PreferencesForm";
import AllyDetail from "../components/AllyDetail";
import NewAlliance from "../components/NewAlliance";
import ProductsAlliance from "../components/ProductsAlliance";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/preferences" component={PreferencesForm} />
      <Route exact path="/allies" component={Feed} />
      <Route exact path="/allies/:id" component={AllyDetail} />
      <Route path="/alliance" component={NewAlliance} />
    </Switch>
  </BrowserRouter>
);

export default App;
