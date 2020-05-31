import React, { Component } from "react";
import { connect } from "react-redux";
import { serviceMethod } from "../api/util";
import { loginCompany } from "../actions";

import {
  GET_METHOD,
  POST_METHOD,
  MOCKED_DATA,
  URLS,
} from "../constants/STRINGS";
import axios from "axios";
import CardItem from "./CardItem";
import "../assets/styles/components/PreferencesForm.css";

class PreferencesForm extends Component {
  state = {
    isLoading: true,
    preferencias: [],
    categories: [],
    sectors: [],
    selectedCategories: [],
    selectedSectors: [],
  };
  componentDidMount() {
    //TODO Get request preferencias
    Promise.all([this.getCategories(), this.getSectors()])
      .then((results) => {
        console.log(results);
        this.setState({
          categories: results[0].data,
          sectors: results[1].data,
          isLoading: false,
        });
      })
      .catch((errors) => {
        console.log(errors);
      });
  }

  getCategories = () => {
    return axios.get(`${URLS.BASE}categories`);
  };

  getSectors = () => {
    return axios.get(`${URLS.BASE}sectors`);
  };

  addLocationData = (id) => {
    console.log("LOCATION PROP", this.props.location);
    return axios.post(`${URLS.BASE}locations/`, {
      country: this.props.location.country.name,
      city: this.props.location.city.name,
      company: id,
    });
  };

  addPreferences = (id) => {
    let listaSolicitudes = [];

    this.state.selectedCategories.forEach((category) => {
      console.log(category, {
        category: category.id,
        company: id,
        sector: null,
      });
      listaSolicitudes = listaSolicitudes.concat([
        axios.post(`${URLS.BASE}preferences/`, {
          category: category.id,
          company: id,
          sector: null,
        }),
      ]);
    });

    this.state.selectedSectors.forEach((sector) => {
      console.log(sector, this.props.company);
      listaSolicitudes = listaSolicitudes.concat([
        axios.post(`${URLS.BASE}preferences/`, {
          sector: sector.id,
          company: id,
          category: null,
        }),
      ]);
    });

    console.log("listadoSolicitudes", listaSolicitudes);

    return listaSolicitudes;

    // console.log("PREFERENCES PROP", {sector:, category, company:})
    // return axios.post(`${URLS.BASE}preferences/`, {})
  };

  handleClickCategory = (e, category, isSelected, callback) => {
    e.preventDefault();
    console.log("CATEGORY SELECTED", category, isSelected);
    let copiaSelectedCategories = [...this.state.selectedCategories];

    if (isSelected) {
      copiaSelectedCategories.splice(
        copiaSelectedCategories.findIndex((value) => {
          return value.id === category.id;
        }),
        1
      );
    } else {
      copiaSelectedCategories = copiaSelectedCategories.concat([category]);
    }
    this.setState({ selectedCategories: copiaSelectedCategories }, () => {
      console.log("SELECTED CATEGORIES", this.state.selectedCategories);
    });
    callback();
  };

  handleClickSector = (e, sector, isSelected, callback) => {
    e.preventDefault();
    console.log("SECTOR SELECTED", sector, isSelected);

    let copiaSelectedSectors = [...this.state.selectedSectors];

    if (isSelected) {
      copiaSelectedSectors.splice(
        copiaSelectedSectors.findIndex((value) => {
          return value.id === sector.id;
        }),
        1
      );
    } else {
      copiaSelectedSectors = copiaSelectedSectors.concat([sector]);
    }

    this.setState({ selectedSectors: copiaSelectedSectors }, () => {
      console.log("SELECTED SECTORS", this.state.selectedSectors);
    });
    callback();
  };

  handlePostRequests = (idCompany) => {
    Promise.all([
      ...this.addPreferences(idCompany),
      this.addLocationData(idCompany),
    ])
      .then((results) => {
        console.log(results);
        this.props.history.push("/feed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleRegister = (e) => {
    this.props.loginCompany(true);
    this.props.history.push("/allies");
    e.preventDefault();
    let callback = {
      onSuccess: (response) => {
        console.log("response", response);
        //TODO REDIRECCCIONAR A PAGINA DE INICIO
        this.handlePostRequests(response.data.id);
      },
      onFailed: (error) => {
        console.log(error);
      },
    };
    let company = this.props.company;
    console.log(company);
    serviceMethod(
      POST_METHOD,
      `${URLS.BASE}companies/`,
      {
        name: company.name,
        nit: company.nit,
        owner: company.owner,
        suscription: false,
        sector: company.sector.id,
      },
      callback
    );
    console.log("props company", this.props.company);
  };
  render() {
    return this.state.isLoading ? (
      <h1>Cargando</h1>
    ) : (
      <div className="PreferencesForm">
        <h1 className="title">4. Tus preferencias</h1>
        <p className="description-text">
          Indicanos tus áreas de interés para encontrar tur mejores aliados
        </p>
        <div className="selector">
          <div>
            <div className="title-section">
              <p>Sectores</p>
            </div>
            {this.state.sectors.map((sector) => {
              return (
                <CardItem object={sector} onClick={this.handleClickSector} />
              );
            })}
          </div>
          <div className="line"></div>
          <div>
            <div className="title-section">
              <p>Categorias</p>
            </div>
            {this.state.categories.map((category) => {
              return (
                <CardItem
                  object={category}
                  onClick={this.handleClickCategory}
                />
              );
            })}
          </div>
        </div>
        <div className="action">
          <button className="button-material" onClick={this.handleRegister}>
            Iniciar
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    company: state.company,
    location: state.location,
  };
};

const mapDispatchToProps = {
  loginCompany,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesForm);
