import React from 'react';
import { Card } from 'react-bootstrap';
import imagenPrueba from '../assets/img/compu1/compu1-1.jpg'

export default function CardMisCompras(producto) {

  const { codigo, titulo, descripcion, precio, creator, registro, categoria, serie, stock, image1 } = producto;

  return (
    <>
        <Card className="mb-3 mt-5">
        <div className="row">
          <div className="col-lg-2 my-auto">
            <div className="categoria-productos">
              <img
                src={imagenPrueba}
                alt=""
                className="img-fluid"
                style={{ minHeight: "120px", width: "100%" }}
              />
            </div>
          </div>
          <div
            className="col-lg-7"
            style={{ backgroundColor: "rgb(137, 137, 137)", color: "white" }}
          >
            <div className="datos-productos">
              <span className="titulo-producto-dash">Título</span>
              <div className="py-2 descrip-producto-dash">
                <strong>Descripción:</strong> Aqui va la descripción
              </div>
              <div>
                <strong>Stock:</strong> Aca el Stock
              </div>
            </div>
          </div>
          <div className="col-lg-3" style={{ backgroundColor: "#666666" }}>
            <div className="botones-productos d-block">
              {/* <Button variant="primary" onClick={handleShow}>
              <i className="fas fa-info-circle pe-2"></i> Ver
              </Button> */}
              <button className="btn-sm btn-ver mb-2 mx-1">
                <i className="fas fa-info-circle pe-2"></i> Ver detalles
              </button>
              <button className="btn-sm btn-editar mb-2 mx-1">
                <i className="far fa-edit pe-2"></i> Repetir pedido
              </button>
              {/* <button className="btn-eliminar mb-2 mx-1" onClick={eliminar}>
                <i className="far fa-trash-alt pe-2"></i> Eliminar
              </button> */}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
