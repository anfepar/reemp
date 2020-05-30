import React from "react";
import "../assets/styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "../containers/LandingPage";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={LandingPage} />
  </BrowserRouter>
);

export default App;
