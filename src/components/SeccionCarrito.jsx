import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import CardCarrito from "../components/CardCarrito";


export default function SeccionCarrito({ setUser, carrito, view }) {
  const [precioFinal, setPrecioFinal] = useState(0);

  let total = 0;
  for (let i = 0; i < carrito?.length; i++) {
    const element = carrito[i];
    total = total +(element?.cantidad * element.producto?.precio)
  }
  

  const estiloCards =
    view === "carrito" ? "col-12 col-lg-8 px-lg-3" : "col-12 px-lg-3";
  const estiloTotal =
    view === "carrito" ? "col-12 col-sm-6 col-lg-4 ms-auto" : "col-6 ms-auto";
  return (
    <div className="container my-4 fuente">
      <div className="row">
            <div className="col-7">
              <span className="titulo-azul">Mi carrito</span>
              <p className="ps-lg-2 pt-3 pt-lg-0 texto-favoritos">Elegí los productos que quieras y comprá!</p>
            </div>
            <div className="col-2"></div>
            <div className="col-2 text-center pt-3">
            <i style={{ color: "#00598a", fontSize: "22pt" }} className="fas fa-shopping-cart text-center"></i>
            <p className="sub-mision pt-1" style={{ fontSize: "70%" }}>CARRITO</p>
            </div>
          </div>
          <hr className="mb-5" style={{ border: '0.3px solid #ababab' }} />

      

      <div className="row">
        {/* PRODUCTOS */}
        <div className={estiloCards}>
          {carrito?.map((carrito, index) => (
            <CardCarrito key={carrito._id} carrito={carrito} index={index} setUser={setUser} precioFinal={precioFinal} setPrecioFinal={setPrecioFinal} />
          ))}
        </div>

        <div className={estiloTotal}>
          <div
            className="container card border-1 mb-3"
            style={{ height: "90px" }}
          >
            <div className=" border-bottom mt-2">
              <h5 className="text-start">Resumen de Compra:</h5>
            </div>
            <div className="my-2 font-weight-light d-flex justify-content-between">
              <div>Total:</div>
              {/* {carrito?.map((carrito) =>
                // <CardCarrito carrito={carrito} />
                setPrecioFinal(precioFinal = precioFinal + carrito.precio)
              )} */}
              {/* <div>${precioFinal}</div> */}
              <div>${total}</div>
            </div>
          </div>
          <div className="text-end p-0 d-flex justify-content-between">
            <Nav.Link to="/" as={NavLink} className="p-0 my-auto">
              Compra más productos
            </Nav.Link>
            {view === "carrito" && (
              <Nav.Link to="/envio" as={NavLink} className="p-0">
                <button type="button" className="btn-comprar ">
                  Continuar compra
                </button>
              </Nav.Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
