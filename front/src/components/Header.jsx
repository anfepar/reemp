import React, { Component } from "react";
import {Link} from "react-router-dom"
import { Toolbar, AppBar,Button } from "@material-ui/core";
import "../assets/styles/components/Header.css"

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleRegister(e){
    
  }

  render() {
    return (
      <div >
        <AppBar  position="static">
            <Toolbar className="header">
              <img src="" alt="logo"/>
              <div>
                <Link to="/register">
                  Register
                </Link>
                
              </div>
              
            </Toolbar>
        </AppBar>
      </div>
    );
  }
}
