import React, { Component } from "react";
import STRINGS from "../constants/STRINGS";
import Header from '../components/Header';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header/>
        <p>REEMP</p>
        <p>{STRINGS.LANDING_DESCRIPTION}</p>
      </div>
    );
  }
}
