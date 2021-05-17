import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

export default function FormEditar() {
  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="txt" placeholder="Título del producto" />
        </Form.Group>
        <Form.Group className="my-4" controlId="exampleForm.ControlInput2">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="txt" placeholder="Marca" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Descripción</Form.Label> */}
          <Form.Control as="textarea" rows={3} placeholder="Descripción" />
        </Form.Group>
        <div className="my-4">
          <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
            Precio
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="inlineFormInputGroupUsername"
              placeholder="Precio"
            />
          </InputGroup>
        </div>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Stock</Form.Label>
          <Form.Control type="number" placeholder="Stock" />
        </Form.Group>
        <Form.Group className="my-4" controlId="exampleForm.ControlSelect1">
          <Form.Label>Categoría</Form.Label>
          <Form.Control as="select">
            <option>Computadora de escritorio</option>
            <option>Laptop</option>
            <option>Accesorios</option>
            <option>Componentes</option>
            <option>Repuestos</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.File id="custom-file" label="Cargar Imagen" custom />
          <Form.File className="my-2" id="custom-file" label="Cargar Imagen" custom />
          <Form.File id="custom-file" label="Cargar Imagen" custom />
        </Form.Group>
      </Form>
    </>
  );
}
