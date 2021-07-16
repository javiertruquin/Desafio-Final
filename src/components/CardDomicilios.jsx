import axios from "axios";
import { React, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default function CardDomicilios({
  userComplete,
  domicilio,
  getUsuario,
  accion,
  index,
}) {
  const [validated, setValidated] = useState(false);
  const [disabledDomicilio, setDisabledDomicilio] = useState(true);
  const [inputDomicilio, setInputDomicilio] = useState(domicilio);
  const handleSubmitDomicilio = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    try {
      const domicilio = [];
      domicilio.push(inputDomicilio);
      const usuarioModificado = {
        domicilio,
        id: userComplete._id,
        index: index,
      };
      await axios.put("/auth/domicilio", usuarioModificado);
      getUsuario();
      setDisabledDomicilio(true);
      Swal.fire({
        icon: "success",
        title: "Domicilio editado con éxito",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeDomicilio = (e) => {
    const { name, value } = e.target;
    let changedInputDomicilio = { ...inputDomicilio, [name]: value };
    setInputDomicilio(changedInputDomicilio);
  };

  return (
    <>
      <Form
        className="form-profile"
        noValidate
        validated={validated}
        onSubmit={handleSubmitDomicilio}
      >
        <div className="mb-5">
          <Card.Title></Card.Title>
          <Card bg="light" className="mt-4">
            <Card.Header>
              <Form.Group>
                <Form.Control
                  defaultValue={accion === "agregar" ? "" : domicilio.titulo}
                  plaintext={disabledDomicilio}
                  readOnly={disabledDomicilio}
                  placeholder="Título"
                  maxLength="30"
                  name="titulo"
                  required
                  onChange={(e) => handleChangeDomicilio(e)}
                />
              </Form.Group>
            </Card.Header>
            <Card.Body>
              <Form.Group className="d-flex">
                <Form.Control
                  defaultValue={accion === "agregar" ? "" : domicilio.provincia}
                  plaintext={disabledDomicilio}
                  readOnly={disabledDomicilio}
                  maxLength="30"
                  onChange={(e) => handleChangeDomicilio(e)}
                  placeholder="Provincia"
                  required
                  name="provincia"
                />
                <Form.Control
                  defaultValue={accion === "agregar" ? "" : domicilio.localidad}
                  plaintext={disabledDomicilio}
                  readOnly={disabledDomicilio}
                  maxLength="50"
                  onChange={(e) => handleChangeDomicilio(e)}
                  placeholder="Localidad"
                  required
                  name="localidad"
                />
              </Form.Group>
              <Form.Group className="d-flex">
                <Form.Control
                  defaultValue={accion === "agregar" ? "" : domicilio.calle}
                  plaintext={disabledDomicilio}
                  readOnly={disabledDomicilio}
                  placeholder="Calle"
                  maxLength="50"
                  name="calle"
                  required
                  onChange={(e) => handleChangeDomicilio(e)}
                />
                <Form.Control
                  defaultValue={accion === "agregar" ? "" : domicilio.numero}
                  plaintext={disabledDomicilio}
                  readOnly={disabledDomicilio}
                  placeholder="Número"
                  name="numero"
                  type="number"
                  required
                  onChange={(e) => handleChangeDomicilio(e)}
                />
              </Form.Group>
              <Form.Group className="d-flex">
                <Form.Control
                  defaultValue={
                    accion === "agregar" ? "" : domicilio.departamento
                  }
                  plaintext={disabledDomicilio}
                  readOnly={disabledDomicilio}
                  placeholder="Piso / Depto"
                  name="departamento"
                  maxLength="20"
                  onChange={(e) => handleChangeDomicilio(e)}
                />
                <Form.Control
                  defaultValue={accion === "agregar" ? "" : domicilio.codPostal}
                  plaintext={disabledDomicilio}
                  readOnly={disabledDomicilio}
                  placeholder="Código Postal"
                  type="number"
                  name="codPostal"
                  onChange={(e) => handleChangeDomicilio(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Indicaciones extras aquí (opcional)</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e) => handleChangeDomicilio(e)}
                  plaintext={disabledDomicilio}
                  readOnly={disabledDomicilio}
                  name="indicaciones"
                  maxLength="150"
                  placeholder="..."
                  defaultValue={
                    accion === "agregar" ? "" : domicilio.indicaciones
                  }
                  rows={3}
                />
              </Form.Group>
            </Card.Body>
          </Card>
          <Button
            size="md"
            onClick={() => setDisabledDomicilio(false)}
            className="mt-4"
            variant="outline-dark"
          >
            Editar
          </Button>
          {!disabledDomicilio && (
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
    </>
  );
}
