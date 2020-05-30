import React, { Component } from "react";

export default class PreferencesForm extends Component {
  state = { isLoading: true, preferencias: [] };
  componentDidMount() {
    //TODO Get request preferencias
    let preferencias = [
      { nombre: "Textiles" },
      { nombre: "Estilo de vida" },
      { nombre: "Tecnología" },
      { nombre: "Accesorios" },
    ];
    this.setState({ isLoading: false, preferencias });
  }
  render() {
    return this.state.isLoading ? (
      <h1>Cargando</h1>
    ) : (
      <>
        <h1>4. Tus preferencias</h1>
        <p>Indicanos tus áreas de interés para encontrar tur mejores aliados</p>
        {this.state.preferencias.map((preferencia) => {
          console.log("preferencia", preferencia);
          return <button>{preferencia.nombre}</button>;
        })}
      </>
    );
  }
}
