import { React, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import CardProductoAdmin from "./CardProductoAdmin";
import FormEditar from "./FormEditar";

export default function ProductosAdmin() {
  const [crear, setCrear  ] = useState(false);

  const handleClose = () => setCrear  (false);
  const handleCrear = () => setCrear  (true);

  return (
    <div>
      <Container className="">
        <div className="text-center py-5">
          <Button
            className="py-3 px-5"
            variant="secondary"
            onClick={handleCrear}
          >
            Agregar Producto
          </Button>{" "}
        </div>

        <CardProductoAdmin />
        <CardProductoAdmin />
        <CardProductoAdmin />
        <CardProductoAdmin />
      </Container>

      {/* Modal's */}
      <Modal show={crear} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormEditar />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
