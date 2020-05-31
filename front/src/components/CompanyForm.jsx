import React, { Component } from "react";
import { TextField, Select, MenuItem, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GET_METHOD, MOCKED_DATA, URLS } from "../constants/STRINGS";
import { serviceMethod } from "../api/util";
import "../assets/styles/components/CompanyForm.css";

import { setDatosCompany, setLocation } from "../actions";
class CompanyForm extends Component {
  state = {
    isLoading: true,
    countries: MOCKED_DATA.COUNTRIES,
    cities: MOCKED_DATA.CITIES.COL,
    sectors: [],
  };

  componentDidMount() {
    let callback = {
      onSuccess: (response) => {
        this.setState({ isLoading: false, sectors: response.data }, () => {
        });
      },
      onFailed: (error) => {
        console.log(error);
      },
    };
    serviceMethod(GET_METHOD, `${URLS.BASE}sectors`, {}, callback);
  }

  onChangeHandler = (event, type) => {
    console.log(type, event.target.value);
    if (event.target.name) {
      if (type === "location") {
        this.props.setLocation({ [event.target.name]: event.target.value });
      } else {
        this.props.setDatosCompany({ [event.target.name]: event.target.value });
      }
    }
  };

  render() {
    return this.state.isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <div className="CompanyForm">
        <div className="">
          <h1 className="title">1. Tu empresa</h1>
          <p className="description">Registra los datos de tu emprendimiento</p>
        </div>
        <div className="companyBody">
          <form className="form" noValidate autoComplete="off">
            <div className="input">
              <p>Nombre Empresa</p>
              <input
                name="name"
                id="name"
                onChange={(e) => this.onChangeHandler(e)}
                placeholder="Nombre"
                variant="outlined"
              />
            </div>
            <div className="input">
              <p>Sector</p>
              <Select
                className="select"
                name="sector"
                id="demo-simple-select-filled"
                onChange={(e) => this.onChangeHandler(e)}
              >
                {this.state.sectors.map((sector, index) => (
                  <MenuItem
                    className="menuItem"
                    key={sector.name}
                    value={sector}
                  >
                    <p className="menuItem">{sector.name}</p>
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="input">
              <p>NIT</p>
              <input
                name="nit"
                id="NIT"
                onChange={(e) => this.onChangeHandler(e)}
                placeholder="NIT"
                variant="outlined"
              />
            </div>
            <div className="input">
              <p>Representante Legal</p>
              <input
                name="owner"
                id="representanteLegal"
                onChange={(e) => this.onChangeHandler(e)}
                placeholder="Nombre"
                variant="outlined"
              />
            </div>
            <div className="input">
              <p>País</p>
              <Select
                className="select"
                name="country"
                onChange={(e) => this.onChangeHandler(e, "location")}
              >
                {this.state.countries.map((country, index) => (
                  <MenuItem
                    className="menuItem"
                    key={country.name}
                    value={country}
                  >
                    <p className="menuItem">{country.name}</p>
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="input">
              <p>Ciudad</p>
              <Select
                className="select"
                name="city"
                onChange={(e) => this.onChangeHandler(e, "location")}
              >
                {this.state.cities.map((city, index) => (
                  <MenuItem  key={city.name} value={city}>
                    <p className="menuItem">{city.name}</p>
                  </MenuItem>
                ))}
              </Select>
            </div>
          </form>
        </div>
        <div className="button">
          <Link className="button-link" to="/preferencias">
            <Button
              style={{ width: "327px", height: "51px", backgroundColor: "#219be4",
              color: "white", borderRadius:"10px" }}
              className="button-material"
              variant="contained"
            >
              Siguiente
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setDatosCompany,
  setLocation,
};

export default connect(null, mapDispatchToProps)(CompanyForm);
