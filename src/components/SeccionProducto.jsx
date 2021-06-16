import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Card, Carousel, Form } from "react-bootstrap";
import compu1 from "../assets/img/compu1/compu1.jpeg";
import compu2 from "../assets/img/compu2/compu2-1.jpeg";
import compu3 from "../assets/img/compu3/compu3.jpeg";
import metodoPago from "../assets/img/metodospago.png";
import NavReactB from "../components/NavReactB"
import Footer from "../components/Footer"

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

import SwiperCore, {
    Navigation, Thumbs
} from 'swiper/core';

SwiperCore.use([Navigation, Thumbs]);

export default function SeccionProducto() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            {/* <NavReactB /> */}
            <div className="container my-3 ">
                <div className="p-3 m-auto row flex-row">
                <a href="/">Volver atras</a>
                <div className="col-lg-7 ">
                        <Swiper
                            style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            className="mySwiper2">
                            <SwiperSlide>
                                <div><img src={compu2} className="img-fluid" alt="img" /></div>

                            </SwiperSlide>
                            <SwiperSlide >
                                <img src={compu2} className="img-fluid" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={compu2} className="img-fluid" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={compu2} className="img-fluid" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={compu2} className="img-fluid" alt="img" />
                            </SwiperSlide>

                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true} spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesVisibility={true}
                            watchSlidesProgress={true}
                            className="mySwiper"
                            breakpoints={{
                                "640": {
                                    slidesPerView: 2,
                                    spaceBetween: 5
                                },
                                "930": {
                                    slidesPerView: 3,
                                    spaceBetween: 5
                                },

                                "1151": {
                                    slidesPerView: 3,
                                    spaceBetween: 5
                                }
                            }}
                        >

                            <SwiperSlide>
                                <div className="cuadrado">
                                    <img src={compu2} className="img-fluid" alt="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cuadrado">
                                    <img src={compu2} className="img-fluid" alt="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cuadrado">
                                    <img src={compu2} className="img-fluid" alt="img" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cuadrado">
                                    <img src={compu2} className="img-fluid" alt="img" />
                                </div>
                            </SwiperSlide>

                        </Swiper>

                        <div className="border-top detalle-producto-seccion">
                            <h3 className="mt-4 titulo-infopro-view mb-4">
                                Información del producto
                            </h3>
                            <p>Prepárate para jugar a tu manera. Gracias a la expansión sin inconvenientes y las actualizaciones simples, este potente equipo se mantiene al día con respecto a ti y los juegos del futuro. Potencia y rendimiento para una experiencia de primera clase con entretenimiento, juegos y varias tareas a la vez.</p>
                            <ul className="pe-4 mt-4">
                                <li>
                                FAMILIA DEL PROCESADOR Procesador Intel® Core™ i5 de 10.ª generación
                                </li>
                                <li>
                                PROCESADOR Intel® Core™ i5-10400 (frecuencia base de 2,9 GHz, hasta 4,3 GHz con tecnología Intel® Turbo Boost, 12 MB de caché L3 y 6 núcleos)
                                </li>
                                <li>
                                CHIPSET Intel® H470
                                </li>
                                <li>
                                DISCO DURO Disco duro SATA de 1 TB y 7200 rpm
                                </li>
                                <li>
                                MEMORIA 12 GB de RAM DDR4-2666 MHz (1 x 4 GB, 1 x 8 GB)
                                </li>
                                <li>
                                RANURAS DE MEMORIA 2 DIMM
                                </li>
                            </ul>
                            <div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 pe-0">
                        <Card>
                            <Card.Body className="fuente">
                                <p className="titulo-producto-view">
                                    Estación de trabajo HP Z2 Mini G4
                                </p>
                                <h5 className="grey-text">
                                    <del>$55000.00</del>
                                    {/* <del>{ precio + 15000 }</del> */}
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
                                            <strong>Devolución inmediata </strong>
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
                                        <option>1 unidad</option>
                                        <option>2 unidades</option>
                                        <option>3 unidades</option>
                                        <option>4 unidades</option>
                                        <option>5 unidades</option>
                                    </Form.Control>
                                </div>
                                <Button
                                    className="w-100 my-1 mx-0 btn-serie"

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
                    
                </div>
            </div>
        </>
    );
}
