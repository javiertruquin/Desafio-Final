import React, { Component } from "react";
import { Form, Button, FormGroup } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function Registro() {
  return (
    <Form
      style={{ width: "777px" }}
      className="container card mx-auto pt-2 pr-4 pl-4 mt-4"
    >
      <h2 style={{ width: "421px" }} className="mx-auto p-4 text-center mb-2">
        Ingresá tus datos
      </h2>
      <MDBContainer className="mb-4">
        <MDBRow>
          <MDBCol>
            <MDBInput type="text" label="Nombre/s" />
          </MDBCol>
          <MDBCol>
            <MDBInput type="text" label="Apellido" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBInput type="number" label="DNI" />
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBInput type="email" label="E-mail" />
          </MDBCol>
          <MDBCol>
            <MDBInput type="password" label="Contraseña" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Button
        variant="primary"
        type="submit"
        style={{ width: "300px" }}
        className="mx-auto mt-4 mb-2 rounded"
      >
        REGISTRARSE
      </Button>
      <p className="mt-1 mb-5 text-center grey-text">
        Asegurate de tener acceso al e-mail que ingresaste
      </p>
    </Form>
  );
}
