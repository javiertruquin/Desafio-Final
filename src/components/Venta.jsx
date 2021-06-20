import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, InputGroup, Nav } from "react-bootstrap";

export default function Venta({ venta, getVentas }) {
  const { _id, usuario, numeroventa, fecha } = venta;
  const { localidad, provincia, calle, numero, piso, telefono, observaciones } =
    venta.domicilio[0];
  const [abrir, setAbrir] = useState(false);
  const handleClose = () => setAbrir(false);
  const handleAbrir = () => setAbrir(true);

  return (
    <>
      <tr>
        <td>{fecha}</td>
        <td>{usuario}</td>
        <td># {numeroventa}</td>
        <td> ? </td>
        <td>
          {localidad} - {provincia}
        </td>

        <td className="col-4">
          <Button variant="primary" onClick={handleAbrir} size="sm">
            <i class="fab fa-readme"></i>
          </Button>{" "}
        </td>
      </tr>

      {/* modal vista */}
      <Modal show={abrir} onHide={handleAbrir}>
        <Modal.Header>
          <Modal.Title>
            Venta #{numeroventa}
            <br />
            Cliente: {usuario}
            <br />
            Fecha venta: {fecha}
            <br />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>ARTICULOS COMPRADOS</strong>
            <br />
            <br />
            {/* {articulos} */}
          </p>
          <p>
            <strong>DATOS ENVIO</strong>
            <br />
            Calle: {calle} {numero} {piso}
            <br />
            Ciudad: {localidad}
            <br />
            Provincia: {provincia}
            <br />
            Telefono: {telefono}
            <br />
            Observaciones: {observaciones}
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
