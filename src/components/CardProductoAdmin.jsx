import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CardProductoAdmin() {
  return (
    <>
      <Card className="mb-3">
        <Card.Body className="d-flex p-0">
          <div className="categoria-productos"></div>
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
          <div className="botones-productos">
            <Button variant="primary">
              <i class="fas fa-info-circle"></i>
            </Button>{" "}
            <Button className="my-1" variant="secondary">
              <i class="far fa-edit"></i>
            </Button>{" "}
            <Button variant="danger">
              <i class="far fa-trash-alt"></i>
            </Button>{" "}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
