import React from "react";
import { Button, Card } from "react-bootstrap";
import compu2 from "../assets/img/compu2.jpeg";

export default function CardProductoAdmin() {
  return (
    <>
      <Card className="mb-3">
        <Card.Body className=" p-0 row">
          <div className="col-lg-2 my-auto">
            <div className="categoria-productos">
              <img src={compu2} alt="" className="img-fluid" style={{minHeight:'120px', width:'100%'}}/>
            </div>
          </div>
          <div className="col-lg-8" style={{backgroundColor:'rgb(137, 137, 137)', color:'white', }}>
            <div className="datos-productos">
              <strong>Notebook Asus 12Gb 500Gb 17"</strong>
              <div className="py-2">
                <strong>Descripción:</strong> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Debitis ratione iusto facilis itaque
              hic tempore quibusdam
            </div>
              <div>
                <strong>Stock:</strong> 10
            </div>
            </div>


          </div>
          <div className="col-lg-2">
            <div className="botones-productos">
              <Button variant="primary">
                <i class="fas fa-info-circle"></i> Ver
              </Button>{" "}
              <Button className="my-1">
                <i class="far fa-edit"></i> Editar
              </Button>{" "}
              <Button variant="danger">
                <i class="far fa-trash-alt"></i> Eliminar
              </Button>{" "}
            </div>
          </div>

        </Card.Body>
      </Card>
    </>
  );
}
