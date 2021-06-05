import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import compu2 from "../assets/img/compu2/compu2-3.jpeg";

export default function SeccionCarrito() {
    return (
        <div>
            <div className="container mt-5">
                <div className="card">
                    <div className="row p-2 ">
                        <div className="col-2 m-auto">
                            <img src={compu2} className="img-fluid" alt="img" />
                        </div>
                        <div className="col-5 m-auto">
                            <h3 className="d-flex ">
                                <strong>
                                    Estación de trabajo HP Z2 Mini G4
                                </strong>
                            </h3>
                        </div>
                        <div className="col-2 m-auto">
                            <select
                                class="form-select "
                                aria-label="Default select example"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="col-2 m-auto">
                            <h5 className="">
                                <strong>$50000.00</strong>
                            </h5>
                        </div>
                        <div className="col-1 m-auto">
                            <i class="text-danger fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row p-2 ">
                        <div className="col-2 m-auto">
                            <img src={compu2} className="img-fluid" alt="img" />
                        </div>
                        <div className="col-5 m-auto">
                            <h3 className="d-flex ">
                                <strong>
                                    Estación de trabajo HP Z2 Mini G4
                                </strong>
                            </h3>
                        </div>
                        <div className="col-2 m-auto">
                            <select
                                class="form-select "
                                aria-label="Default select example"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="col-2 m-auto">
                            <h5 className="">
                                <strong>$50000.00</strong>
                            </h5>
                        </div>
                        <div className="col-1 m-auto">
                            <i class="text-danger fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row p-2 mt-2">
                        <div className="col-7 m-auto"></div>

                        <div className="col-2 m-auto">
                            <h4 className="">
                                <strong>Total:</strong>
                            </h4>
                        </div>
                        <div className="col-3 m-auto ">
                            <h5 className="">
                                <strong>$100000.00</strong>
                            </h5>
                        </div>
                        <div className="col-1 m-auto "></div>
                    </div>

                    <div className="text-end mt-2">
                        <Nav.Link to="/pago" as={NavLink} className="">
                            <button
                                type="button"
                                class="btn btn-primary mb-4 me-5"
                            >
                                Continuar compra
                            </button>
                        </Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
