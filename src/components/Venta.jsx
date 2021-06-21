import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, InputGroup, Nav } from "react-bootstrap";
import VentaIndividual from "./VentaIndividual";

export default function Venta({ venta, getVentas, index }) {
  // const { _id, usuario, numeroventa, fecha } = venta;
  // const { localidad, provincia, calle, numero, piso, telefono, observaciones } =
  //   venta.domicilio[0];
  const [abrir, setAbrir] = useState(false);
  const handleClose = () => setAbrir(false);
  const handleAbrir = () => setAbrir(true);
  const date = new Date();

  
  let cantidad = 0;
  for (let i = 0; i < venta.carrito?.length; i++) {
    const element = venta.carrito[i];
    cantidad = cantidad + element.cantidad;
  }
  
  console.log('venta', venta)
  return (
    <>
      <tr>
        <td>{index}</td>
        <td className="col-2">{venta.fecha}</td>
        <td>{venta.usuario.email}</td>
        <td className="col-1">{cantidad}</td>
        <td>${venta.total}</td>

        <td className="col-2">
          <Button variant="primary" onClick={handleAbrir} size="sm">
            <i class="fab fa-readme"></i>
          </Button>{" "}
        </td>
      </tr>

      {/* modal vista */}
      <Modal show={abrir} onHide={handleAbrir}>
        <Modal.Header>
          <Modal.Title>
            Venta #{index}
            <br />
            Cliente: {venta.usuario.email}
            <br />
            Fecha venta: {venta.fecha}
            <br />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>ARTICULOS COMPRADOS</strong>
            <br />
            
            {venta.carrito.map((carrito) => (
              <VentaIndividual carrito={carrito} />
              // console.log('carrito', carrito)
            ))}
            
            
            
            <br />  
            <strong className="pr-2">Total:</strong> {venta.total}
            <hr />
          </p>
          <p>
            <strong>DATOS ENVIO</strong>
            <br />
            <strong className="pr-2">Calle:</strong> {venta.domicilio[0]?.calle} {venta.domicilio[0]?.numero} {venta.piso}
            <br />
            <strong className="pr-2">Ciudad:</strong> {venta.domicilio[0]?.localidad}
            <br />
            <strong className="pr-2">Provincia:</strong> {venta.domicilio[0]?.provincia}
            <br />
            <strong className="pr-2">Telefono:</strong> {venta.domicilio[0]?.telefono}
            <br />
            <strong className="pr-2">Observaciones:</strong> {venta.domicilio[0]?.observaciones}
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
