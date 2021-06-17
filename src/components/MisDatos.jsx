import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
import FormEditar from "./FormEditar";

export default function MisDatos({ userComplete, getUsuario }) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});
  const [inputPassword, setInputPassword] = useState("");
  const [inputDomicilio, setInputDomicilio] = useState("");
  const [domicilioCambiado, setDomicilioCambiado] = useState([]);
  const [disabledCuenta, setDisabledCuenta] = useState(true);
  const [disabledSensible, setDisabledSensible] = useState(true);
  const [disabledDomicilio, setDisabledDomicilio] = useState(true);

  const { nombre, apellido, documento, domicilio, email, telefono } =
    userComplete;
  console.log("domicilio", domicilio);

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
    try {
      // Consulta post a /productos
      const usuarioModificado = { ...input, id: userComplete._id };
      const passwordModificada = { ...inputPassword, id: userComplete._id };
      console.log("produto modificado", usuarioModificado);

      if (!inputPassword) {
        await axios.put("/auth", usuarioModificado);
      } else {
        await axios.put("/auth/password", passwordModificada);
        setInputPassword("");
        setDisabledSensible(true);
      }
      getUsuario();
      // alert("Usuario editado con éxito!😁");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let changedInput = { ...input, [name]: value };
    setInput(changedInput);
    // console.log('input', changedInput)
  };
  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    let changedInputPassword = { ...inputPassword, [name]: value };
    console.log("input", changedInputPassword);
    setInputPassword(changedInputPassword);
  };
  const handleChangeDominio = (e) => {
    const { name, value } = e.target;
    let changedInputDomicilio = { ...inputDomicilio, [name]: value };
    console.log("domicilio", changedInputDomicilio);
    setInputDomicilio(changedInputDomicilio);
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
                aria-label="Default"
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
                placeholder={"No email"}
                defaultValue={email || ""}
                aria-describedby="inputGroup-sizing-default"
                disabled={disabledCuenta}
              />
            </InputGroup>
            <InputGroup className="mt-4 mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Nombre
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                disabled={disabledCuenta}
                type="text"
                onChange={(e) => handleChange(e)}
                name="nombre"
                aria-describedby="inputGroup-sizing-default"
                placeholder={"No name"}
                defaultValue={nombre || ""}
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
                disabled={disabledCuenta}
                name="apellido"
                type="text"
                onChange={(e) => handleChange(e)}
                placeholder={"No apellido"}
                defaultValue={apellido || ""}
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
                type="text"
                onChange={(e) => handleChange(e)}
                name="documento"
                disabled={disabledCuenta}
                placeholder="Todavía no cargaste tu documento"
                defaultValue={documento || ""}
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
                disabled={disabledCuenta}
                placeholder="Todavía no cargaste tu número de celular o teléfono"
                defaultValue={telefono || ""}
              />
            </InputGroup>
            <Button
              size="md"
              // onClick={setDatosCuenta(true)}
              className="mt-4"
              variant="outline-dark"
              onClick={() => setDisabledCuenta(false)}
            >
              Editar
            </Button>{" "}
            <Button
              size="md"
              type="submit"
              className="mt-4"
              variant="outline-dark"
              onClick={() => setDisabledCuenta(true)}
            >
              Guardar
            </Button>{" "}
          </div>
          <hr />
          <div className="my-5">
            <Card.Title>Datos sensibles</Card.Title>
            <InputGroup controlId="formBasicPassword">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Contraseña
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                onChange={(e) => handleChangePassword(e)}
                type="password"
                name="password"
                disabled={disabledSensible}
                placeholder="****************"
              />
            </InputGroup>
            <Button
              size="md"
              onClick={() => setDisabledSensible(false)}
              className="mt-4"
              variant="outline-dark"
            >
              Editar
            </Button>{" "}
            <Button
              size="md"
              type="submit"
              className="mt-4"
              variant="outline-dark"
              onClick={() => setDisabledSensible(true)}
            >
              Guardar
            </Button>{" "}
          </div>
          <hr />
          <div className="my-5">
            <Card.Title></Card.Title>
            <Card bg="light" className="mt-4">
              <Card.Header>
                <Form.Group controlId="formPlaintextEmail">
                  <Form.Control
                    plaintext={disabledDomicilio}
                    readOnly={disabledDomicilio}
                    placeholder="Título"
                    name="titulo"
                    onChange={(e) => handleChangeDominio(e)}
                    defaultValue={domicilio || ""}
                  />
                </Form.Group>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form.Group controlId="formPlaintextEmail">
                    <Form.Control
                      plaintext={disabledDomicilio}
                      readOnly={disabledDomicilio}
                      onChange={(e) => handleChangeDominio(e)}
                      placeholder="Dirección exacta"
                      name="direccion"
                      defaultValue={domicilio || ""}
                    />
                  </Form.Group>
                </Card.Text>
                <Card.Text>
                  <Form.Group controlId="formPlaintextEmail">
                    <Form.Control
                      plaintext={disabledDomicilio}
                      readOnly={disabledDomicilio}
                      placeholder="Ciudad"
                      name="ciudad"
                      defaultValue={domicilio || ""}
                      onChange={(e) => handleChangeDominio(e)}
                    />
                  </Form.Group>
                </Card.Text>
                <Card.Text>
                  <Form.Group controlId="formPlaintextEmail">
                    <Form.Control
                      plaintext={disabledDomicilio}
                      readOnly={disabledDomicilio}
                      placeholder="Codigo Postal"
                      defaultValue={domicilio || ""}
                      name="codPostal"
                      onChange={(e) => handleChangeDominio(e)}
                    />
                  </Form.Group>
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              size="md"
              onClick={() => setDisabledDomicilio(false)}
              className="mt-4"
              variant="outline-dark"
            >
              Editar
            </Button>{" "}
            <Button
              size="md"
              type="submit"
              className="mt-4"
              variant="outline-dark"
            >
              Guardar
            </Button>{" "}
          </div>
        </Form>
      </Card.Body>
    </>
  );
}
