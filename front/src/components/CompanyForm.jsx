import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button, TextField } from "@material-ui/core";
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
    console.log(event.target.name) 
    if(event.target.name){
      setDatosCompany({[event.target.name]: event.target.value})
    }
  };

  render() {
    return this.state.isLoading ? (
      <h1>Cargando...</h1>
    ) : (
      <div>
          <h1>1. Tu empresa</h1>
          <p>Registra los datos de tu emprendimiento</p>
          <form noValidate autoComplete="off">
            <TextField name="name" id="name" onClick={(e)=> this.onChangeHandler(e)} label="Nombre empresa"  variant="outlined" />
            <TextField name="nit" id="NIT" onClick={(e)=> this.onChangeHandler(e)} label="NIT"  variant="outlined"/>
            <TextField name="admin" id="representanteLegal"  label="Representante Legal" variant="outlined" />
            <TextField name="department" id="departamento" label="Departamento" variant="outlined" />
            <TextField name="city" id="ciudad"   label="Ciudad" variant="outlined" />
            <TextField name="sector" id="sector" label="Sector" variant="outlined" />
          </form>
          <Button>Siguiente</Button>
      </div>
      
    );
  }
}

const mapDispatchToProps = {
  setDatosCompany,
};

export default connect(null, mapDispatchToProps)(CompanyForm);
