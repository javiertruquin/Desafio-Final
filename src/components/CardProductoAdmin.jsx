import axios from "axios";
import { React, useState } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";
import FormEditar from "./FormEditar";

export default function CardProductoAdmin({ producto, getProductos }) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const {
    codigo,
    titulo,
    descripcion,
    precio,
    creator,
    registro,
    categoria,
    serie,
    stock,
    image1,
    _id,
  } = producto;

  const eliminar = async (event) => {
    // event.preventDefault();
    const confirma = window.confirm(
      "Estas seguro que desea eliminar este producto?"
    );
    if (confirma) {
      try {
        await axios.delete("/producto/" + _id);
        getProductos();
        alert("Producto eliminado con éxito!😁");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    try {
      const productoModificado = { [name]: value , id: producto._id };
      await axios.put("/producto", productoModificado);
      getProductos();
      alert("Producto editado con éxito!😁");
    } catch (error) {
      console.log(error);
    }
  };

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
              <i className="fas fa-info-circle pe-2"></i> Ver
              </Button> */}
              <button className="btn-ver mb-2 mx-1" onClick={handleShow}>
                <i className="fas fa-info-circle pe-2"></i> Ver
              </button>
              <button className="btn-editar mb-2 mx-1" onClick={handleShow2}>
                <i className="far fa-edit pe-2"></i> Editar
              </button>
              <button className="btn-eliminar mx-1" onClick={eliminar}>
                <i className="far fa-trash-alt pe-2"></i> Eliminar
              </button>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                  {/* <Form.Label></Form.Label> */}
                  <Form.Control
                  as="select"
                  name="habilitado"
                  size="sm"
                  custom
                  onChange={(e) => handleChange(e)}
                  defaultValue={producto.habilitado}
                  >
                    <option value={true}>Habilitado</option>
                    <option value={false}>Deshabilitado</option>
                  </Form.Control>
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                  Submit
                </Button> */}
              </Form>
            </div>
          </div>
        </div>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Codigo:</strong> {codigo}
          </p>
          <p>
            <strong>Descripción:</strong> {descripcion}
          </p>
          <p>
            <strong>Categoria:</strong> {categoria}
          </p>
          <p>
            <strong>Serie:</strong> {serie}
          </p>
          <p>
            <strong>Precio Actual:</strong> {precio}
          </p>
          <p>
            <strong>Stock Actual:</strong> {stock}
          </p>
          <p>
            <strong>Fecha de registro:</strong> {registro}
          </p>
          <p>
            <strong>Cargado por:</strong> {creator}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEditar
            getProductos={getProductos}
            producto={producto}
            accion={"editar"}
          />
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
