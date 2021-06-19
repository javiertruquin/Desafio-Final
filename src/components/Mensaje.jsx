import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, InputGroup, Nav } from "react-bootstrap";

export default function Mensaje({ mensajesolo, getMensajes }) {
  const { _id, nombre, email, mensaje, estado, fecha } = mensajesolo;
  const [abrir, setAbrir] = useState(false);
  const handleClose = () => setAbrir(false);
  const handleAbrir = () => setAbrir(true);

  const eliminar = async () => {
    // event.preventDefault();
    try {
      const params = { _id };
      await axios.delete("/mensaje", { params });

      alert("Mensaje eliminado con éxito!😁");
      getMensajes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr>
        <td>{fecha}</td>
        <td>{nombre}</td>
        <td>{email}</td>
        <td>{mensaje}</td>
        <td>
          {estado} <InputGroup.Checkbox hasValidation="true" />{" "}
        </td>
        <td className="col-4">
          <Nav.Link href={"mailto:" + email + "?Subject=Respuesta%20de%20Rolling%20tech%20a%20tu%20consulta"} >
            <Button variant="primary" size="sm">
              <i class="fab fa-readme"></i>
            </Button>{" "}
          </Nav.Link>
          <Button variant="primary" onClick={handleAbrir} size="sm">
            <i class="fab fa-readme"></i>
          </Button>{" "}
          <Button variant="danger" onClick={eliminar} size="sm">
            <i class="far fa-trash-alt"></i>
          </Button>{" "}
        </td>
      </tr>

      {/* modal vista */}
      <Modal show={abrir} onHide={handleAbrir}>
        <Modal.Header>
          <Modal.Title>
            {nombre}
            <br />
            {email}
            <br />
            {fecha}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>MENSAJE</strong>
            <br />
            <br />
            {mensaje}
          </p>
          {/* <p>
            <strong>Estado:</strong> {estado}
          </p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
