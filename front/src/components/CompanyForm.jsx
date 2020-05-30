import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { GET_METHOD } from "../constants/STRINGS";
import { serviceMethod } from "../api/util";

import { setDatosCompany } from "../actions";
class CompanyForm extends Component {
  state = {
    nombreEmpresa: "",
    NIT: "",
    representanteLegal: "",
    ciudad: "",
    departamento: "",
    isLoading: true,
    departamentos: [],
    ciudades: [],
  };
  componentDidMount() {
    let callback = {
      onSuccess: (response) => {
        console.log(response);
      },
      onFailed: (error) => {
        console.log(error);
      },
    };
    serviceMethod(
      GET_METHOD,
      "http://dummy.restapiexample.com/api/v1/employees",
      {},
      callback
    );
  }

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.setDatosCompany({
      nombreEmpresa: this.state.nombreEmpresa,
      NIT: this.state.NIT,
      representanteLegal: this.state.representanteLegal,
      ciudad: this.state.ciudad,
      departamento: this.state.departamento,
    });
  };
  render() {
    return this.state.isLoading ? (
      <h1>Cargando...</h1>
    ) : (
      <div>
        <div>
          <h1>2. Tu empresa</h1>
          <p>Registra los datos de tu emprendimiento</p>

          {/* <FormControl>
            <InputLabel htmlFor="nombreEmpresa">Nombre empresa</InputLabel>
            <Input
              name="nombreEmpresa"
              id="nombreEmpresa"
              value={this.state.nombreEmpresa}
              onChange={this.onChangeHandler}
            />
            <InputLabel htmlFor="nit">Nit</InputLabel>
            <Input
              name="nit"
              id="nit"
              value={this.state.nit}
              onChange={this.onChangeHandler}
            />
            <InputLabel htmlFor="representanteLegal">
              Representante legal
            </InputLabel>
            <Input
              name="representanteLegal"
              id="representanteLegal"
              value={this.state.representanteLegal}
              onChange={this.onChangeHandler}
            />
            <InputLabel htmlFor="ciudad">Ciudad</InputLabel>
            <Input
              name="ciudad"
              id="ciudad"
              value={this.state.ciudad}
              onChange={this.onChangeHandler}
            />
            <InputLabel htmlFor="departamento">Departamento</InputLabel>
            <Input
              name="departamento"
              id="departamento"
              value={this.state.departamento}
              onChange={this.onChangeHandler}
            />
            <Button onClick={this.onHandleSubmit}>Siguiente</Button>
          </FormControl> */}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setDatosCompany,
};

export default connect(null, mapDispatchToProps)(CompanyForm);
