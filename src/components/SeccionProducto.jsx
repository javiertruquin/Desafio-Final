import React from "react";
import { Button, Card, Carousel, Form } from "react-bootstrap";
import compu1 from "../assets/img/compu1.jpeg";
import compu2 from "../assets/img/compu2.jpeg";
import compu3 from "../assets/img/compu3.jpeg";
import metodoPago from "../assets/img/metodospago.png";

export default function SeccionProducto() {
    return (
        <div className="container position-relative my-5 ">
            <Card className="p-3 m-auto row flex-row">
                <div className="col-8 ">
                    <div className="row mb-2">
                        <div className="col-1 px-0">
                            <Card className="mb-2">
                                <Card.Img
                                    className="img-fluid"
                                    variant="top"
                                    src={compu1}
                                />
                            </Card>
                            <Card className="mb-2">
                                <Card.Img
                                    className="img-fluid"
                                    variant="top"
                                    src={compu2}
                                />
                            </Card>
                            <Card className="mb-2">
                                <Card.Img
                                    className="img-fluid"
                                    variant="top"
                                    src={compu3}
                                />
                            </Card>
                        </div>
                        <div className="col-11">
                            <Card.Img className="" variant="top" src={compu2} />
                        </div>
                    </div>
                    <div className="border-top">
                        <h3 className="mt-4">
                            Más publicaciones de RollingTech
                        </h3>
                        <div>
                            <Carousel indicators={false}>
                                <Carousel.Item interval={5000}>
                                    <div className="row">
                                        <div className="col-4 my-1 p-4">
                                            <img
                                                src={compu2}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="titulo-producto text-center">
                                                Estación de trabajo HP Z2 Mini
                                                G4
                                            </p>
                                            <div>
                                                <span className="precio-producto d-flex justify-content-center">
                                                    $64.000
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <span>
                                                    {" "}
                                                    <button className="btn-cart">
                                                        {" "}
                                                        <i class="fas fa-shopping-cart"></i>
                                                    </button>
                                                </span>
                                                <button className="btn-comprar mt-2">
                                                    Comprar
                                                </button>
                                                <span>
                                                    {" "}
                                                    <button className="btn-heart">
                                                        {" "}
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-4 my-1 p-4">
                                            <img
                                                src={compu2}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="titulo-producto text-center">
                                                Estación de trabajo HP Z2 Mini
                                                G4
                                            </p>
                                            <div>
                                                <span className="precio-producto d-flex justify-content-center">
                                                    $64.000
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <span>
                                                    {" "}
                                                    <button className="btn-cart">
                                                        {" "}
                                                        <i class="fas fa-shopping-cart"></i>
                                                    </button>
                                                </span>
                                                <button className="btn-comprar mt-2">
                                                    Comprar
                                                </button>
                                                <span>
                                                    {" "}
                                                    <button className="btn-heart">
                                                        {" "}
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-4 my-1 p-4">
                                            <img
                                                src={compu2}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="titulo-producto text-center">
                                                Estación de trabajo HP Z2 Mini
                                                G4
                                            </p>
                                            <div>
                                                <span className="precio-producto d-flex justify-content-center">
                                                    $64.000
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <span>
                                                    {" "}
                                                    <button className="btn-cart">
                                                        {" "}
                                                        <i class="fas fa-shopping-cart"></i>
                                                    </button>
                                                </span>
                                                <button className="btn-comprar mt-2">
                                                    Comprar
                                                </button>
                                                <span>
                                                    {" "}
                                                    <button className="btn-heart">
                                                        {" "}
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <div className="row">
                                    <div className="col-4 my-1 p-4">
                                            <img
                                                src={compu2}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="titulo-producto text-center">
                                                Estación de trabajo HP Z2 Mini
                                                G4
                                            </p>
                                            <div>
                                                <span className="precio-producto d-flex justify-content-center">
                                                    $64.000
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <span>
                                                    {" "}
                                                    <button className="btn-cart">
                                                        {" "}
                                                        <i class="fas fa-shopping-cart"></i>
                                                    </button>
                                                </span>
                                                <button className="btn-comprar mt-2">
                                                    Comprar
                                                </button>
                                                <span>
                                                    {" "}
                                                    <button className="btn-heart">
                                                        {" "}
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-4 my-1 p-4">
                                            <img
                                                src={compu2}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="titulo-producto text-center">
                                                Estación de trabajo HP Z2 Mini
                                                G4
                                            </p>
                                            <div>
                                                <span className="precio-producto d-flex justify-content-center">
                                                    $64.000
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <span>
                                                    {" "}
                                                    <button className="btn-cart">
                                                        {" "}
                                                        <i class="fas fa-shopping-cart"></i>
                                                    </button>
                                                </span>
                                                <button className="btn-comprar mt-2">
                                                    Comprar
                                                </button>
                                                <span>
                                                    {" "}
                                                    <button className="btn-heart">
                                                        {" "}
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-4 my-1 p-4">
                                            <img
                                                src={compu2}
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <p className="titulo-producto text-center">
                                                Estación de trabajo HP Z2 Mini
                                                G4
                                            </p>
                                            <div>
                                                <span className="precio-producto d-flex justify-content-center">
                                                    $64.000
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <span>
                                                    {" "}
                                                    <button className="btn-cart">
                                                        {" "}
                                                        <i class="fas fa-shopping-cart"></i>
                                                    </button>
                                                </span>
                                                <button className="btn-comprar mt-2">
                                                    Comprar
                                                </button>
                                                <span>
                                                    {" "}
                                                    <button className="btn-heart">
                                                        {" "}
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="col-4 pe-0">
                    <Card>
                        <Card.Body className="">
                            <Card.Title>
                                Estación de trabajo HP Z2 Mini G4
                            </Card.Title>
                            <h5 className="grey-text">
                                <del>$55000.00</del>
                            </h5>
                            <div className="d-flex ">
                                <h3 className="my-auto">
                                    <strong>$50000.00</strong>
                                </h3>
                                <p className="my-auto ms-1 text-success">
                                    10% OFF
                                </p>
                            </div>
                            <p className="d-flex mb-0">
                                en
                                <p className="ms-1 text-success mb-0">
                                    12 x $5000.00 sin interés
                                </p>
                            </p>
                            <Card.Text>
                                <a href="">Ver formas de pago</a>
                            </Card.Text>
                            <div className="d-flex my-3">
                                <i className="text-success fas fa-truck mt-1 me-1"></i>
                                <div>
                                    <p className="my-auto ms-1 text-success">
                                        <strong>Envío gratis </strong>
                                    </p>
                                    <a className="ms-1" href="">
                                        Ver formas de envío
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex my-3">
                                <i className="text-success fas fa-reply mt-1 me-2"></i>
                                <div>
                                    <p className="my-auto ms-1 text-success">
                                        <strong>Devolución inmediata </strong>
                                    </p>
                                    <p className="grey-text ms-1 mb-0">
                                        Tenés 30 días desde que lo recibís
                                    </p>
                                    <a className="ms-1" href="">
                                        Conocer mas
                                    </a>
                                </div>
                            </div>
                            <p>
                                <strong>Stock disponible</strong>
                            </p>
                            <div className="d-flex my-2 mb-3">
                                <Card.Text className="my-auto me-2">
                                    Cantidad:
                                </Card.Text>
                                <Form.Control
                                    className="me-2 col-6"
                                    as="select"
                                    size="sm"
                                    custom
                                >
                                    <option>1 unidad</option>
                                    <option>2 unidades</option>
                                    <option>3 unidades</option>
                                    <option>4 unidades</option>
                                    <option>5 unidades</option>
                                </Form.Control>
                            </div>
                            <Button
                                className="w-100 my-1 mx-0"
                                Nvariant="primary"
                                size="lg"
                            >
                                Comprar Ahora
                            </Button>
                            <Button
                                className="w-100 my-1 mx-0"
                                variant="outline-primary"
                                size="lg"
                            >
                                <i class="fas fa-shopping-cart me-2"></i>
                                Agregar al carrito
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3">
                        <Card.Body>
                            <h3>Medios de pago</h3>
                            <Button
                                className="w-100 my-1 mx-0"
                                variant="success"
                                size=""
                            >
                                <p className="m-0 text-lowercase">
                                    <i class="far fa-credit-card me-2"></i>
                                    Pagá hasta en 12 cuotas sin interés
                                </p>
                            </Button>
                            <p className="mt-3 mb-0">Tarjetas disponibles:</p>
                            <div className="">
                                <img src={metodoPago} alt="" />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Card>
        </div>
    );
}
