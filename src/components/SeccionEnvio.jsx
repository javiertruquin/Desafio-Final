import { MDBInput } from "mdbreact";
import React, { useState } from "react";
import { Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function SeccionEnvio() {
  const [datos, setDatos] = useState({
    usuario: "",
    domicilio: [
      {
        provincia: "",
        localidad: "",
        calle: "",
        numero: "",
        piso: "",
        telefono: "",
        observaciones: "",
      },
    ],
  });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    axios.post("/venta", datos);
    alert("Datos de venta recibidos satisfactoriamente");
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-7">
          <span className="titulo-azul">Dirección</span>
          <p className="ps-lg-3 pt-3 pt-lg-0 texto-favoritos fuente">Ingresá la dirección donde queres el envío</p>
        </div>
        <div className="col-2"></div>
        <div className="col-2 text-center pt-3">
          <i style={{ color: "#00598a", fontSize: "22pt" }} className="fas fa-home text-center "></i>
          <p className="sub-mision pt-1" style={{ "font-size": "70%" }}>DIRECCIÓN</p>
        </div>
      </div>
      <hr className=" mt-3" style={{ border: '0.3px solid #ababab' }} />
      <Form className="col-12 col-md-10 mt-2" onSubmit={enviarDatos}>
        <div className="container mb-4">
          <div className="row">
            <div className="col-6">
              <MDBInput
                required
                type="text"
                maxlength="30"
                label="Provincia"
                onChange={handleInputChange}
                name="provincia"
              />
            </div>
            <div className="col-6">
              <MDBInput
                required
                type="text"
                maxlength="30"
                label="Localidad"
                onChange={handleInputChange}
                name="localidad"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <MDBInput
                required
                type="text"
                maxlength="30"
                label="Calle"
                onChange={handleInputChange}
                name="calle"
              />
            </div>
            <div className="col-6">
              <MDBInput
                required
                type="number"
                maxlength="30"
                label="Número"
                onChange={handleInputChange}
                name="numero"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <MDBInput
                type="text"
                label="Piso / Departamento"
                onChange={handleInputChange}
                name="piso"
              />
            </div>
            <div className="col-6">
              <MDBInput
                required
                type="number"
                label="Teléfono de contacto"
                maxlength="30"
                minlength="7"
                onChange={handleInputChange}
                name="telefono"
              />
            </div>
          </div>
          <div className="row">
            <div className="">
              <MDBInput
                type="textarea"
                label="Indicaciones adicionales"
                rows="4"
                required
                maxlength="250"
                onChange={handleInputChange}
                name="observaciones"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <Nav.Link to="/pago" as={NavLink} className="">
            <button className="btn-comprar" type="submit">
              Continuar compra
            </button>
          </Nav.Link>
        </div>
      </Form>
    </div>
  );
}
