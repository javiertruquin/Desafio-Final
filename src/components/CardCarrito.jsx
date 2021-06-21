import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function CardCarrito({ carrito, setUser }) {
    const [input, setInput] = useState({ cantidad: carrito.cantidad });
    const [producto, setProducto] = useState({});
    const [opciones, setOpciones] = useState([]);
    const [cantidad, setCantidad] = useState(carrito.cantidad);

    const deleteToCart = async () => {
        try {
            await axios.put("/usuarios/carrito/eliminar", {
                productoBuscado: carrito.producto?._id,
            });
            const { data } = await axios.get("/auth");
            setUser(data);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    useEffect(() => {
        const getProducto = async () => {
            const response = await axios.get(
                "/producto/" + carrito.producto?._id
            );
            setProducto(response.data);
            let opcion = [];
            let cantidad;
            if (response.data.stock > 10) {
                cantidad = 10;
            } else {
                cantidad = response.data.stock;
            }
            for (let i = 0; i < cantidad; i++) {
                opcion.push(i + 1);
            }
            setOpciones(opcion);
        };

        getProducto();
    }, []);

    const handleChange = async (e) => {
        const { name, value } = e.target;
        let changedInput = { [name]: value };
        setInput(changedInput);
        setCantidad(changedInput);
        try {
            const productoModificado = {
                productoBuscado: carrito.producto._id,
                cantidadNueva: value,
            };
            await axios.put("/usuarios/carrito/cantidad", productoModificado);
            const { data } = await axios.get("/auth");
            setUser(data);
        } catch (error) {
            console.log("handleChange ~ error", error);
        }
    };
    return (
        <div className="card border-1 mb-3" style={{ "min-height": "90px" }}>
            <div className="row m-auto mx-0 ">
                <div className="col-1 m-auto px-0">
                    <img
                        src={carrito.producto?.image1}
                        className="img-fluid ms-2"
                        alt="img"
                    />
                </div>
                <div className="col-10 m-auto px-0">
                    <div className="row">
                        <div className="col-12 col-lg-5 m-auto pt-3 pt-lg-0">
                            <h5 className="d-flex my-auto ms-3">
                                <Link to={"/producto/" + carrito.producto?._id}>
                                    <div
                                        style={{
                                            "font-size": "80%",
                                        }}
                                        className="text-fluid"
                                    >
                                        {carrito.producto?.titulo}
                                    </div>
                                </Link>
                            </h5>
                        </div>
                        <div className="col-4 col-lg-2 m-auto text-center text-lg-left ">
                            <div
                                style={{ "font-size": "80%" }}
                                className="h-50"
                            >
                                Precio:
                            </div>
                            <div>${carrito.producto?.precio}</div>
                        </div>
                        <div className="col-4 col-lg-2 m-auto text-center text-lg-left">
                            <Form.Group
                                className="my-4"
                                controlId="exampleForm.ControlSelect1"
                            >
                                <div
                                style={{ "font-size": "80%" }}
                                className="h-50 text-center"
                            >
                                Cantidad:
                            </div>

                                <Form.Control
                                    className="mx-auto"
                                    as="select"
                                    size="sm"
                                    onChange={(e) => handleChange(e)}
                                    name="cantidad"
                                    style={{ "width": "40px" }}
                                    defaultValue={cantidad}
                                >
                                    {opciones?.map((i) => (
                                        <option value={i}>{i}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            {/* <select onChange={(e) => handleChange(e)}

                                // defaultValue={carrito.cantidad}
                                className="w-100 text-center text-lg-left"
                            >
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                            </select> */}
                        </div>
                        <div className="col-4 col-lg-2 m-auto text-center text-lg-left">
                            <div
                                style={{ "font-size": "80%" }}
                                className="h-50 m-0"
                            >
                                Subtotal:
                            </div>
                            {/* {console.log("input", input)} */}
                            <div>
                                ${carrito.producto?.precio * input.cantidad}
                            </div>
                            {/* <div>${carrito.producto?.precio * carrito.cantidad}</div> */}
                        </div>
                    </div>
                </div>
                <div className="col-1 text-center m-auto px-0">
                    <a>
                        <i
                            className=" text-danger fas fa-trash-alt"
                            onClick={deleteToCart}
                        ></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
