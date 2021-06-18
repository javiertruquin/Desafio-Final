import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function CardCarrito({
    carrito,
    setPrecioFinal,
    precioFinal,
    index,
    setUser,
}) {
    const [subTotal, setSubTotal] = useState(carrito.producto?.precio);
    const [input, setInput] = useState({ cantidad: 1 });
    //   const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // console.log("CardCarrito ~ carrito", carrito)
    //   console.log("CardCarrito ~ carrito", carrito.producto?.image1);
    // const [cantidad, setCantidad] = useState(carrito.cantidad)
    // console.log("CardCarrito ~ user", user)

    const handleChange = (e) => {
        const { name, value } = e.target;
        let changedInput = { [name]: value };
        setInput(changedInput);
    };
    //   let calculo = precioFinal + carrito.producto?.precio;

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

    // useEffect(() => {
    // let suma = precioFinal + carrito.producto?.precio;
    setPrecioFinal(subTotal);
    // }, [])

    console.log("precio final", precioFinal);

    //   setPrecioFinal()

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
                        <div className="col-12 col-lg-5 m-auto">
                            <h5 className="d-flex my-auto ms-3">
                                <Link to={'/producto/' + carrito.producto?._id} >
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
                            {/* <div style={{ "font-size": "80%" }} className="h-50">
                Cantidad:
              </div> */}
                            <Form.Group
                                className="my-4"
                                controlId="exampleForm.ControlSelect1"
                            >
                                <Form.Label style={{ "font-size": "80%" }}>Cantidad</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={(e) => handleChange(e)}
                                    name="cantidad"
                                    //   required
                                    //   defaultValue={accion === "editar" && usuario.rol}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    {/* { accion === 'editar' &&
             <option value="usuario">usuario</option>
            } */}
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
                            <div>${carrito.producto?.precio * input.cantidad}</div>
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
