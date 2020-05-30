import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";

import { setDatosCompany } from "../actions";
class CompanyForm extends Component {

  onChangeHandler = (event) => {  
    console.log(event.target.name) 
    if(event.target.name){
      setDatosCompany({[event.target.name]: event.target.value})
    }
  };

  render() {
    return (
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
