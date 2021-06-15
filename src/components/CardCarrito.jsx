import React from "react";
import Carrito from "../pages/Carrito";

export default function CardCarrito({ carrito }) {
    // console.log("CardCarrito ~ carrito", carrito)
    console.log("CardCarrito ~ carrito", carrito.producto?.image1);
    // const [cantidad, setCantidad] = useState(carrito.cantidad)
    // console.log("CardCarrito ~ user", user)

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
                                <a href="">
                                    <div
                                        style={{
                                            "font-size": "80%",
                                        }}
                                        className="text-fluid"
                                    >
                                        {carrito.producto?.titulo}
                                    </div>
                                </a>
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
                            <div
                                style={{ "font-size": "80%" }}
                                className="h-50"
                            >
                                Cantidad:
                            </div>
                            <select
                                defaultValue={carrito.cantidad}
                                className="w-100 text-center text-lg-left"
                            >
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                            </select>
                        </div>
                        <div className="col-4 col-lg-2 m-auto text-center text-lg-left">
                            <div
                                style={{ "font-size": "80%" }}
                                className="h-50 m-0"
                            >
                                Subtotal:
                            </div>
                            <div>${carrito.producto?.precio * carrito.cantidad}</div>
                        </div>
                    </div>
                </div>
                <div className="col-1 text-center m-auto px-0">
                    <a>
                        <i className=" text-danger fas fa-trash-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
