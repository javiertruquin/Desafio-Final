import { React, useEffect, useState } from "react";
import SeccionCarrito from "../components/SeccionCarrito";
import SeccionEnvio from "../components/SeccionEnvio";
import SeccionTarjetas from "../components/SeccionTarjetas";
import { Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
const localToken = JSON.parse(localStorage.getItem("token")) || "";

export default function Envio({ setUser, carrito }) {
  const [validated, setValidated] = useState(false);
  const [token, setToken] = useState(localToken);
  const [datosDomicilio, setDatosDomicilio] = useState({});
  const [datosTarjeta, setDatosTarjeta] = useState();

  if (!token) {
    alert("No estas logueado");
    return <Redirect to="/" />;
  }

  const enviarDatos = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    // setValidated(true);
    // if (form.checkValidity() === false) {
    //     return event.stopPropagation();
    // }
    setDatosTarjeta(JSON.parse(localStorage.getItem("state")));

    try {
            // axios.post("/venta", { domicilio: input });
            alert("Datos de venta recibidos satisfactoriamente");
    } catch (error) {
        console.log("enviarDatos ~ error", error);
    }
  };

  console.log("tarjeta", datosTarjeta);

  return (
    <div>
      {/* <NavReactB /> */}
      <Form
        noValidate
        validated={validated}
        onSubmit={enviarDatos}
        className="col-12 col-md-10 mt-2 needs-validation"
        className="form-compra"
      >
        <div className="row mx-auto ">
          <div className="col-12 col-md-6">
            <SeccionEnvio
              datosDomicilio={datosDomicilio}
              setDatosDomicilio={setDatosDomicilio}
            />
          </div>
          <div className="col-12 col-md-6">
            <SeccionTarjetas
              datosTarjeta={datosTarjeta}
              setDatosTarjeta={setDatosTarjeta}
            />
          </div>
          <div className="form-actions text-center">
            <button className="btn-comprar col-4">Comprar</button>
          </div>
        </div>
      </Form>
    </div>
  );
}
