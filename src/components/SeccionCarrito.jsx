import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import compu1 from "../assets/img/compu2/compu2-1.jpeg";
import compu2 from "../assets/img/compu2/compu2-2.jpeg";
import compu3 from "../assets/img/compu2/compu2-3.jpeg";
import CardCarrito from "../components/CardCarrito";
import axios from "axios";

export default function SeccionCarrito() {

    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const getCarrito = async () => {
            const response = await axios.get(`/auth`);
            console.log("getCarrito ~ response", response);
            setCarrito(response.data.carrito);
        };
        getCarrito();
    }, []);

    return (
        <div className="container my-4 fuente">
            <div className=" border-bottom mb-4">
                <h2 className="mx-auto mb-3 text-center titulo-azul">
                    Mi Carrito
                </h2>
            </div>

            <div className="row">
                {/* PRODUCTOS */}
                {carrito.map((carrito) => (
                    <CardCarrito carrito={carrito} />
                ))}
                ;{/* Resumen */}
                <div className="col-12 col-sm-6 col-lg-4 ms-auto">
                    <div
                        className="container card border-1 mb-3"
                        style={{ height: "90px" }}
                    >
                        <div className=" border-bottom mt-2">
                            <h5 className="text-start">Resumen de Compra:</h5>
                        </div>
                        <div className="my-2 font-weight-light d-flex justify-content-between">
                            <div>Total:</div>
                            <div>$164.997</div>
                        </div>
                    </div>
                    <div className="text-end p-0 d-flex justify-content-between">
                        <Nav.Link to="/" as={NavLink} className="p-0 my-auto">
                            <a>Compra más productos</a>
                        </Nav.Link>
                        <Nav.Link to="/envio" as={NavLink} className="p-0">
                            <button type="button" className="btn-comprar ">
                                Continuar compra
                            </button>
                        </Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
