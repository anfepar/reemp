import React, { Component } from "react";
import { Toolbar, AppBar } from "@material-ui/core";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <AppBar position="static">
            <Toolbar>
                
            </Toolbar>
        </AppBar>
      </div>
    );
  }
}
