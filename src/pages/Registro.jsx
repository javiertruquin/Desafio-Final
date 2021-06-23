import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";


export default function Registro({ setToken }) {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    const history = useHistory();
    const [passCheck1, setPasCheck1] = useState("")
    const [passCheck2, setPasCheck2] = useState("")


    const handleSubmit = async (event) => {        
        const form = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (form.checkValidity() === false) {
            return event.stopPropagation();
        }
        if (passCheck1!=passCheck2) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Contraseñas no coinciden",
                timer: 1800,
                showConfirmButton: false,
            });
            return
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
        let changedInput = { ...input, [name]: value };
        setInput({ ...changedInput, rol: "usuario" });
        setPasCheck1(changedInput.password1);
        setPasCheck2(changedInput.password);
    };

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{ width: "777px" }}
            className="container card mx-auto pt-2 pr-4 pl-4 mt-4 "
            
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
                            maxLength="30"
                            name="nombre"
                            onChange={(e) => handleChange(e)}
                            required
                            type="text"
                            label="Nombre/s"
                        >
                            <div className="invalid-feedback">
                                Ingrese su nombre aquí
                            </div>
                        </MDBInput>
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            maxLength="30"
                            name="apellido"
                            onChange={(e) => handleChange(e)}
                            required
                            type="text"
                            label="Apellido"
                        >
                            <div className="invalid-feedback">
                                Ingrese su apellido aquí
                            </div>
                        </MDBInput>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            maxLength="50"
                            name="email"
                            onChange={(e) => handleChange(e)}
                            required
                            type="email"
                            label="E-mail"
                        >
                            <div className="invalid-feedback">
                                Ingrese su e-mail aquí
                            </div>
                        </MDBInput>
                    </MDBCol>
                    <MDBCol></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBInput
                            minLength="6"
                            maxLength="30"
                            name="password1"
                            onChange={(e) => handleChange(e)}
                            type="password"
                            aria-describedby="inputGroupPrepend"
                            required
                            label="Contraseña"
                        >
                            <div className="invalid-feedback">
                                Ingrese una contraseña de entre 6 y 30 caracteres
                            </div>
                        </MDBInput>
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            minLength="6"
                            maxLength="30"
                            name="password"
                            onChange={(e) => handleChange(e)}
                            type="password"
                            aria-describedby="inputGroupPrepend"
                            required
                            label="Confirmar Contraseña"
                            >
                            <div className="invalid-feedback">
                                Ingrese nuevamente la contraseña aquí
                            </div>
                        </MDBInput>
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
