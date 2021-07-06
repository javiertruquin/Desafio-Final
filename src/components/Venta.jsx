import { React, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import VentaIndividual from "./VentaIndividual";

export default function Venta({ venta, index }) {
  const [abrir, setAbrir] = useState(false);
  const handleClose = () => setAbrir(false);
  const handleAbrir = () => setAbrir(true);

  
  let cantidad = 0;
  for (let i = 0; i < venta.carrito?.length; i++) {
    const element = venta.carrito[i];
    cantidad = cantidad + element.cantidad;
  }
  const fechaSinFormatear = new Date(venta.fecha)
  const fechaFormateada = fechaSinFormatear.toLocaleString()

  return (
    <>
      <tr>
        <td>{index}</td>
        <td className="col-2">{fechaFormateada}</td>
        <td>{venta.usuario.email}</td>
        <td className="col-1">{cantidad}</td>
        <td>${venta.total}</td>

        <td className="col-2">
          <Button variant="primary" onClick={handleAbrir} size="sm">
            <i className="fab fa-readme"></i>
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
            Fecha venta: {fechaFormateada}
            <br />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>ARTICULOS COMPRADOS</strong>
            <br />
            
            {venta.carrito.map((carrito, index) => (
              <VentaIndividual key={index} carrito={carrito} />
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
