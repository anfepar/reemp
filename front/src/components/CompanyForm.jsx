import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button, TextField, Select,MenuItem } from "@material-ui/core";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { GET_METHOD } from "../constants/STRINGS";
import { serviceMethod } from "../api/util";
import '../assets/styles/components/CompanyForm.css'

import { setDatosCompany, setLocation } from "../actions";
class CompanyForm extends Component {
  state = {    
    isLoading: true,
    countries: [{name:"country1"},{name:"country2"},{name:"country3"},{name:"country4"}],
    cities: [{name:"city1"},{name:"city2"},{name:"city3"},{name:"city4"}],
    sectors:[{name:"sector1"},{name:"sector2"},{name:"sector3"},{name:"sector4"}]
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
      "http://ec2-18-218-69-56.us-east-2.compute.amazonaws.com:8080/sectors",
      {},
      callback
    );
  }

  onChangeHandler = (event,type) => {  
    console.log(type,event.target.value);
    if(event.target.name){
      if(type === "location"){
        this.props.setLocation({[event.target.name]: event.target.value});
      }
      else{
        this.props.setDatosCompany({[event.target.name]: event.target.value})
      }
    }
    
  };
  

  render() {
    return (
      <div className="CompanyForm">
          <p className="title">1. Tu empresa</p>
          <p>Registra los datos de tu emprendimiento</p>
          <form noValidate autoComplete="off">
            <TextField name="name" id="name" onChange={(e)=> this.onChangeHandler(e)} label="Nombre empresa"  variant="outlined" />
            <TextField name="nit" id="NIT" onChange={(e)=> this.onChangeHandler(e)} label="NIT"  variant="outlined"/>
            <TextField name="owner" id="representanteLegal"  onChange={(e)=> this.onChangeHandler(e)} label="Representante Legal" variant="outlined" />
            <Select
              name="country"
              id="demo-simple-select-filled"
              onChange={(e)=> this.onChangeHandler(e,"location") }
            >
              {this.state.countries.map((country,index)=>
                <MenuItem key={country.name}  value={country}>{country.name}</MenuItem>
              )}
            </Select>
            <Select
              name="city"
              id="demo-simple-select-filled"
              onChange={(e)=> this.onChangeHandler(e,"location") }
            >
              {this.state.cities.map((city,index)=>
                <MenuItem key={city.name} value={city}>{city.name}</MenuItem>
              )}
            </Select>
            <Select
              name="sector"
              id="demo-simple-select-filled"
              onChange={(e)=> this.onChangeHandler(e)}
            >
              {this.state.sectors.map((sector,index)=>
                <MenuItem key={sector.name}  value={sector}>{sector.name}</MenuItem>
              )}
            </Select>
          </form>
          <Link to="/preferencias">
          Siguiente
          </Link>
      </div>
    )
   // );
  }
}

const mapDispatchToProps = {
  setDatosCompany,
  setLocation
};

export default connect(null,mapDispatchToProps)(CompanyForm);
