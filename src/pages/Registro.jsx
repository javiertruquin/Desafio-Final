import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Registro({ setToken }) {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    const history = useHistory();

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (form.checkValidity() === false) {
            return event.stopPropagation();
        }
        try {
            const { data } = await axios.post("/auth/register", input);
            localStorage.setItem("token", JSON.stringify(data));
            setToken(data.token);
            history.push("/");
            // window.location.replace('/');
        } catch (error) {
            console.log(error.response.data);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        let changedInput = { ...input,[name]: value };
        setInput({...changedInput, roll: 'usuario'});
    };

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{ width: "777px" }}
            className="container card mx-auto pt-2 pr-4 pl-4 mt-4"
        >
            <h2
                style={{ width: "421px" }}
                className="mx-auto text-center p-4 mb-2 titulo-azul"
            >
                Ingresá tus datos
            </h2>
            <MDBContainer className="mb-4">
                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            maxlength="30"
                            name="nombre"
                            onChange={(e) => handleChange(e)}
                            required
                            type="text"
                            label="Nombre/s"
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            maxlength="30"
                            name="apellido"
                            onChange={(e) => handleChange(e)}
                            required
                            type="text"
                            label="Apellido"
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            maxlength="30"
                            name="email"
                            onChange={(e) => handleChange(e)}
                            required
                            type="text"
                            label="E-mail"
                            style={{width:"50%"}}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            minLength="6"
                            maxlength="30"
                            name="password"
                            onChange={(e) => handleChange(e)}
                            type="password"
                            aria-describedby="inputGroupPrepend"
                            required
                            label="Contraseña"
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            minLength="6"
                            maxlength="30"
                            name="password"
                            onChange={(e) => handleChange(e)}
                            type="password"
                            aria-describedby="inputGroupPrepend"
                            required
                            label="Confirmar Contraseña"
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <button
                type="submit"
                style={{ width: "40%" }}
                className="mx-auto mt-4 mb-2 btn-categoria"
            >
                REGISTRARSE
            </button>
            <p className="mt-1 mb-5 text-center advertencia-registro">
                Asegurate de tener acceso al e-mail que ingresaste
            </p>
        </Form>
    );
}
