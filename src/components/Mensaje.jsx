import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, InputGroup, Nav } from "react-bootstrap";
import Swal from "sweetalert2";

export default function Mensaje({ mensajesolo, getMensajes }) {
  const { _id, nombre, email, mensaje, fecha } = mensajesolo;
  const [abrir, setAbrir] = useState(false);
  const handleClose = () => setAbrir(false);
  const handleAbrir = () => setAbrir(true);

  const res = mensaje.substring(0, 50);
  const final = res + "...";

  const eliminar = async () => {
    Swal.fire({
      title: "Estás seguro?",
      text: "Si lo borrás no hay vuelta atrás!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const params = { _id };
          await axios.delete("/mensaje", { params });
          getMensajes();
          Swal.fire("Borrado!", "El mensaje fue borrado.", "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
      <tr>
        <td>{fecha}</td>
        <td>{nombre}</td>
        <td>{email}</td>
        <td>{final}</td>
        <td className="col-3">
          <div className="row">
            <div className="col-lg-4">
              <Nav.Link
                className="mt-1"
                href={
                  "mailto:" +
                  email +
                  "?Subject=Respuesta%20de%20Rolling%20tech%20a%20tu%20consulta"
                }
              >
                <Button variant="success" size="sm">
                  <i className="far fa-envelope"></i>
                </Button>
              </Nav.Link>
            </div>
            <div className="col-lg-4">
              <Button
                variant="primary"
                onClick={handleAbrir}
                size="sm"
                className="mt-3"
              >
                <i className="fab fa-readme"></i>
              </Button>
            </div>
            <div className="col-lg-4">
              <Button
                variant="danger"
                onClick={eliminar}
                size="sm"
                className="mt-3"
              >
                <i className="far fa-trash-alt"></i>
              </Button>
            </div>
          </div>
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
