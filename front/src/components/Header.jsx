import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Toolbar, AppBar, Button } from "@material-ui/core";
import "../assets/styles/components/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={{backgroundColor:"white"}}>
          <Toolbar className="header">
            <img src="" alt="logo" />
            <div>
              <Link to="/register">Register</Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
