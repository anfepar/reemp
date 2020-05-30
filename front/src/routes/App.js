import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../containers/LandingPage";
import Register from "../containers/Register";
import CompanyForm from "../components/CompanyForm";
import PreferencesForm from "../components/PreferencesForm";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="/empresa" component={CompanyForm} />
      <Route path="/preferencias" component={PreferencesForm} />
    </Switch>
  </BrowserRouter>
);

export default App;
