import { React, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import CardProductoAdmin from "./CardProductoAdmin";
import FormEditar from "./FormEditar";

export default function ProductosAdmin() {
  const [crear, setCrear] = useState(false);

  const handleClose = () => setCrear(false);
  const handleCrear = () => setCrear(true);

  return (
    <div>
      <Container className="">
        <div className="row bg-fondo-producto-admin img-fluid">
          <div className="col-6">
            <span className="titulo-dash">Click aquí para crear un producto</span>
            
          </div>
          <div className="col-6 text-center py-5">
            <div className=" mx-5"><button onClick={handleCrear} className="btn-dash">
            <i class="fas fa-plus-square"></i> Agregar producto
            </button></div>
            
            {/* <Button
              className="py-3 px-5"
              variant="secondary"
              onClick={handleCrear}
            >
              Agregar Producto
          </Button>{" "} */}
          </div>

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
