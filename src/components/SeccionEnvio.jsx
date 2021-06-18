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
    <div className="container p-4 mt-4">
      <div className=" border-bottom mb-4">
        <h2 className="mx-auto mb-3 text-center titulo-azul">
          Ingrese su dirección
        </h2>
      </div>
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
