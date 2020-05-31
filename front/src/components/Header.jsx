import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Toolbar, AppBar } from "@material-ui/core";
import { connect } from "react-redux";
import Person from "@material-ui/icons/Person";
import "../assets/styles/components/Header.css";

class Header extends Component {
  render() {
    const background = this.props.logged ? "white" : "transparent";
    const actionButton = this.props.logged ? (
      <div className="profile">
        <Person style={{ color: "#4C44B9" }} />
        Mi perfil
      </div>
    ) : (
      "Iniciar Sesión"
    );
    const homeButton = this.props.logged ? "#4C44B9" : "white";
    return (
      <div>
        <AppBar position="static" style={{ background, boxShadow: "none" }}>
          <Toolbar className="header">
            <Link className="first-button" style={{ color: homeButton }} to="/">
              <p>Inicio</p>
            </Link>
            <div className="action-button">
              <Link style={{ textDecoration: "none" }} to="/register">
                {actionButton}
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logged: state.logged,
  };
};

export default connect(mapStateToProps, null)(Header);
