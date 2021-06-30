import { Swiper, SwiperSlide } from "swiper/react";
import { Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import CardProductoView from "./CardProductoView";

import { useEffect, useState } from "react";
import axios from "axios";

SwiperCore.use([Pagination]);

export default function SeccionAccesorios({
    setUser,
    filtro,
    productosFavoritos,
    getFavoritos,
}) {
    const [computadoras, setComputadoras] = useState([]);
    const [categoria, setCategoria] = useState(filtro);

    const getComputadoras = async () => {
        const params = { categoria };
        const response = await axios.get(`/producto/categoria`, { params });
        setComputadoras(response.data);
    };
    useEffect(() => {
        getComputadoras();
    }, [categoria]);

    return (
        <div className="container position-relative mt-5">
            <Nav.Link
                className="p-0"
                exact
                to={"/" + filtro + "s"}
                as={NavLink}
            >
                <span className="titulo1 ps-4">ACCESORIOS</span>
            </Nav.Link>
            <div className="row contenedor-seccion-compus">
                <p className=" subtitulo-seccion2">
                    Complementos ideales para tu SetUp
                </p>

                <div className="col-12 contenedor-items pb-4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            540: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            1025: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                        }}
                        className="mySwiper"
                        navigation={true}
                    >
                        {computadoras.map((computadora) => (
                            <SwiperSlide key={computadora._id}>
                                <CardProductoView
                                    computadora={computadora}
                                    setUser={setUser}
                                    productosFavoritos={productosFavoritos}
                                    getFavoritos={getFavoritos}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="boton-categorias">
                        <Nav.Link to={"/" + categoria + "s"} as={NavLink}>
                            <Button variant="info">
                                Ver todos los {categoria}s
                            </Button>
                        </Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
