import axios from "axios";
import { Form, Button, FormGroup } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import { NavLink, useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
import NavReactB from "../components/NavReactB";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Login({ setUser, setToken }) {
    const [input, setInput] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        const { value, name } = event.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("/auth/login", input);
            localStorage.setItem("token", JSON.stringify(data));
            setToken(data.token);
            alert("Logueo exitoso 😎 ");
            history.push("/");
        } catch (error) {
            // console.log(error.response.data);
            alert("datos incorrectos.");
        }
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 text-center p-4 mb-2 titulo-azul">
                        <p className="texto-verde-grande">¡Hola!</p>
                        <p>Para continuar ingresá tu email y contraseña</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-lg-7 col-md-12 my-auto">
                        <div className="row align-items-lg-end">
                            <div className="col-md-12 gray-text">
                                <Form
                                    onSubmit={handleSubmit}
                                    className="pt-2 pr-4 pl-4 mt-4"
                                >
                                    <Form.Group controlId="formBasicEmail">
                                        <MDBInput
                                            name="email"
                                            onChange={handleChange}
                                            className="input2"
                                            type="email"
                                            label="Escribe tu email"
                                            rows="2"
                                            icon="at"
                                            required
                                            validate
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <MDBInput
                                            name="password"
                                            onChange={handleChange}
                                            type="password"
                                            label="Escribe tu contraseña"
                                            rows="2"
                                            icon="key"
                                            required
                                            validate
                                        />
                                    </Form.Group>

                                    {/* <div className="col-lg-1 col-md-12"></div> */}
                                    <div className="row">
                                    <div className="col-lg-6 mr-md-auto">
                                        <button
                                            type="submit"
                                            style={{ width: "100%" }}
                                            className="mx-auto mt-4 mb-2 btn-categoria"
                                        >
                                            Entrar
                                        </button>
                                        <a
                                            href="/"
                                            className="mx-auto text-center mb-4"
                                        >
                                            <p className="li-footer">
                                                {" "}
                                                ¿Olvidaste la contraseña?
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 text-center pt-4">
                                        
                                            <span className="textito-azul-login">Si aún no estás registrado, hacé</span>
                                            <Nav.Link to="/registro" as={NavLink} className="boton-aqui">
                                                click AQUÍ
                                            </Nav.Link>
                                        
                                    </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
