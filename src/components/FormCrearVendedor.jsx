import React from 'react';
import { Form } from 'react-bootstrap';

export default function FormCrearVendedor() {
  return (
    <>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="txt" placeholder="Nombre completo" />
        </Form.Group>
        <Form.Group className="my-4" controlId="exampleForm.ControlInput2">
          <Form.Control type="mail" placeholder="email" />
        </Form.Group>
        <Form.Group className="my-4" controlId="exampleForm.ControlInput3">
          <Form.Control type="password" placeholder="Contraseña" />
          <Form.Control className="mt-2" type="password" placeholder="Repetir contraseña" />
        </Form.Group>
        <Form.Group className="my-4" controlId="exampleForm.ControlSelect1">
          <Form.Label>Categoría</Form.Label>
          <Form.Control as="select">
            <option>Vendedor</option>
            <option>Admin</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Foto de perfil</Form.Label>
          <Form.File id="custom-file" label="Cargar Imagen" custom />
        </Form.Group>
      </Form>
    </>
  );
}
