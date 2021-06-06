import { MDBInput } from "mdbreact";
import React from "react";
import { Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SeccionEnvio() {
    return (
        <div className="container p-4 mt-4">
            <div className=" border-bottom mb-4">
                <h2 className="mx-auto mb-3 text-center titulo-azul">
                    Ingrese su dirección
                </h2>
            </div>
            <Form className="col-12 col-md-10 mt-2">
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-6">
                            <MDBInput required type="text" label="Provincia" />
                        </div>
                        <div className="col-6">
                            <MDBInput required type="text" label="Localidad" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <MDBInput required type="text" label="Calle" />
                        </div>
                        <div className="col-6">
                            <MDBInput required type="number" label="Número" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <MDBInput type="text" label="Piso / Departamento" />
                        </div>
                        <div className="col-6">
                            <MDBInput
                                required
                                type="number"
                                label="Teléfono de contacto"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="">
                            <MDBInput
                                type="textarea"
                                label="Indicaciones adicionales"
                                rows="4"
                            />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <Nav.Link to="/pago" as={NavLink} className="">
                        <button type="button" class="btn-comprar">
                            Continuar compra
                        </button>
                    </Nav.Link>
                </div>
            </Form>
        </div>
    );
}
