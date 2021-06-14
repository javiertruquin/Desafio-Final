import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

export default function FormCrearVendedor({ getUsuarios , accion, usuario, handleClose }) {
  const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    // const history = useHistory();

    const handleSubmit = async (event) => {        
        const form = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (form.checkValidity() === false) {
            return event.stopPropagation();
        }
        try {
            await axios.post("/auth/register", input);
            // localStorage.setItem("token", JSON.stringify(data));
            // setToken(data.token);
            // history.push("/");
            // window.location.replace('/');
            alert('Usuario creado correctamente.')
            handleClose();
        } catch (error) {
            console.log(error.response.data);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        let changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };

  return (
    <>
        <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="txt" onChange={(e) => handleChange(e)} required name="nombre" placeholder="Nombre" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="txt" onChange={(e) => handleChange(e)} required name="apellido" placeholder="Apellido" />
        </Form.Group>
        <Form.Group className="my-4" controlId="exampleForm.ControlInput2">
          <Form.Control type="mail" onChange={(e) => handleChange(e)} required name="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="my-4" controlId="exampleForm.ControlInput3">
          <Form.Control type="password" placeholder="Contraseña" required />
          <Form.Control className="mt-2" onChange={(e) => handleChange(e)} required name="password" type="password" placeholder="Repetir contraseña" />
        </Form.Group>
        <Form.Group className="my-4" controlId="exampleForm.ControlSelect1">
          <Form.Label>Categoría</Form.Label>
          <Form.Control as="select" onChange={(e) => handleChange(e)} name="rol" required>
            <option>Elige una opcion</option>
            <option value="vendedor">vendedor</option>
            <option value="admin">admin</option>
          </Form.Control>
        </Form.Group>
        {/* <Form.Group>
          <Form.Label>Foto de perfil</Form.Label>
          <Form.File  id="custom-file" label="Cargar Imagen" custom />
        </Form.Group> */}
        <Row>
          <Button type="submit" className="mx-auto">
            { accion === 'crear' ? ('Crear usuario') : ('Guardar usuario')}
          </Button>
        </Row>
      </Form>
    </>
  );
}
