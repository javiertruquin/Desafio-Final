import React, { useState } from "react";
import Card from "react-credit-cards";
import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  // formatFormData,
} from "../utils";

import "react-credit-cards/es/styles-compiled.css";

export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };


  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    const { value, name} = target
    if (name === "number") {
      target.value = formatCreditCardNumber(value);
    } else if (name === "expiry") {
      target.value = formatExpirationDate(value);
    } else if (name === "cvc") {
      target.value = formatCVC(value);
    }

    this.setState({ [name]: value });
    let changedInput = { ...this.props.datosTarjeta, [name]: value };
    this.props.setDatosTarjeta(changedInput);

  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div className="container mt-4" key="Payment ">
        <div className="row">
          <div className="col-7">
            <span className="titulo-azul">Tarjeta de crédito</span>
            <p className="ps-lg-3 pt-3 pt-lg-0 texto-favoritos fuente">
              Ingresá los datos de su tarjeta
            </p>
          </div>
          <div className="col-2"></div>
          <div className="col-2 text-center pt-3">
            <i
              style={{ color: "#00598a", fontSize: "22pt" }}
              className="fas fa-credit-card "
            ></i>
            <p className="sub-mision pt-1" style={{ fontSize: "70%" }}>
              TARJETA
            </p>
          </div>
        </div>
        <hr className=" mt-3" style={{ border: "0.3px solid #ababab" }} />
        <div className="App-payment">
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          {/* <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}> */}
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Numero de Tarjeta"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre y Apellido"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Fecha de expiracion"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="Codigo de seguridad"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div></div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            {/* <div className="form-actions">
                            <button className="btn-comprar w-100">
                                Comprar
                            </button>
                        </div> */}
          {/* </form> */}
        </div>
      </div>
    );
  }
}
