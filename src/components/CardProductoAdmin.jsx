import React from "react";
import { Card } from "react-bootstrap";
import compu2 from "../assets/img/compu2/compu2-3.jpeg";

export default function CardProductoAdmin() {
  return (
    <>
      <Card className="mb-3 mt-5">
        <div className=" p-0 row">
          <div className="col-lg-2 my-auto">
            <div className="categoria-productos">
              <img src={compu2} alt="" className="img-fluid" style={{ minHeight: '120px', width: '100%' }} />
            </div>
          </div>
          <div className="col-lg-8" style={{ backgroundColor: 'rgb(137, 137, 137)', color: 'white', }}>
            <div className="datos-productos">
              <span className="titulo-producto-dash">Notebook Asus 12Gb 500Gb 17"</span>
              <div className="py-2 descrip-producto-dash">
                <strong>Descripción:</strong> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Debitis ratione iusto facilis itaque
              hic tempore quibusdam
              </div>
              <div>
                <strong>Stock:</strong> 10
              </div>
            </div>


          </div>
          <div className="col-lg-2" style={{ backgroundColor: '#666666' }}>
            <div className="botones-productos">
              <button className="btn-ver mb-2 mx-1"><i class="fas fa-info-circle pe-2"></i> Ver</button>
              <button className="btn-editar mb-2 mx-1"><i class="far fa-edit pe-2"></i> Editar</button>
              <button className="btn-eliminar mb-2 mx-1"><i class="far fa-trash-alt pe-2"></i> Eliminar</button>

            </div>
          </div>

        </div>
      </Card>
    </>
  );
}
