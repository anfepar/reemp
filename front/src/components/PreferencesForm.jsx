import React, { Component } from "react";
import { connect } from "react-redux";
import { serviceMethod } from "../api/util";

import {
  GET_METHOD,
  POST_METHOD,
  MOCKED_DATA,
  URLS,
} from "../constants/STRINGS";
import axios from "axios";
import CardItem from "./CardItem";

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
      console.log(category, this.props.company);
      listaSolicitudes = listaSolicitudes.concat([
        axios.post(`${URLS.BASE}preferences/`, {
          category: category.id,
          company: id,
          sector: 1,
        }),
      ]);
    });

    this.state.selectedSectors.forEach((sector) => {
      console.log(sector, this.props.company);
      listaSolicitudes = listaSolicitudes.concat([
        axios.post(`${URLS.BASE}preferences/`, {
          sector: sector.id,
          company: id,
          category: 1,
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
        sector:
          company.sector.id /*`${URLS.BASE}sectors/${company.sector.id}/`*/,
      },
      callback
    );
    console.log("props company", this.props.company);
  };
  render() {
    return this.state.isLoading ? (
      <h1>Cargando</h1>
    ) : (
      <>
        <h1>4. Tus preferencias</h1>
        <p>Indicanos tus áreas de interés para encontrar tur mejores aliados</p>
        {this.state.categories.map((category) => {
          // console.log("category", category);
          return (
            <CardItem object={category} onClick={this.handleClickCategory} />
          );
        })}
        {this.state.sectors.map((sector) => {
          // console.log("sector", sector);
          return (
            <CardItem object={sector} onClick={this.handleClickSector} />
            // <button
            //   onClick={(e) => {
            //     this.handleClickSector(e, sector);
            //   }}
            //   style={{ backgroundColor: "red" }}
            // >
            //   {sector.name}
            // </button>
          );
        })}
        <button onClick={this.handleRegister}>Iniciar</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    company: state.company,
    location: state.location,
  };
};

export default connect(mapStateToProps, null)(PreferencesForm);
