import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FormCrearVendedor from "./FormCrearVendedor";
import Swal from "sweetalert2";

export default function FilaUsuarios({ usuario, index, getUsuarios }) {
  const [crear, setCrear] = useState(false);
  const handleClose = () => setCrear(false);
  const handleCrear = () => setCrear(true);
  const [crear2, setCrear2] = useState(false);
  const handleClose2 = () => setCrear2(false);
  const handleCrear2 = () => setCrear2(true);

  const { nombre, rol, email, apellido, _id } = usuario;
  // const [contadorState, setContadorState] = useState(0)
  // setContadorState(contadorState++);
  // console.log('usuario', usuario);

  const eliminar = async (event) => {
    // event.preventDefault();

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
          await axios.delete("/auth/" + _id);
          getUsuarios();
          Swal.fire("Borrado!", "Usuario eliminado con éxito.", "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{nombre}</td>
        <td>{rol}</td>
        <td>{email}</td>
        <td className="col-4">
          <Button onClick={handleCrear2} variant="primary">
            <i className="fas fa-info-circle"></i>
          </Button>{" "}
          {/* <Button className="my-1" variant="secondary">
            <i className="far fa-edit"></i>
          </Button>{" "} */}
          <Button onClick={handleCrear} className="my-1" variant="secondary">
            <i className="far fa-edit"></i>
          </Button>{" "}
          {/* <Button variant="danger" onClick={eliminar}> */}
          <Button variant="danger" onClick={eliminar}>
            <i className="far fa-trash-alt"></i>
          </Button>{" "}
        </td>
      </tr>

      {/* Modal's */}
      <Modal show={crear} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCrearVendedor
            handleClose={handleClose}
            getUsuarios={getUsuarios}
            accion={"editar"}
            usuario={usuario}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={crear2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>
            {nombre} {apellido}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Nombre:</strong> {nombre}
          </p>
          <p>
            <strong>Apellido:</strong> {apellido}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Rol:</strong> {rol}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
