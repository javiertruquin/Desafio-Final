import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import compu1 from "../assets/img/compu2/compu2-1.jpeg";
import compu2 from "../assets/img/compu2/compu2-2.jpeg";
import compu3 from "../assets/img/compu2/compu2-3.jpeg";

export default function SeccionCarrito2() {
    return (
        <div className="container p-4 mt-4">
            <div className=" border-bottom mb-4">
                <h2 className="mx-auto mb-3 text-center titulo-azul">
                    Mi Carrito
                </h2>
            </div>

            <div className="row">
                {/* PRODUCTOS */}
                <div className="col-12">
                    <div className="card border-1 mb-3" style={{ "min-height": "90px" }}>
                        <div className="row m-auto mx-0 ">
                            <div className="col-1 m-auto px-0">
                                <img
                                    src={compu1}
                                    className="img-fluid ms-2"
                                    alt="img"
                                />
                            </div>
                            <div className="col-10 m-auto px-0">
                                <div className="row">
                                    <div className="col-12 col-xl-5 m-auto">
                                        <h5 className="d-flex my-auto ms-3">
                                            <a href="">
                                                <div
                                                    style={{
                                                        "font-size": "80%",
                                                    }}
                                                    className="text-fluid"
                                                >
                                                    Notebook HP 15-Dy2051la 15.6
                                                    " Intel Core i3 8 GB DDR4
                                                </div>
                                            </a>
                                        </h5>
                                    </div>
                                    <div className="col-4 col-xl-2 m-auto text-center text-xl-left ">
                                        <div
                                            style={{ "font-size": "80%" }}
                                            className="h-50"
                                        >
                                            Precio:
                                        </div>
                                        <div>$55.999</div>
                                    </div>
                                    <div className="col-4 col-xl-2 m-auto text-center text-xl-left">
                                        <div
                                            style={{ "font-size": "80%" }}
                                            className="h-50"
                                        >
                                            Cantidad:
                                        </div>
                                        <select className="w-100 text-center text-xl-left">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="col-4 col-xl-2 m-auto text-center text-xl-left">
                                        <div
                                            style={{ "font-size": "80%" }}
                                            className="h-50 m-0"
                                        >
                                            Subtotal:
                                        </div>
                                        <div>$55.999</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 text-center m-auto px-0">
                                <a>
                                    <i className=" text-danger fas fa-trash-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card border-1 mb-3" style={{ "min-height": "90px" }}>
                        <div className="row m-auto mx-0 ">
                            <div className="col-1 m-auto px-0">
                                <img
                                    src={compu2}
                                    className="img-fluid ms-2"
                                    alt="img"
                                />
                            </div>
                            <div className="col-10 m-auto px-0">
                                <div className="row">
                                    <div className="col-12 col-xl-5 m-auto">
                                        <h5 className="d-flex my-auto ms-3">
                                            <a href="">
                                                <div
                                                    style={{
                                                        "font-size": "80%",
                                                    }}
                                                    className="text-fluid"
                                                >
                                                    Notebook HP 9ZE38UT#ABA 15.6
                                                    " Intel Core i5 4 GB DDR4
                                                    500GB
                                                </div>
                                            </a>
                                        </h5>
                                    </div>
                                    <div className="col-4 col-xl-2 m-auto text-center text-xl-left ">
                                        <div
                                            style={{ "font-size": "80%" }}
                                            className="h-50"
                                        >
                                            Precio:
                                        </div>
                                        <div>$45.999</div>
                                    </div>
                                    <div className="col-4 col-xl-2 m-auto text-center text-xl-left">
                                        <div
                                            style={{ "font-size": "80%" }}
                                            className="h-50"
                                        >
                                            Cantidad:
                                        </div>
                                        <select className="w-100 text-center text-xl-left">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="col-4 col-xl-2 m-auto text-center text-xl-left">
                                        <div
                                            style={{ "font-size": "80%" }}
                                            className="h-50 m-0"
                                        >
                                            Subtotal:
                                        </div>
                                        <div>$45.999</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 text-center m-auto px-0">
                                <a>
                                    <i className=" text-danger fas fa-trash-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card border-1 mb-3" style={{ "min-height": "90px" }}>
                        <div className="row m-auto mx-0 ">
                            <div className="col-1 m-auto px-0">
                                <img
                                    src={compu3}
                                    className="img-fluid ms-2"
                                    alt="img"
                                />
                            </div>
                            <div className="col-10 m-auto px-0">
                                <div className="row">
                                    <div className="col-12 col-xl-5 m-auto">
                                        <h5 className="d-flex my-auto ms-3">
                                            <a href="">
                                                <div
                                                    style={{
                                                        "font-size": "80%",
                                                    }}
                                                    className="text-fluid"
                                                >
                                                    Notebook HP 14-Ck2096la 14 "
                                                    Intel Celeron 4 GB 500GB
                                                </div>
                                            </a>
                                        </h5>
                                    </div>
                                    <div className="col-4 col-xl-2 m-auto text-center text-xl-left ">
                                        <div
                                            style={{ "font-size": "80%" }}
                                            className="h-50"
                                        >
                                            Precio:
                                        </div>
                                        <div>$62.999</div>
                                    </div>
                                    <div className="col-4 col-xl-2 m-auto text-center text-xl-left">
                                        <div
                                            style={{ "font-size": "80%" }}
                                            className="h-50"
                                        >
                                            Cantidad:
                                        </div>
                                        <select className="w-100 text-center text-xl-left">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="col-4 col-xl-2 m-auto text-center text-xl-left">
                                        <div
                                            style={{ "font-size": "80%" }}
                                            className="h-50 m-0"
                                        >
                                            Subtotal:
                                        </div>
                                        <div>$62.999</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 text-center m-auto px-0">
                                <a>
                                    <i className=" text-danger fas fa-trash-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Resumen */}
                <div className="col-12 col-xl-6 ms-auto">
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
                    </div>
                </div>
            </div>
        </div>
    );
}
