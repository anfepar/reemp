import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { connect } from "react-redux";

import { setDatosCompany } from "../actions";
class CompanyForm extends Component {
  state = {
    nombreEmpresa: "",
    NIT: "",
    representanteLegal: "",
    ciudad: "",
    departamento: "",
  };

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.setDatosCompany(this.state);
  };
  render() {
    return (
      <div>
        <div>
          <h1>2. Tu empresa</h1>
          <p>Registra los datos de tu emprendimiento</p>

          <FormControl>
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
          </FormControl>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setDatosCompany,
};

export default connect(null, mapDispatchToProps)(CompanyForm);
