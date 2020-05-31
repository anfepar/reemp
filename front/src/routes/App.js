import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../containers/LandingPage";
import Register from "../containers/Register";
import Header from "../components/Header";
import PreferencesForm from "../components/PreferencesForm";
import FeedAllies from "../components/FeedAllies";
import AllyDetail from "../components/AllyDetail";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="/preferences" component={PreferencesForm} />
      <Route path="/feed" component={FeedAllies} />
      <Route path="/allies/:allyId" component={AllyDetail} />
    </Switch>
  </BrowserRouter>
);

export default App;
