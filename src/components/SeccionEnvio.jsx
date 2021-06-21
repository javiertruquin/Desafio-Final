import { MDBInput } from "mdbreact";
import { React, useState } from "react";
import { Form, Nav } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

export default function SeccionEnvio() {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    let history = useHistory();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let changedInput = { ...input, [name]: value };
        setInput({ ...changedInput });
    };

    const enviarDatos = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (form.checkValidity() === false) {
            return event.stopPropagation();
        }


        // try {
        //         axios.post("/venta", { domicilio: input });
        //         alert("Datos de venta recibidos satisfactoriamente");
        //     history.push("/pago/");
        // } catch (error) {
        //     console.log("enviarDatos ~ error", error);
        // }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-7">
                    <span className="titulo-azul">Dirección</span>
                    <p className="ps-lg-3 pt-3 pt-lg-0 texto-favoritos fuente">
                        Ingresá la dirección donde queres el envío
                    </p>
                </div>
                <div className="col-2"></div>
                <div className="col-2 text-center pt-3">
                    <i
                        style={{ color: "#00598a", fontSize: "22pt" }}
                        className="fas fa-home text-center "
                    ></i>
                    <p
                        className="sub-mision pt-1"
                        style={{ "font-size": "70%" }}
                    >
                        DIRECCIÓN
                    </p>
                </div>
            </div>
            <hr className=" mt-3" style={{ border: "0.3px solid #ababab" }} />
            <Form
                noValidate
                validated={validated}
                onSubmit={enviarDatos}
                className="col-12 col-md-10 mt-2 needs-validation"
            >
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-6">
                            <MDBInput
                                required
                                type="text"
                                maxlength="30"
                                label="Provincia"
                                onChange={(event) => handleInputChange(event)}
                                name="provincia"
                            >
                                <div className="invalid-feedback">
                                    Ingrese su provincia aquí
                                </div>
                            </MDBInput>
                        </div>
                        <div className="col-6">
                            <MDBInput
                                required
                                type="text"
                                maxlength="30"
                                label="Localidad"
                                onChange={(event) => handleInputChange(event)}
                                name="localidad"
                            >
                                <div className="invalid-feedback">
                                    Ingrese su localidad aquí
                                </div>
                            </MDBInput>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <MDBInput
                                required
                                type="text"
                                maxlength="30"
                                label="Calle"
                                onChange={(event) => handleInputChange(event)}
                                name="calle"
                            >
                                <div className="invalid-feedback">
                                    Ingrese su Calle aquí
                                </div>
                            </MDBInput>
                        </div>
                        <div className="col-6">
                            <MDBInput
                                required
                                type="number"
                                maxlength="30"
                                label="Número"
                                onChange={(event) => handleInputChange(event)}
                                name="numero"
                            >
                                <div className="invalid-feedback">
                                    Ingrese su Numero aquí
                                </div>
                            </MDBInput>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <MDBInput
                                type="text"
                                label="Piso / Departamento"
                                onChange={(event) => handleInputChange(event)}
                                name="piso"
                            ></MDBInput>
                        </div>
                        <div className="col-6">
                            <MDBInput
                                required
                                type="number"
                                label="Teléfono de contacto"
                                maxlength="30"
                                minlength="7"
                                onChange={(event) => handleInputChange(event)}
                                name="telefono"
                            >
                                <div className="invalid-feedback">
                                    Ingrese su numero de teléfono aquí
                                </div>
                            </MDBInput>
                        </div>
                    </div>
                    <div className="row">
                        <div className="">
                            <MDBInput
                                type="textarea"
                                label="Indicaciones adicionales"
                                rows="4"
                                maxlength="250"
                                onChange={(event) => handleInputChange(event)}
                                name="observaciones"
                            ></MDBInput>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    {/* <Nav.Link to="/pago" as={NavLink} className=""> */}
                    <button className="btn-comprar" type="submit">
                        Continuar compra
                    </button>
                    {/* </Nav.Link> */}
                </div>
            </Form>
        </div>
    );
}
