import React, { Component } from "react";
import UserForm from '../components/UserForm';
import CompanyForm from '../components/CompanyForm';
import PreferencesForm from '../components/PreferencesForm';
import Button from '@material-ui/core/Button'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        step: 1,
    }
  }
  render() {
    return (
      <div className="">
        {this.state.step === 1 ? 
          <UserForm/> : this.state.step === 2 ? 
          <CompanyForm/> : this.state.step === 3 ? 
          <PreferencesForm/> : <UserForm/>
        }
        <Button variant="contained" color="primary">
          Continue
        </Button>
      </div>
    );
  }
}
