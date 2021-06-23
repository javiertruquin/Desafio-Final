import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Card, Form } from "react-bootstrap";
import metodoPago from "../assets/img/metodospago.png";
import { useLocation } from "react-router-dom";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import { useHistory, Link } from "react-router-dom";

import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import { useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

SwiperCore.use([Navigation, Thumbs]);

export default function SeccionProducto({ setUser }) {
    const params = useParams();
    const [producto, setProducto] = useState({});
    let location = useLocation();
    const [opciones, setOpciones] = useState([]);
    const localToken = JSON.parse(localStorage.getItem("token")) || "";
    const [token, setToken] = useState(localToken);
    let history = useHistory();

    useEffect(() => {
        setToken(localToken);
    }, [localToken]);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const addToCart = async () => {
        if (!token) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No estás logueado",
                timer: 1800,
                showConfirmButton: false,
            });
            history.push("/login");
        } else {
            try {
                await axios.put("/usuarios/carrito", {
                    itemCarrito: { producto: producto._id, cantidad: 1 },
                });
                const { data } = await axios.get("/auth");
                setUser(data);
            } catch (error) {
                console.log(error.response.data);
            }
        }
    };

    const getProducto = async () => {
        const response = await axios.get("/producto/" + params.id);
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
    useEffect(() => {
        getProducto();
    }, []);

    useEffect(() => {
        getProducto();
    }, [location]);

    return (
        <>
            {/* <NavReactB /> */}
            <div className="container my-3 fuente">
                <div className="p-3 m-auto row flex-row">
                    <Link to="/">
                        <a href="/">Volver atras</a>
                    </Link>
                    <div className="col-lg-7 ">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img
                                    src={producto.image1}
                                    className="img-fluid"
                                    alt="img"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={producto.image2}
                                    className="img-fluid"
                                    alt="img"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src={producto.image3}
                                    className="img-fluid"
                                    alt="img"
                                />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesVisibility={true}
                            watchSlidesProgress={true}
                            className="mySwiper"
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 5,
                                },
                                930: {
                                    slidesPerView: 3,
                                    spaceBetween: 5,
                                },

                                1151: {
                                    slidesPerView: 3,
                                    spaceBetween: 5,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="cuadrado">
                                    <img
                                        src={producto.image1}
                                        className="img-fluid"
                                        alt="img"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cuadrado">
                                    <img
                                        src={producto.image2}
                                        className="img-fluid"
                                        alt="img"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cuadrado">
                                    <img
                                        src={producto.image3}
                                        className="img-fluid"
                                        alt="img"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className="border-top detalle-producto-seccion">
                            <h3 className="mt-4 titulo-infopro-view mb-4">
                                Información del producto
                            </h3>
                            {producto.descripcion}
                        </div>
                    </div>

                    <div className="col-lg-5 pe-0">
                        <Card>
                            <Card.Body className="fuente">
                                <p className="titulo-producto-view">
                                    {producto.titulo}
                                </p>
                                {producto.descuento && (
                                    <h5 className="grey-text">
                                        <del>${producto.precio}</del>
                                    </h5>
                                )}
                                <div className="d-flex ">
                                    <h3 className="my-auto">
                                        <strong>
                                            $
                                            {producto.descuento
                                                ? producto.descuento
                                                : producto.precio}
                                        </strong>
                                    </h3>
                                    <p className="my-auto ms-1 text-success">
                                        {producto.descuento &&
                                            100 -
                                                (producto.descuento * 100) /
                                                    producto.precio +
                                                "% OFF"}
                                    </p>
                                </div>
                                <p className="d-flex mb-0">
                                    en
                                    <p className="ms-1 text-success mb-0">
                                        12 x $
                                        {producto.descuento
                                            ? Number.parseInt(
                                                  producto.descuento
                                              ) / 12
                                            : Number.parseInt(producto.precio) /
                                              12}
                                        &nbsp; sin interés
                                    </p>
                                </p>
                                <Card.Text>
                                    <a href="/">Ver formas de pago</a>
                                </Card.Text>
                                <div className="d-flex my-3">
                                    <i className="text-success fas fa-truck mt-1 me-1"></i>
                                    <div>
                                        <p className="my-auto ms-1 text-success">
                                            <strong>Envío gratis </strong>
                                        </p>
                                        <a className="ms-1" href="/">
                                            Ver formas de envío
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex my-3">
                                    <i className="text-success fas fa-reply mt-1 me-2"></i>
                                    <div>
                                        <p className="my-auto ms-1 text-success">
                                            <strong>
                                                Devolución inmediata{" "}
                                            </strong>
                                        </p>
                                        <p className="grey-text ms-1 mb-0">
                                            Tenés 30 días desde que lo recibís
                                        </p>
                                        <a className="ms-1" href="/">
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
                                        {opciones?.map((index) => (
                                            <option>{index}</option>
                                        ))}
                                    </Form.Control>
                                </div>
                                <div onClick={addToCart}>
                                    <Link to="/envio" className="my-auto">
                                        <Button
                                            className="w-100 my-1 mx-0"
                                            size="lg"
                                        >
                                            Comprar Ahora
                                        </Button>
                                    </Link>
                                </div>
                                <Button
                                    className="w-100 my-1 mx-0"
                                    variant="outline-primary"
                                    size="lg"
                                    onClick={addToCart}
                                >
                                    <i className="fas fa-shopping-cart me-2"></i>
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
                                        <i className="far fa-credit-card me-2"></i>
                                        Pagá hasta en 12 cuotas sin interés
                                    </p>
                                </Button>
                                <p className="mt-3 mb-0">
                                    Tarjetas disponibles:
                                </p>
                                <div className="">
                                    <img src={metodoPago} alt="" />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
