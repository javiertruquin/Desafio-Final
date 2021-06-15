import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
import FormEditar from "./FormEditar";

export default function MisDatos({ userComplete, getUsuario }) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});

  const { nombre, apellido, documento, domicilio, codPostal, email } =
    userComplete;

  // const [datosCuenta, setDatosCuenta] = useState(false);
  // const [datosPersonales, setDatosPersonales] = useState();
  // const [datosDomicilio, setDDomicilio] = useState();

  // const editar = (usestate) => {
  //   if (usestate === 'datosCuenta'){
  //     setDatosCuenta(true);
  //     console.log('datos', datosCuenta)
  //   }
  // }

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }

    try {
      // Consulta post a /productos
      const usuarioModificado = { ...input, id: userComplete._id };
      console.log("produto modificado", usuarioModificado);
      await axios.put("/auth", usuarioModificado);
      getUsuario();
      alert("Usuario editado con éxito!😁");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };

  return (
    <>
      <Card.Body>
        <Form
          className="form-profile"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <Card.Title>Datos de la cuenta</Card.Title>
            <InputGroup className="mt-4 mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Email
                </InputGroup.Text>
              </InputGroup.Prepend>
              {/* { !datosCuenta && disable } */}
              <FormControl
                onChange={(e) => handleChange(e)}
                aria-label="Default"
                type="email"
                name="email"
                placeholder={"userComplete.email"}
                aria-describedby="inputGroup-sizing-default"
                // disabled={true}
              />
            </InputGroup>
            <InputGroup controlId="formBasicPassword">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Contraseña
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
              onChange={(e) => handleChange(e)}
                type="password"
                name="password"
                disabled
                placeholder="****************"
              />
            </InputGroup>
            <Button
              size="md"
              // onClick={setDatosCuenta(true)}
              className="mt-4"
              variant="outline-dark"
            >
              Editar
            </Button>{" "}
            <Button
              size="md"
              // onClick={setDatosCuenta(true)}
              type="submit"
              className="mt-4"
              variant="outline-dark"
            >
              Guardar
            </Button>{" "}
          </div>
          <hr />
          <div className="my-5">
            <Card.Title>Datos personales</Card.Title>
            <InputGroup className="mt-4 mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Nombre
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                disabled
                onChange={(e) => handleChange(e)}
                type="text"
                name="nombre"
                placeholder={"userComplete.nombre"}
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <InputGroup className="my-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Apellido
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                disabled
                name="apellido"
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder={"userComplete.apellido"}
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <InputGroup className="my-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Título
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                disabled
                name="titulo"
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Web Developer"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <InputGroup controlId="formBasicPassword">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Documento
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="number"
                name="documento"
                onChange={(e) => handleChange(e)}
                disabled
                placeholder="55.567.890"
              />
            </InputGroup>
            <InputGroup className="my-3" controlId="formBasicPassword">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Teléfono
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="tel"
                onChange={(e) => handleChange(e)}
                name="telefono"
                disabled
                placeholder="381-6518701"
              />
            </InputGroup>
            <Button size="md" className="mt-4" variant="outline-dark">
              Editar
            </Button>{" "}
          </div>
          <hr />
          <div className="my-5">
            <Card.Title>Domicilios</Card.Title>
            <Card bg="light" className="mt-4">
              <Card.Header>Casa</Card.Header>
              <Card.Body>
                <Card.Text>24 de septiembre 444</Card.Text>
                <Card.Text>
                  San Miguel de Tucumán - Tucumán - Argentina
                </Card.Text>
                <Card.Text>
                  <strong>Código postal:</strong> 4000
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="light" className="mt-3">
              <Card.Header>Oficina</Card.Header>
              <Card.Body>
                <Card.Text>Santiago 444 - 5B</Card.Text>
                <Card.Text>
                  San Miguel de Tucumán - Tucumán - Argentina
                </Card.Text>
                <Card.Text>
                  <strong>Código postal:</strong> 4000
                </Card.Text>
              </Card.Body>
            </Card>
            <Button size="md" className="mt-4" variant="outline-dark">
              Editar
            </Button>{" "}
          </div>
        </Form>
      </Card.Body>
    </>
  );
}
