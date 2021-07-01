import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact";
import { Form } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";

export default function CajaDeMensajes() {
  let history = useHistory();
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    axios.post("/mensaje", datos);

    Swal.fire({
      icon: "success",
      title: "Gracias por su consulta. Le responderemos a la brevedad",
    });
    history.push("/");
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 text-center mt-4">
          <span className="titulo-nosotros">Comunicate con nosotros</span>
        </div>
      </div>
      <div className="col d-flex justify-content-center mt-2">
        <span className="sub-mision w-75 text-center">
          {" "}
          Dejános tu mensaje y nos comunicaremos con vos a la brevedad. También
          te dejamos la dirección y horarios de la sucursal si querés acercarte
          personalmente.
        </span>
      </div>

      <div className="col">
        <Form
          style={{ maxWidth: "777px" }}
          className="container card mx-auto pt-2 pr-4 pl-4 mt-5 fuente"
          onSubmit={enviarDatos}
        >
          <MDBContainer className="mb-4">
            <MDBRow>
              <MDBCol>
                <MDBInput
                  minLength="6"
                  maxLength="30"
                  required
                  type="text"
                  label="Tu Nombre"
                  onChange={handleInputChange}
                  name="nombre"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  minLength="6"
                  maxLength="40"
                  required
                  type="email"
                  label="Tu Email"
                  onChange={handleInputChange}
                  name="email"
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBInput
                  minLength="6"
                  maxLength="40"
                  required
                  type="text"
                  label="Título Consulta"
                  onChange={handleInputChange}
                  name="titulo"
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBInput
                  minLength="6"
                  maxLength="500"
                  required
                  className="mt-3"
                  type="textarea"
                  label="Dejános Tu Consulta (Máx. 500 caracteres)"
                  rows="6"
                  onChange={handleInputChange}
                  name="mensaje"
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <button
            type="submit"
            style={{ width: "40%" }}
            className="mx-auto mt-4 mb-5 btn-categoria"
          >
            ENVÍA TU CONSULTA
          </button>
        </Form>
      </div>
    </div>
  );
}
