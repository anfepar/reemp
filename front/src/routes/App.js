import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../containers/LandingPage";
import Register from "../containers/Register";
import Feed from "../containers/Feed";
import Header from "../components/Header";
import PreferencesForm from "../components/PreferencesForm";

const App = () => (
  <BrowserRouter>
    <Header/> 
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="/preferencias" component={PreferencesForm} />
      <Route path="/feed" component={Feed} />
    </Switch>
  </BrowserRouter>
);

export default App;
