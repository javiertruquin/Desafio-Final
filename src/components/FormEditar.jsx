import axios from "axios";
import { React, useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import Swal from "sweetalert2";

export default function FormEditar({ getProductos, accion, producto }) {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    const [porcentajeDescuento, setPorcentajeDescuento] = useState();
    let porcentajeDescuentoInt = 0;

    if (producto?.descuento) {
        porcentajeDescuentoInt =
            100 - (producto.descuento * 100) / producto.precio;
    }
    useEffect(() => {
        setPorcentajeDescuento(porcentajeDescuentoInt);
    }, [porcentajeDescuentoInt]);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        const inputCodigo = input.codigo;
        if (inputCodigo > 99999999999999999999) {
            Swal.fire({
                icon: "error",
                title: "Código demasiado largo, máximo 20 caracteres!",
            });
            // alert('Código demasiado largo, máximo 20 caracteres!')
            return event.stopPropagation();
        }
        const inputPrecio = +input.precio;
        if (inputPrecio < 0) {
            Swal.fire({
                icon: "error",
                title: "El precio tiene que ser mayor a 0!",
            });
            // alert('el precio tiene que ser mayor a 0!')
            return event.stopPropagation();
        }
        const inputStock = +input.stock;
        if (inputStock < 0) {
            Swal.fire({
                icon: "error",
                title: "El stock tiene que ser mayor a 0!",
            });
            // alert('el stock tiene que ser mayor a 0!')
            return event.stopPropagation();
        }
        if (inputStock > 999) {
            Swal.fire({
                icon: "error",
                title: "Stock demasiado grande, máximo 3 caracteres!",
            });
            // alert('Stock demasiado grande, máximo 3 caracteres!')
            return event.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity() === false) {
            return event.stopPropagation();
        }
        if (input.categoria === undefined) {
            Swal.fire({
                icon: "error",
                title: "Tienes que elegir una categoria!",
            });
            // alert('Tienes que elegir una categoria!')
            return event.stopPropagation();
        }

        if (accion === "crear") {
            try {
                await axios.post("/producto", input);
                getProductos();
                Swal.fire({
                    icon: "success",
                    title: "Producto creado con éxito",
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const productoModificado = { ...input, id: producto._id };
                await axios.put("/producto", productoModificado);
                getProductos();
                Swal.fire({
                    icon: "success",
                    title: "Producto editado con éxito",
                    showConfirmButton: false,
                    timer: 1800,
                });
            } catch (error) {
                console.log(error);
            }
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        let changedInput = { ...input, [name]: value };
        if (changedInput.descuento) {
            setPorcentajeDescuento(changedInput.descuento);
        }
        setInput(changedInput);
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {accion === "crear" && (
                    <Form.Group controlId="exampleForm.ControlInput">
                        <Form.Control
                            name="codigo"
                            onChange={(e) => handleChange(e)}
                            type="number"
                            required
                            placeholder="Código"
                        />
                        <Form.Control.Feedback>
                            Todo marcha bien!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo requerido!
                        </Form.Control.Feedback>
                    </Form.Group>
                )}
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                        name="titulo"
                        onChange={(e) => handleChange(e)}
                        type="txt"
                        maxLength="100"
                        required
                        placeholder="Título del producto"
                        // placeholder={ accion === 'editar' && producto.titulo || "Título del producto" }
                        defaultValue={
                            accion === "editar" ? producto.titulo : ""
                        }
                    />
                    <Form.Control.Feedback>
                        Todo marcha bien!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Campo requerido!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    className="my-4"
                    controlId="exampleForm.ControlInput2"
                >
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control
                        name="serie"
                        onChange={(e) => handleChange(e)}
                        type="txt"
                        maxLength="25"
                        placeholder="Serie"
                        defaultValue={accion === "editar" ? producto.serie : ""}
                    />
                    <Form.Control.Feedback type="invalid">
                        Campo requerido!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    {/* <Form.Label>Descripción</Form.Label> */}
                    <Form.Control
                        name="descripcion"
                        onChange={(e) => handleChange(e)}
                        as="textarea"
                        required
                        rows={3}
                        maxLength="700"
                        placeholder="Descripción"
                        defaultValue={
                            accion === "editar" ? producto.descripcion : ""
                        }
                    />
                    <Form.Control.Feedback>
                        Todo marcha bien!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Campo requerido!
                    </Form.Control.Feedback>
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
                            type="number"
                            name="precio"
                            // maxLength="2"
                            onChange={(e) => handleChange(e)}
                            id="inlineFormInputGroupUsername"
                            placeholder="Precio"
                            // isValid={numeroPositivo}
                            defaultValue={
                                accion === "editar" ? producto.precio : ""
                            }
                        />
                        <Form.Control.Feedback>
                            Todo marcha bien!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Campo requerido!
                        </Form.Control.Feedback>
                    </InputGroup>
                </div>
                <Form.Group controlId="formBasicRange">
                    <Form.Label>Descuento</Form.Label>
                    <Form.Control
                        type="range"
                        onChange={(e) => handleChange(e)}
                        name="descuento"
                        defaultValue={
                            producto?.descuento === undefined
                                ? "0"
                                : porcentajeDescuentoInt
                        }
                    />
                    <div className="porcentaje-form">
                        <strong>{porcentajeDescuento}%</strong>
                    </div>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                        name="stock"
                        required
                        onChange={(e) => handleChange(e)}
                        type="number"
                        placeholder="Stock"
                        defaultValue={accion === "editar" ? producto.stock : ""}
                    />
                    <Form.Control.Feedback>
                        Todo marcha bien!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Campo requerido!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlSelect1"
                >
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control
                        name="categoria"
                        required
                        onChange={(e) => handleChange(e)}
                        as="select"
                        defaultValue={
                            accion === "editar" ? producto.categoria : ""
                        }
                    >
                        {accion === "crear" && (
                            <option>Elige una opción</option>
                        )}
                        <option value="computadora">
                            Computadora de escritorio
                        </option>
                        <option value="notebook">Notebook</option>
                        <option value="accesorio">Accesorios</option>
                    </Form.Control>
                    <Form.Control.Feedback>
                        Todo marcha bien!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Campo requerido!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        name="image1"
                        required
                        maxLength="400"
                        onChange={(e) => handleChange(e)}
                        type="url"
                        // placeholder="URL Imagen 1"
                        defaultValue={
                            accion === "editar" ? producto.image1 : ""
                        }
                        placeholder="URL Imagen 1"
                    />
                    <Form.Control.Feedback>
                        Todo marcha bien!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Campo requerido!
                    </Form.Control.Feedback>
                    <Form.Control
                        name="image2"
                        onChange={(e) => handleChange(e)}
                        type="url"
                        maxLength="400"
                        // placeholder="URL Imagen 1"
                        defaultValue={
                            accion === "editar" ? producto.image2 : ""
                        }
                        placeholder="URL Imagen 2"
                    />
                    <Form.Control
                        name="image3"
                        onChange={(e) => handleChange(e)}
                        type="url"
                        maxLength="400"
                        placeholder="URL Imagen 3"
                        defaultValue={
                            accion === "editar" ? producto.image3 : ""
                        }
                        // placeholder="URL Imagen 1"
                    />
                    {/* <Form.Control type="url" placeholder="URL Imagen 3" /> */}
                    {/* <Form.File id="custom-file" label="Cargar Imagen" custom />
          <Form.File className="my-2" id="custom-file" label="Cargar Imagen" custom />
          <Form.File id="custom-file" label="Cargar Imagen" custom /> */}
                </Form.Group>
                <Row>
                    <Button type="submit" className="mx-auto">
                        {accion === "crear"
                            ? "Crear producto"
                            : "Guardar producto"}
                    </Button>
                </Row>
            </Form>
        </>
    );
}
