import React, { useState } from "react";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
import FormEditar from "./FormEditar";

export default function MisDatos({ userComplete }) {
  // const [datosCuenta, setDatosCuenta] = useState(false);
  // const [datosPersonales, setDatosPersonales] = useState();
  // const [datosDomicilio, setDDomicilio] = useState();

  // const editar = (usestate) => {
  //   if (usestate === 'datosCuenta'){
  //     setDatosCuenta(true);
  //     console.log('datos', datosCuenta)
  //   }
  // }



  return (
    <>
      <Card.Body>
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
              aria-label="Default"
              type="email"
              placeholder={'userComplete.email'}
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup controlId="formBasicPassword">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Contraseña
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="password"
              disabled
              placeholder="****************"
            />
          </InputGroup>
          <Button size="md"
          // onClick={setDatosCuenta(true)}
          className="mt-4" variant="outline-dark">
            Editar
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
              type="text"
              placeholder={'userComplete.nombre'}
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
            <Form.Control type="number" disabled placeholder="55.567.890" />
          </InputGroup>
          <InputGroup className="my-3" controlId="formBasicPassword">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Teléfono
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type="tel" disabled placeholder="381-6518701" />
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
              <Card.Text>San Miguel de Tucumán - Tucumán - Argentina</Card.Text>
              <Card.Text>
                <strong>Código postal:</strong> 4000
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light" className="mt-3">
            <Card.Header>Oficina</Card.Header>
            <Card.Body>
              <Card.Text>Santiago 444 - 5B</Card.Text>
              <Card.Text>San Miguel de Tucumán - Tucumán - Argentina</Card.Text>
              <Card.Text>
                <strong>Código postal:</strong> 4000
              </Card.Text>
            </Card.Body>
          </Card>
          <Button size="md" className="mt-4" variant="outline-dark">
            Editar
          </Button>{" "}
        </div>
      </Card.Body>
    </>
  );
}
