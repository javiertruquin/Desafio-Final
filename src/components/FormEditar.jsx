import axios from "axios";
import { React, useState } from "react";
import { Button, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { useHistory } from "react-router";

export default function FormEditar({ getProductos , accion, producto }) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});
  const history = useHistory();
  // const action = accion;

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    
    if (accion === 'crear')
    {
      try {
        // Consulta post a /productos
        await axios.post("/producto", input);
        getProductos()
        alert("Producto creado con éxito!😁");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        // Consulta post a /productos
        const productoModificado = {...input, codigo: producto.codigo};
        console.log('produto modificado' , productoModificado)
        await axios.put("/producto", productoModificado);
        getProductos()
        alert("Producto editado con éxito!😁");
      } catch (error) {
        console.log(error);
      }
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
      onSubmit={handleSubmit}
      >
        {accion === 'crear' && (
          <Form.Group controlId="exampleForm.ControlInput">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              name="codigo"
              onChange={(e) => handleChange(e)}
              type="txt"
              required
              placeholder="Código"
            />
            <Form.Control.Feedback>Todo marcha bien!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Campo requerido!</Form.Control.Feedback>
          </Form.Group>
        )}
        <Form.Group controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            name="titulo"
            onChange={(e) => handleChange(e)}
            type="txt"
            required
            placeholder="Título del producto"
            // placeholder={ accion === 'editar' && producto.titulo || "Título del producto" }
            defaultValue={ accion === 'editar' && producto.titulo }
          />
          <Form.Control.Feedback>Todo marcha bien!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Campo requerido!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-4" controlId="exampleForm.ControlInput2">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            name="serie"
            onChange={(e) => handleChange(e)}
            type="txt"
            placeholder="Serie"
            defaultValue={ accion === 'editar' && producto.serie }
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Descripción</Form.Label> */}
          <Form.Control
            name="descripcion"
            onChange={(e) => handleChange(e)}
            as="textarea"
            required
            rows={3}
            placeholder="Descripción"
            defaultValue={ accion === 'editar' && producto.descripcion }
          />
          <Form.Control.Feedback>Todo marcha bien!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Campo requerido!</Form.Control.Feedback>
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
              required
              name="precio"
              onChange={(e) => handleChange(e)}
              id="inlineFormInputGroupUsername"
              placeholder="Precio"
              defaultValue={ accion === 'editar' && producto.precio }
            />
            <Form.Control.Feedback>Todo marcha bien!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Campo requerido!</Form.Control.Feedback>
          </InputGroup>
        </div>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            name="stock"
            required
            onChange={(e) => handleChange(e)}
            type="number"
            placeholder="Stock"
            defaultValue={ accion === 'editar' && producto.stock }
            placeholder="Stock"
          />
          <Form.Control.Feedback>Todo marcha bien!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Campo requerido!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlSelect1">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            name="categoria"
            required
            onChange={(e) => handleChange(e)}
            as="select"
            defaultValue={ accion === 'editar' && producto.categoria }
          >
            <option>Elige una opción</option>
            <option>Computadora de escritorio</option>
            <option>Notebook</option>
            <option>Accesorios</option>
            <option>Componentes</option>
            <option>Repuestos</option>
          </Form.Control>
          <Form.Control.Feedback>Todo marcha bien!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Campo requerido!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            name="image1"
            required
            onChange={(e) => handleChange(e)}
            type="url"
            // placeholder="URL Imagen 1"
            defaultValue={ accion === 'editar' && producto.image1 }
            placeholder="URL Imagen 1"

          />
          <Form.Control.Feedback>Todo marcha bien!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Campo requerido!</Form.Control.Feedback>
          <Form.Control
            name="image2"
            onChange={(e) => handleChange(e)}
            type="url"
            // placeholder="URL Imagen 1"
            defaultValue={ accion === 'editar' && producto.image2 }
            placeholder="URL Imagen 2"
          />
          <Form.Control
            name="image3"
            onChange={(e) => handleChange(e)}
            type="url"
            placeholder="URL Imagen 3"
            defaultValue={ accion === 'editar' && producto.image3 }
            // placeholder="URL Imagen 1"
          />
          {/* <Form.Control type="url" placeholder="URL Imagen 3" /> */}
          {/* <Form.File id="custom-file" label="Cargar Imagen" custom />
          <Form.File className="my-2" id="custom-file" label="Cargar Imagen" custom />
          <Form.File id="custom-file" label="Cargar Imagen" custom /> */}
        </Form.Group>
        <Row>
          <Button type="submit" className="mx-auto">
            { accion === 'crear' ? ('Crear producto') : ('Guardar producto')}
          </Button>
        </Row>
      </Form>
    </>
  );
}
