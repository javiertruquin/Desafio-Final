import axios from "axios";
import { React, useState } from "react";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap";
import CardDomicilios from "./CardDomicilios";
import Swal from "sweetalert2";

export default function MisDatos({ userComplete, getUsuario }) {
  const [input, setInput] = useState({});
  const [inputPassword, setInputPassword] = useState("");
  const [disabledCuenta, setDisabledCuenta] = useState(true);
  const [disabledSensible, setDisabledSensible] = useState(true);
  const [agregarForm, setAgregarForm] = useState(false);
  const [validated, setValidated] = useState(false);

  const { nombre, apellido, documento, email, telefono } = userComplete;

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
      const passwordModificada = {
        ...inputPassword,
        id: userComplete._id,
      };

      if (!inputPassword) {
        await axios.put("/auth", usuarioModificado);
        setDisabledCuenta(true)
      } else {
        await axios.put("/auth/password", passwordModificada);
        setInputPassword("");
        setDisabledSensible(true);
      }
      getUsuario();
      Swal.fire({
        icon: "success",
        title: "Usuario editado correctamente",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };
  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    let changedInputPassword = { ...inputPassword, [name]: value };
    setInputPassword(changedInputPassword);
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
                maxLength="50"
                onChange={(e) => handleChange(e)}
                placeholder={"No email"}
                defaultValue={email || ""}
                aria-describedby="inputGroup-sizing-default"
                disabled={disabledCuenta}
                required
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
                maxLength="30"
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
                maxLength="30"
                onChange={(e) => handleChange(e)}
                placeholder={"No apellido"}
                defaultValue={apellido || ""}
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <InputGroup controlid="formBasicPassword">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Documento
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="number"
                onChange={(e) => handleChange(e)}
                name="documento"
                disabled={disabledCuenta}
                placeholder="Todavía no cargaste tu documento"
                defaultValue={documento || ""}
              />
            </InputGroup>
            <InputGroup className="my-3" controlid="formBasicPassword2">
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
                maxLength="30"
                minLength="10"
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
            </Button>
            {!disabledCuenta && (
              <Button
                size="md"
                type="submit"
                className="mt-4"
                variant="outline-dark"
              >
                Guardar
              </Button>
            )}
          </div>
          <hr />
          <div className="my-5">
            <Card.Title>Datos sensibles</Card.Title>
            <InputGroup controlid="formBasicPassword3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Contraseña
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                onChange={(e) => handleChangePassword(e)}
                type="password"
                name="password"
                maxLength="30"
                minLength="7"
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
            </Button>
            {!disabledSensible && (
              <Button
                size="md"
                type="submit"
                className="mt-4"
                variant="outline-dark"
              >
                Guardar
              </Button>
            )}
          </div>
        </Form>
        <hr />
        <Card.Title className="mt-5">Tus domicilios</Card.Title>
        <Button
          size="md"
          onClick={() => setAgregarForm(true)}
          className=""
          variant="outline-dark"
        >
          Agregar Domicilio
        </Button>
        {agregarForm && (
          <CardDomicilios
            accion="agregar"
            userComplete={userComplete}
            getUsuario={getUsuario}
          />
        )}

        {userComplete.domicilio?.map((domicilio, index) => (
          <CardDomicilios
            key={index + 1}
            domicilio={domicilio}
            index={index}
            userComplete={userComplete}
            getUsuario={getUsuario}
          />
        ))}
      </Card.Body>
    </>
  );
}
