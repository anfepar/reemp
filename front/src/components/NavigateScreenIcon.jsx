import React, { Component } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
const NavigateScreenIcon = ({ direction }) =>
  direction === "Next" ? (
    <NavigateNextIcon style={{ color: "black" }} />
  ) : (
    <NavigateBeforeIcon style={{ color: "black" }} />
  );

export default NavigateScreenIcon;
