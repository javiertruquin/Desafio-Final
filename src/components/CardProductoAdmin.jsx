import { React, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import compu2 from "../assets/img/compu2/compu2-3.jpeg";

export default function CardProductoAdmin({ producto }) {
  const [show, setShow] = useState(false);
  const { codigo, titulo, descripcion, categoria, stock, image1 } = producto;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="mb-3 mt-5">
        <div className="row">
          <div className="col-lg-2 my-auto">
            <div className="categoria-productos">
              <img
                src={image1}
                alt=""
                className="img-fluid"
                style={{ minHeight: "120px", width: "100%" }}
              />
            </div>
          </div>
          <div
            className="col-lg-8"
            style={{ backgroundColor: "rgb(137, 137, 137)", color: "white" }}
          >
            <div className="datos-productos">
              <span className="titulo-producto-dash">{titulo}</span>
              <div className="py-2 descrip-producto-dash">
                <strong>Descripción:</strong> {descripcion}
              </div>
              <div>
                <strong>Stock:</strong> {stock}
              </div>
            </div>
          </div>
          <div className="col-lg-2" style={{ backgroundColor: "#666666" }}>
            <div className="botones-productos d-block">
              {/* <Button variant="primary" onClick={handleShow}>
              <i class="fas fa-info-circle pe-2"></i> Ver
              </Button> */}
              <button className="btn-ver mb-2 mx-1" onClick={handleShow}>
                <i class="fas fa-info-circle pe-2"></i> Ver
              </button>
              <button className="btn-editar mb-2 mx-1">
                <i class="far fa-edit pe-2"></i> Editar
              </button>
              <button className="btn-eliminar mb-2 mx-1">
                <i class="far fa-trash-alt pe-2"></i> Eliminar
              </button>
            </div>
          </div>
        </div>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
