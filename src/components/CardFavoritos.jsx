import React from "react";
import compu2 from "../assets/img/compu2.jpeg";

export default function CardFavoritos() {
  return (
    <>
      <div className="d-flex card-favoritos">
        <div className="col-6">
          <img src={compu2} alt="" className="img-fluid" />
        </div>
        <div className="col-6">
          <button className="btn-serie">Serie Advance</button>
          <p className="titulo-producto">Estación de trabajo HP Z2 Mini G4</p>
          <span className="precio-producto">$64.000</span> <br />
          <span>
            {" "}
            <button className="btn-heart">
              {" "}
              <i class="fas fa-heart"></i>
            </button>
          </span>
          <span>
            {" "}
            <button className="btn-cart">
              {" "}
              <i class="fas fa-shopping-cart"></i>
            </button>
          </span>
          <button className="btn-comprar mt-2">Comprar</button>
        </div>
      </div>
    </>
  );
}
